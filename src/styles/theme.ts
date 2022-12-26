import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F8FAFB",
      "100": "#F0F2F6",
      "400": "#8C98A9",
    },
    purple: {
      "400": "#5357B1",
    },
    success: "#00AE63",
    black: "#000000",
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "black",
      },
    },
  },
});
