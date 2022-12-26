import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
  required?: boolean;
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, label, error = null, required = false, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error} isRequired={required}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraTextarea
        name={name}
        id={name}
        size="lg"
        ref={ref}
        backgroundColor="gray.100"
        color="black"
        w="100%"
        resize="none"
        rows={8}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Textarea = forwardRef(TextareaBase);
