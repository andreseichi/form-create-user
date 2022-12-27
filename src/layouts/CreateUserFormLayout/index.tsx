import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

export function CreateUserFormLayout() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        maxW={1014}
        minH={["0", "738px"]}
        bg="white"
        pt={["10px", "56px"]}
        pr={["8px", "30px"]}
        pb="26px"
        pl={["10px", "60px"]}
        borderRadius={8}
        direction="column"
        gap={["6", "12"]}
        position="relative"
        border="2px solid"
        borderColor="gray.100"
        boxShadow="0px 4px 31px #EEF1F5;"
      >
        <Header />

        <Outlet />
      </Flex>
    </Flex>
  );
}
