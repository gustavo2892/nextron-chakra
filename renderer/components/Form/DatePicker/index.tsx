import React, { useState } from "react";

import * as S from './styles';

export const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <S.DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
  );
};
