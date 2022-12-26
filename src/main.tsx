import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { UserFormProvider } from "./context/UserFormContext";

import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserFormProvider>
        <App />
      </UserFormProvider>
    </ChakraProvider>
  </React.StrictMode>
);
