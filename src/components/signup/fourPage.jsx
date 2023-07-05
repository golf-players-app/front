import { Button, FormControl, FormLabel, Stack, Textarea } from "@chakra-ui/react";
import { usePlayerForm } from "../../pages/signup/usePlayerForm";
import { useWizard } from "react-use-wizard";

export default function FourPage() {
  const { nextStep } = useWizard();
  const { previousStep } = useWizard();
  const { register } = usePlayerForm();
  return (
    <>
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <Textarea type="text" {...register("biography")} />
      </FormControl>
      <Stack>
        <Button onClick={nextStep}>Continuar</Button>
        <Button onClick={previousStep}>Back</Button>
      </Stack>
    </>
  );
}
