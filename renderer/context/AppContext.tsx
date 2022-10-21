import React, { useContext, useEffect, useState } from 'react';

interface IAppContext {
  isOnline: boolean;
  setIsOnline?: (loading: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>(null);

export const AppContextProvider = (props) => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    if (window?.navigator?.onLine) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }

    window.addEventListener('offline', () => {
      console.log('Offline')
      setIsOnline(false);
    });

    window.addEventListener('online', () => {
      console.log('Online')
      setIsOnline(true);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isOnline,
        setIsOnline
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
