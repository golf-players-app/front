import { Button, Flex, FormControl, FormLabel, Image, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";
import Amistoso from "../../assets/signup/amistoso.png";

export default function FivePage() {
  const { previousStep } = useWizard();
  const { register } = usePlayerForm();
  return (
    <>
      <FormControl>
        <FormLabel>Tipo de juego</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Image src={Amistoso} />
              <Text>Amistoso</Text>
              <Radio value="Amistoso" {...register("gamePreference")}></Radio>{" "}
            </Flex>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Image src={Amistoso} />
              <Text>Amistoso</Text>
              <Radio value="Competitivo" {...register("gamePreference")}></Radio>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Image src={Amistoso} />
              <Text>Amistoso</Text>
              <Radio value="Ambos" {...register("gamePreference")}></Radio>
            </Flex>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Stack>
        <Button type="submit">Submit</Button>
        <Button onClick={previousStep}>Back</Button>
      </Stack>
    </>
  );
}
