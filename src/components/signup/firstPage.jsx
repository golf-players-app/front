import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";

export default function FirstPage() {
  const { nextStep } = useWizard();
  const { register } = usePlayerForm();
  return (
    <>
      <FormControl>
        <FormLabel>Email*</FormLabel>
        <Input type="email" {...register("email")} />
      </FormControl>
      <FormControl>
        <FormLabel>Contraseña*</FormLabel>
        <Input type="password" {...register("password")} />
      </FormControl>

      <Stack>
        <Button onClick={nextStep}>Continuar</Button>
      </Stack>
    </>
  );
}
