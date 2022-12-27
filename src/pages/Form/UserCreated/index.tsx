import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserFormContext } from "../../../context/UserFormContext";

export function UserCreated() {
  const { resetUser, user } = useContext(UserFormContext);

  const navigate = useNavigate();

  function handleGoToHome() {
    resetUser();
    navigate("/");
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        maxW={545}
        minH={["0", "738px"]}
        bg="white"
        pt={["10px", "59px"]}
        pr={["8px", "40px"]}
        pb="38px"
        pl={["10px", "50px"]}
        borderRadius={8}
        direction="column"
        align="flex-start"
        gap={["6", "12"]}
        position="relative"
        border="2px solid"
        borderColor="gray.100"
        boxShadow="0px 4px 31px #EEF1F5;"
      >
        <Box alignSelf="center">
          <Text fontWeight={500} fontSize="4xl" lineHeight="54px">
            Usuário criado!
          </Text>
        </Box>

        <Flex
          alignItems="flex-start"
          direction="column"
          gap="24px"
          flex={1}
          w="100%"
          position="relative"
        >
          <Flex direction="column" gap="7px">
            <Text
              color="gray.400"
              fontWeight={500}
              fontSize="md"
              lineHeight="24px"
            >
              Nome
            </Text>
            <Text fontSize="2xl" lineHeight="36px">
              {user?.userInfo?.name}
            </Text>
          </Flex>

          <Flex direction="column" gap="7px">
            <Text
              color="gray.400"
              fontWeight={500}
              fontSize="md"
              lineHeight="24px"
            >
              Email
            </Text>
            <Text fontSize="2xl" lineHeight="36px">
              {user?.userInfo?.email}
            </Text>
          </Flex>

          <Divider orientation="horizontal" w="100%" />

          <Box w="100% ">
            <Flex justify="space-between">
              <Flex direction="column" gap="7px">
                <Text
                  color="gray.400"
                  fontWeight={500}
                  fontSize="md"
                  lineHeight="24px"
                >
                  Rua
                </Text>
                <Text fontSize="2xl" lineHeight="36px">
                  {user?.userAddress?.street}
                </Text>
              </Flex>

              <Flex direction="column" gap="7px">
                <Text
                  color="gray.400"
                  fontWeight={500}
                  fontSize="md"
                  lineHeight="24px"
                >
                  Número
                </Text>
                <Text fontSize="2xl" lineHeight="36px">
                  {user?.userAddress?.number}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Flex direction="column" gap="7px">
            <Text
              color="gray.400"
              fontWeight={500}
              fontSize="md"
              lineHeight="24px"
            >
              CEP
            </Text>
            <Text fontSize="2xl" lineHeight="36px">
              {user?.userAddress?.cep}
            </Text>
          </Flex>

          <Box
            position={["initial", "absolute"]}
            mt={["20px", "0"]}
            w={["100%", "auto"]}
            bottom="26px"
            alignSelf="flex-end"
          >
            <Button
              colorScheme="purple"
              backgroundColor="purple.400"
              _hover={{ filter: "brightness(0.9)" }}
              size="lg"
              minW="226px"
              w="100%"
              fontWeight={500}
              fontSize="16px"
              onClick={handleGoToHome}
            >
              Novo usuário
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
