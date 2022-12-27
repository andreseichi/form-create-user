import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  required?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, required = false, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error} isRequired={required}>
      {!!label && (
        <FormLabel htmlFor={name} fontSize={[14, 16]}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        fontSize={[14, 18]}
        ref={ref}
        backgroundColor="gray.100"
        color="black"
        w="100%"
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
