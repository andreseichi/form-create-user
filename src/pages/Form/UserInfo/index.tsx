import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Input } from "../../../components/Input";
import { UserFormContext } from "../../../context/UserFormContext";

type UserInfoFormData = {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  birthDate: Date;
};

const userInfoFormSchema = z
  .object({
    name: z.string().min(1, "Nome obrigatório"),
    password: z.string().min(3, "Senha obrigatória"),
    confirmPassword: z.string().min(3, "Confirmação de senha obrigatória"),
    email: z.string().email({
      message: "Email inválido",
    }),
    birthDate: z
      .preprocess(
        (value) => {
          if (
            (typeof value == "string" && value.trim()) ||
            value instanceof Date
          )
            return new Date(value);
        },
        z.date({
          required_error: "Data de nascimento obrigatória",
        })
      )
      .refine((value) => value instanceof Date, {
        message: "Data de nascimento inválida",
        path: ["birthDate"],
      })
      .transform((value) => {
        return new Date(value).toISOString().split("T")[0];
      }),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

export function UserInfo() {
  const { handleSetUserInfo, user } = useContext(UserFormContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, formState, setValue } =
    useForm<UserInfoFormData>({
      resolver: zodResolver(userInfoFormSchema),
    });
  const errors = formState.errors;

  const handleSubmitUserInfo: SubmitHandler<UserInfoFormData> = (values) => {
    handleSetUserInfo(values);
    navigate("/address");
  };

  useEffect(() => {
    if (user.userInfo) {
      setValue("name", user.userInfo.name);
      setValue("password", user.userInfo.password);
      setValue("confirmPassword", user.userInfo.confirmPassword);
      setValue("email", user.userInfo.email);
      setValue("birthDate", user.userInfo.birthDate);
    }
  }, [user]);

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
      <Box w="100%" pr={["0", "54px"]}>
        <Stack spacing="26" w="100%">
          <Input
            {...register("name")}
            name="name"
            label="Nome"
            error={errors.name}
          />
          <Flex gap={["8px", "60px"]} align="flex-end">
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
          <Flex gap={["8px", "60px"]} align="flex-end">
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

      <Flex
        position={["initial", "absolute"]}
        bottom="26px"
        alignSelf="flex-end"
        gap={6}
        mt={["20px", "0"]}
        w={["100%", "auto"]}
      >
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
