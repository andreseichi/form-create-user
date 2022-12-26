import { useContext } from "react";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { Input } from "../../../components/Input";
import { UserFormContext } from "../../../context/UserFormContext";

type UserAddressFormData = {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  reference: string;
};

export function UserAddress() {
  const { handleSetUserAddress } = useContext(UserFormContext);
  const navigate = useNavigate();

  const userInfoFormSchema = z
    .object({
      cep: z
        .string()
        .min(1, "CEP obrigatorio")
        .max(8)
        .length(8, "CEP inválido"),
      street: z.string().min(1, "Rua obrigatória"),
      number: z.string().min(1, "Número obrigatório"),
      neighborhood: z.string().min(1, "Bairro obrigatório"),
      city: z.string().min(1, "Cidade obrigatória"),
      reference: z.string(),
    })
    .required()
    .refine((data) => !isNaN(Number(data.cep)) && data.cep.length === 8, {
      message: "CEP inválido",
      path: ["cep"],
    })
    .refine((data) => !isNaN(Number(data.number)), {
      message: "Número inválido",
      path: ["number"],
    });

  const { register, handleSubmit, formState } = useForm<UserAddressFormData>({
    resolver: zodResolver(userInfoFormSchema),
  });
  const errors = formState.errors;

  const handleSubmitUserAddress: SubmitHandler<UserAddressFormData> = (
    values
  ) => {
    handleSetUserAddress(values);
    navigate("/about");
  };

  function handlePreviousStep() {
    navigate("/");
  }

  return (
    <Flex
      as="form"
      direction="column"
      align="flex-start"
      justify="space-between"
      w="100%"
      minH="100%"
      overflowY="hidden"
      onSubmit={handleSubmit(handleSubmitUserAddress)}
    >
      <Box w="100%" pr="54px">
        <Stack spacing="26" w="100%">
          <Flex gap="60px">
            <Input
              {...register("cep")}
              name="cep"
              label="CEP"
              error={errors.cep}
              maxLength={8}
            />
            <Input
              {...register("street")}
              name="street"
              label="Rua"
              error={errors.street}
            />
          </Flex>

          <Flex gap="60px" w="100%">
            <Flex gap="8px" w="100%">
              <Input
                {...register("number")}
                name="number"
                label="Número"
                type="string"
                error={errors.number}
                maxLength={11}
              />
              <Input
                {...register("neighborhood")}
                name="neighborhood"
                label="Bairro"
                error={errors.neighborhood}
              />
            </Flex>

            <Input
              {...register("city")}
              name="city"
              label="Cidade"
              error={errors.city}
            />
          </Flex>
          <Input
            {...register("reference")}
            name="reference"
            label="Ponto de referência"
            error={errors.reference}
          />
        </Stack>
      </Box>

      <Flex position="absolute" bottom="26px" alignSelf="flex-end" gap={6}>
        <Button
          colorScheme="purple"
          backgroundColor="gray.400"
          _hover={{ filter: "brightness(0.9)" }}
          size="lg"
          minW="226px"
          w="100%"
          fontWeight={500}
          fontSize="16px"
          onClick={handlePreviousStep}
          isLoading={formState.isSubmitting}
        >
          Anterior
        </Button>

        <Button
          type="submit"
          colorScheme="purple"
          backgroundColor="purple.400"
          _hover={{ filter: "brightness(0.9)" }}
          size="lg"
          minW="226px"
          w="100%"
          fontWeight={500}
          fontSize="16px"
          isLoading={formState.isSubmitting}
        >
          Próximo passo
        </Button>
      </Flex>
    </Flex>
  );
}
