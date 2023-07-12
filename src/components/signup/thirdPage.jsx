import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";
import { leftArrow } from "../../utils/icons";

export default function ThirdPage() {
  const { nextStep } = useWizard();
  const { previousStep } = useWizard();
  const { register } = usePlayerForm();
  return (
    <Box height={"100vh"} width={"full"} pt={"24px"} pb={"24px"}>
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Flex alignItems={"center"} pb={"12px"}>
          <IconButton onClick={previousStep} backgroundColor={"main.whiteBall"}>
            <Icon as={leftArrow} stroke={"main.golfieGreen"} h={"24px"} w={"24px"} />
          </IconButton>
          <Heading fontSize={"28px"} fontWeight={500} color={"main.golfieGreen"}>
            Foto de perfil
          </Heading>
        </Flex>
        <FormControl>
          <FormLabel>
            <Text textStyle={"psr"}>Elige una foto de perfil para que el resto de usuarios sepan quién eres.</Text>
          </FormLabel>
          <Input type="text" {...register("profilePic")} />
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
