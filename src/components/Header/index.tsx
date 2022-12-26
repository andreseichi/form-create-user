import { Flex, Icon, Text } from "@chakra-ui/react";
import { Article, House, User } from "phosphor-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();

  const addressPageIconColor =
    pathname === "/address"
      ? "purple.400"
      : pathname === "/about"
      ? "success"
      : "gray.400";

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
            <Icon
              as={User}
              color={pathname === "/" ? "purple.400" : "success"}
              weight="fill"
              boxSize="24px"
            />
          </Flex>

          <Text fontSize="md" fontWeight={500}>
            Identificação do Usuário
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
            <Icon
              as={House}
              color={addressPageIconColor}
              weight="fill"
              boxSize="24px"
            />
          </Flex>

          <Text as="h2" fontSize="md" fontWeight={500}>
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
            <Icon
              as={Article}
              color={pathname === "/about" ? "purple.400" : "gray.400"}
              weight="fill"
              boxSize="24px"
            />
          </Flex>

          <Text as="h2" fontSize="md" fontWeight={500}>
            Sobre você
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
