import { Box } from "@chakra-ui/react";
import Image1 from "../../assets/onboarding/first-image.jpg";

export default function Onboarding() {
  const basicBoxStyles = {
    background: Image1,
  };
  return <Box sx={basicBoxStyles}>Hola</Box>;
}
