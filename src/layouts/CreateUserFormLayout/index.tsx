import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

export function CreateUserFormLayout() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        maxW={1014}
        minH="738px"
        bg="white"
        pt="56px"
        pr="30px"
        pb="26px"
        pl="60px"
        borderRadius={8}
        direction="column"
        gap="12"
        position="relative"
      >
        <Header />

        <Outlet />
      </Flex>
    </Flex>
  );
}
