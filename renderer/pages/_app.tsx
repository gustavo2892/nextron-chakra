import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react'
import { AppContextProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ChakraProvider>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
