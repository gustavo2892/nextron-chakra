import {
  FormControl,
  FormLabel,
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraCheckboxProps {
  name: string;
  label?: string;
  error?: FieldError;
  labelColor?: string[];
  isRequired?: boolean,
}

const CheckboxBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, labelColor, isRequired = false, ...rest },
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
      <ChakraCheckbox
        name={name}
        id={name}
        ref={ref}
        variant="outline"
        size="lg"
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Checkbox = forwardRef(CheckboxBase);
