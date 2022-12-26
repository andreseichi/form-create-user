import { useContext } from "react";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { UserFormContext } from "../../../context/UserFormContext";

import { Textarea } from "../../../components/TextArea";

type UserAboutFormData = {
  about: string;
};

export function UserAbout() {
  const { handleSetUserAbout } = useContext(UserFormContext);
  const navigate = useNavigate();

  const userInfoAboutSchema = z
    .object({
      about: z
        .string()
        .min(20, "Você precisa escrever mais sobre você")
        .max(500, "Você ultrapassou o limite de caracteres"),
    })
    .required();

  const { register, handleSubmit, formState } = useForm<UserAboutFormData>({
    resolver: zodResolver(userInfoAboutSchema),
  });
  const errors = formState.errors;

  const handleSubmitUserAbout: SubmitHandler<UserAboutFormData> = (values) => {
    handleSetUserAbout(values);
    navigate("/success");
  };

  function handlePreviousStep() {
    navigate("/address");
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
      onSubmit={handleSubmit(handleSubmitUserAbout)}
    >
      <Box w="100%" pr="54px">
        <Stack spacing="26" w="100%">
          <Flex gap="60px">
            <Textarea
              {...register("about")}
              name="about"
              label="Nos conte mais sobre você"
              error={errors.about}
            />
          </Flex>
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