import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Input } from "../../../components/Input";
import { UserFormContext } from "../../../context/UserFormContext";

type UserInfoFormData = {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  birthDate: string;
};

const userInfoFormSchema = z
  .object({
    name: z.string().min(1, "Nome obrigatório"),
    password: z.string().min(3, "Senha obrigatória"),
    confirmPassword: z.string().min(3, "Confirmação de senha obrigatória"),
    email: z
      .string()
      .email()
      .transform((val) => val.split("@")[1]),
    birthDate: z.string().min(1, "Data obrigatória"),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export function UserInfo() {
  const { handleSetUserInfo } = useContext(UserFormContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<UserInfoFormData>({
    resolver: zodResolver(userInfoFormSchema),
  });
  const errors = formState.errors;

  const handleSubmitUserInfo: SubmitHandler<UserInfoFormData> = (values) => {
    handleSetUserInfo(values);
    navigate("/address");
  };

  return (
    <Flex
      as="form"
      direction="column"
      align="flex-start"
      justify="space-between"
      w="100%"
      minH="100%"
      overflowY="hidden"
      onSubmit={handleSubmit(handleSubmitUserInfo)}
    >
      <Box w="100%" pr="54px">
        <Stack spacing="26" w="100%">
          <Input
            {...register("name")}
            name="name"
            label="Nome"
            error={errors.name}
          />
          <Flex gap="60px">
            <Input
              {...register("password")}
              name="password"
              label="Senha"
              type="password"
              error={errors.password}
            />
            <Input
              {...register("confirmPassword")}
              name="confirmPassword"
              label="Confirmar Senha"
              type="password"
              error={errors.confirmPassword}
            />
          </Flex>
          <Flex gap="60px">
            <Input
              {...register("email")}
              name="email"
              label="Email"
              error={errors.email}
            />
            <Input
              {...register("birthDate")}
              name="birthDate"
              label="Data de nascimento"
              type="date"
              error={errors.birthDate}
            />
          </Flex>
        </Stack>
      </Box>

      <Button
        type="submit"
        colorScheme="purple"
        backgroundColor="purple.400"
        _hover={{ filter: "brightness(0.9)" }}
        size="lg"
        alignSelf="flex-end"
        position="absolute"
        bottom="26px"
        isLoading={formState.isSubmitting}
      >
        Próximo passo
      </Button>
    </Flex>
  );
}
