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
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";
import Amistoso from "../../assets/signup/amistoso.png";
import { leftArrow, amistoso, competitivo, ambos } from "../../utils/icons";

export default function FivePage() {
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
            ¿Cómo prefieres jugar tus partidas?
          </Heading>
        </Flex>
        <FormControl>
          <FormLabel>Te ayudaremos a que encuentres jugadores con tus mismas preferencias de juego.</FormLabel>
          <RadioGroup mt={"12px"}>
            <Stack>
              <Flex justifyContent={"space-between"}>
                <Box border="1px" borderColor="#B2B2B2" borderRadius="8px" w="110px">
                  <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    pt="8px"
                    pb="8px"
                    pl="16px"
                    pr="16px"
                    m="1px"
                    gap="3"
                  >
                    <Icon as={amistoso} w={"88.79px"} h={"151.23px"} />
                    <Text>Amistoso</Text>
                    <Radio value="Amistoso" colorScheme="green" {...register("gamePreference")}></Radio>
                  </Flex>
                </Box>
                <Box border="1px" borderColor="#B2B2B2" borderRadius="8px" w="110px">
                  <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    pt="8px"
                    pb="8px"
                    pl="16px"
                    pr="16px"
                    m="1px"
                    gap="3"
                  >
                    <Icon as={competitivo} w={"74.49px"} h={"151.23px"} />
                    <Text>Competitivo</Text>
                    <Radio value="Competitivo" colorScheme="green" {...register("gamePreference")}></Radio>
                  </Flex>
                </Box>
                <Box border="1px" borderColor="#B2B2B2" borderRadius="8px" w="110px">
                  <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    pt="8px"
                    pb="8px"
                    pl="16px"
                    pr="16px"
                    m="1px"
                    gap="3"
                  >
                    <Icon as={ambos} w={"65.07px"} h={"151.23px"} />
                    <Text>Ambos</Text>
                    <Radio value="Ambos" colorScheme="green" {...register("gamePreference")}></Radio>
                  </Flex>
                </Box>
              </Flex>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Spacer />
        <Stack>
          <Button type="submit" w={"full"} mt={"16px"} backgroundColor={"main.golfieGreen"}>
            <Text textStyle={"pmb"} color={"main.whiteBall"}>
              Submit
            </Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
