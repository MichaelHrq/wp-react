import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App";

const { render } = wp.element;

if (document.getElementById("my-react-app")) {
  render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,

    document.getElementById("my-react-app")
  );
}
