import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";
import Amistoso from "../../assets/signup/amistoso.png";
import { leftArrow, amistoso } from "../../utils/icons";

export default function FivePage() {
  const { previousStep } = useWizard();
  const { nextStep } = useWizard();
  const { register } = usePlayerForm();
  return (
    <Box height={"100vh"} width={"full"} pt={"24px"} pb={"24px"}>
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Flex alignItems={"center"} pb={"12px"}>
          <IconButton onClick={previousStep} backgroundColor={"main.whiteBall"}>
            <Icon as={leftArrow} stroke={"main.golfieGreen"} h={"24px"} w={"24px"} />
          </IconButton>
          <Heading fontSize={"28px"} fontWeight={500} color={"main.golfieGreen"}>
            Cuenta un poco acerca de ti
          </Heading>
        </Flex>
        <FormControl>
          <FormLabel>Tipo de juego</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Icon as={amistoso} w={"88.79px"} h={"130.79px"} />
                <Text>Amistoso</Text>
                <Radio value="Amistoso" {...register("gamePreference")}></Radio>{" "}
              </Flex>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Image src={Amistoso} />
                <Text>Competitivo</Text>
                <Radio value="Competitivo" {...register("gamePreference")}></Radio>
              </Flex>
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Image src={Amistoso} />
                <Text>Ambos</Text>
                <Radio value="Ambos" {...register("gamePreference")}></Radio>
              </Flex>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Stack>
          <Button type="submit">Submit</Button>
          <Button onClick={previousStep}>Back</Button>
        </Stack>
      </Flex>
    </Box>
  );
}
