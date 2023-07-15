import {
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Box,
  Flex,
  Spacer,
  IconButton,
  Icon,
  Heading,
  Center,
} from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";
import { leftArrow } from "../../utils/icons";

function SecondPage() {
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
            Crea tu cuenta
          </Heading>
        </Flex>
        <FormControl pb={"14px"}>
          <FormLabel>
            <Text textStyle={"psr"}>Nombre*</Text>
          </FormLabel>
          <Input type="text" placeholder="Pedro" focusBorderColor={"main.golfieGreen"} {...register("name")} />
        </FormControl>
        <FormControl pb={"14px"}>
          <FormLabel>
            <Text textStyle={"psr"}>Primer Apellido*</Text>
          </FormLabel>
          <Input type="text" placeholder="Romero" focusBorderColor={"main.golfieGreen"} {...register("surnameOne")} />
        </FormControl>
        <FormControl pb={"14px"}>
          <FormLabel>
            <Text textStyle={"psr"}>Segundo Apellido</Text>
          </FormLabel>
          <Input type="text" placeholder="Soler" focusBorderColor={"main.golfieGreen"} {...register("surnameTwo")} />
        </FormControl>
        <FormControl pb={"14px"}>
          <FormLabel>
            <Text textStyle={"psr"}>Fecha de nacimiento*</Text>
          </FormLabel>
          <Input type="date" focusBorderColor={"main.golfieGreen"} {...register("birthday")} />
        </FormControl>
        <FormControl pb={"14px"}>
          <FormLabel>
            <Text textStyle={"psr"}>Género</Text>
          </FormLabel>
          <RadioGroup>
            <Stack>
              <Flex justifyContent={"space-around"}>
                <Radio value="Female" colorScheme="green" {...register("gender")}>
                  <Text textStyle={"pmr"}>♀️ Femenino</Text>
                </Radio>
                <Radio value="Male" colorScheme="green" {...register("gender")}>
                  <Text textStyle={"pmr"}>♂️ Masculino</Text>
                </Radio>
              </Flex>
            </Stack>
          </RadioGroup>
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

export default SecondPage;
