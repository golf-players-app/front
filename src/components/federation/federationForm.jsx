import { AbsoluteCenter, Box, Divider, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FederationForm({ data, handleChange }) {
  return (
    <>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input type="text" name={"name"} value={data.name} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Primer apellido</FormLabel>
        <Input type="text" name={"surnameOne"} value={data.surnameOne} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Segundo apellido</FormLabel>
        <Input type="text" name={"surnameTwo"} value={data.surnameTwo} onChange={handleChange} />
      </FormControl>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="1" fontSize={"xs"}>
          O introduce tu número de licencia
        </AbsoluteCenter>
      </Box>
      <FormControl>
        <FormLabel>Número de licencia</FormLabel>
        <Input type="text" name={"federatedNumber"} value={data.federatedNumber} onChange={handleChange} />
      </FormControl>
    </>
  );
}
