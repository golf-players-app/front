import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Onboarding from "./pages/onboarding/onboarding";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
