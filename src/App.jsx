import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Onboarding from "./pages/onboarding/onboarding";
import Login from "./pages/login/Login";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
