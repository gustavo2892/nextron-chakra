import { forwardRef } from "react";
import {
  Stack,
  Radio,
  RadioGroup as ChakraRadioGroup,
  FormControl,
  FormErrorMessage,
  FormLabel
} from "@chakra-ui/react";
import { FieldError, Merge, FieldErrorsImpl, Controller } from "react-hook-form";
import { Option } from '../../models/form';

interface RadioGroupProps {
  name: string;
  options: Option[];
  control: any;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const RadioGroupBase = ({ name, error, label, options, control, ...rest }: RadioGroupProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel as="legend">{label}</FormLabel>}
      <Controller
        render={({
          field: { onChange, value }
        }) => (
          <ChakraRadioGroup onChange={onChange} value={value} ref={ref}>
            <Stack direction="row">
              {
                options.map((option) => <Radio key={option.value} value={option.value}>{option.label}</Radio>)
              }
            </Stack>
          </ChakraRadioGroup>
        )}
        name={name}
        control={control}
      />
      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export const RadioGroup = forwardRef(RadioGroupBase);