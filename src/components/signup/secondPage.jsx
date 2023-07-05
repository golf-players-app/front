import { Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";

function SecondPage() {
  const { nextStep } = useWizard();
  const { previousStep } = useWizard();
  const { register } = usePlayerForm();

  return (
    <>
      <FormControl>
        <FormLabel>Nombre*</FormLabel>
        <Input type="text" {...register("name")} />
      </FormControl>
      <FormControl>
        <FormLabel>Primer Apellido*</FormLabel>
        <Input type="text" {...register("surnameOne")} />
      </FormControl>
      <FormControl>
        <FormLabel>Segundo Apellido</FormLabel>
        <Input type="text" {...register("surnameTwo")} />
      </FormControl>
      <FormControl>
        <FormLabel>Fecha de nacimiento*</FormLabel>
        <Input type="date" {...register("birthday")} />
      </FormControl>
      <FormControl>
        <FormLabel>Género</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="Female" {...register("gender")}>
              ♀️ Femenino
            </Radio>
            <Radio value="Male" {...register("gender")}>
              ♂️ Masculino
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <Stack>
        <Button onClick={nextStep}>Continuar</Button>
        <Button onClick={previousStep}>Back</Button>
      </Stack>
    </>
  );
}

export default SecondPage;
