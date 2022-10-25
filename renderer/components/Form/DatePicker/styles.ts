import styled from "@emotion/styled";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps extends ReactDatePickerProps {
  selected?: Date;
}

export const DatePicker = styled(ReactDatePicker)<DatePickerProps>`
  .react-datepicker-ignore-onclickoutside {
    border-color: 1px solid #e0e0e0;
  }
`;