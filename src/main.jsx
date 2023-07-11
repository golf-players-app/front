import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextWrapper } from "./context/auth.context.jsx";
import { theme } from "./utils/extendTheme.js";
import "@fontsource/lora";
import "@fontsource/manrope";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <AuthContextWrapper>
        <Router>
          <App />
        </Router>
      </AuthContextWrapper>
    </ChakraProvider>
  </StrictMode>
);
