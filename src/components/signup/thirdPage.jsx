import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";

export default function ThirdPage() {
  const { nextStep } = useWizard();
  const { previousStep } = useWizard();
  const { register } = usePlayerForm();
  return (
    <>
      <FormControl>
        <FormLabel>Picture</FormLabel>
        <Input type="text" {...register("profilePic")} />
      </FormControl>
      <Stack>
        <Button onClick={nextStep}>Continuar</Button>
        <Button onClick={previousStep}>Back</Button>
      </Stack>
    </>
  );
}
