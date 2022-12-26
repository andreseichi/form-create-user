import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserFormProvider } from "./context/UserFormContext";
import { Router } from "./Router";

import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <UserFormProvider>
          <Router />
        </UserFormProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
