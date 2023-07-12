import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";
import { Icon } from "@chakra-ui/react";
import { leftArrow } from "../../utils/icons";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const { nextStep } = useWizard();
  const navigate = useNavigate();

  const { register } = usePlayerForm();
  return (
    <Box height={"100vh"} width={"full"} pt={"24px"} pb={"24px"}>
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Flex alignItems={"center"} pb={"12px"}>
          <IconButton onClick={() => navigate("/welcome")} backgroundColor={"main.whiteBall"}>
            <Icon as={leftArrow} stroke={"main.golfieGreen"} h={"24px"} w={"24px"} />
          </IconButton>
          <Heading fontSize={"28px"} fontWeight={500} color={"main.golfieGreen"}>
            Crea tu cuenta
          </Heading>
        </Flex>
        <FormControl pb={"14px"}>
          <FormLabel>
            <Text textStyle={"psr"}>Email*</Text>
          </FormLabel>
          <Input
            type="email"
            placeholder="Escribe tu email"
            focusBorderColor={"main.golfieGreen"}
            {...register("email")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>
            <Text textStyle={"psr"}>Contraseña*</Text>
          </FormLabel>
          <Input
            type="password"
            placeholder="Escribe tu contraseña"
            focusBorderColor={"main.golfieGreen"}
            {...register("password")}
          />
        </FormControl>
        <Spacer />
        <Stack>
          <Button onClick={nextStep} w={"full"} mt={"16px"} backgroundColor={"main.golfieGreen"}>
            <Text textStyle={"pmb"} color={"main.whiteBall"}>
              Continuar
            </Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
