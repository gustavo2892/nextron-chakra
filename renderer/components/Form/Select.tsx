import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectFieldProps as ChakraSelectFieldProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { Option } from '../../models/form';

interface SelectFieldProps extends ChakraSelectFieldProps {
  name: string;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  labelColor?: string[];
  isRequired?: boolean;
  options: Option[];
}

const SelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectFieldProps
> = (
  { name, label, error = null, labelColor, isRequired = false, options, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      {!!label && (
        <FormLabel
          htmlFor={name}
          color={labelColor ? labelColor[1] : "gray.800"}
          _dark={{ color: labelColor ? labelColor[2] : "gray.50" }}
        >
          {label}
        </FormLabel>
      )}
      <ChakraSelect
        name={name}
        id={name}
        variant="outline"
        ref={ref}
        size="lg"
        {...rest}
      >
        {
          options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)
        }
      </ChakraSelect>
      {!!error && <FormErrorMessage>{typeof error?.message === "string" && error?.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
