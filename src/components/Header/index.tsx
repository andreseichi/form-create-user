import { Flex, Icon, Text } from "@chakra-ui/react";
import { Article, House, User } from "phosphor-react";

export function Header() {
  return (
    <Flex direction="column" gap={12}>
      <Text as="h1" fontSize="4xl" fontWeight={500}>
        Criação de usuário
      </Text>

      <Flex align="center" justify="flex-start" gap="8">
        <Flex gap={8} align="center">
          <Flex
            minW={50}
            minH={50}
            backgroundColor="gray.100"
            p="14px"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
          >
            <Icon as={User} color="purple.400" weight="fill" />
          </Flex>

          <Text fontSize="md">Identificação do Usuário</Text>
        </Flex>
        <Flex gap={8} align="center">
          <Flex
            minW={50}
            minH={50}
            backgroundColor="gray.100"
            p="14px"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
          >
            <Icon as={House} color="gray.400" weight="fill" />
          </Flex>

          <Text as="h2" fontSize="md">
            Endereço do usuário
          </Text>
        </Flex>
        <Flex gap={8} align="center">
          <Flex
            minW={50}
            minH={50}
            backgroundColor="gray.100"
            p="14px"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
          >
            <Icon as={Article} color="gray.400" weight="fill" />
          </Flex>

          <Text as="h2" fontSize="md">
            Sobre você
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
