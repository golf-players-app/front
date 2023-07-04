import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import backgroundImage from "../../assets/login/background-image.jpg";
import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <Box
      height={"100vh"}
      width={"full"}
      background={`linear-gradient(0deg, #02735BB2, #02735BB2),url(${backgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box>
        <Flex alignItems={"flex-end"}>
          <ArrowBackIcon boxSize={5} m={"5px"} color={"#FAFAFA"} />
          <Text color={"#FAFAFA"} fontSize={"md"} m={"5px"}>
            Log in
          </Text>
        </Flex>
      </Box>
      <Heading as={"h1"} size="3xl" color={"#FAFAFA"} pt={"24px"}>
        Encatados de verte de nuevo.
      </Heading>
      {/* <Form>*/}
      <FormControl>
        <FormLabel color={"#FAFAFA"}>Usuario</FormLabel>
        <Input backgroundColor={"#FAFAFA"} type="email" />
      </FormControl>
      <FormControl>
        <FormLabel color={"#FAFAFA"}>Contraseña</FormLabel>
        <Input backgroundColor={"#FAFAFA"} type="password" />
      </FormControl>

      <Button type="submit" w={"full"} mt={"40px"}>
        Log in
      </Button>
      {/* </Form>  */}

      <Link>
        <Text textAlign={"center"} color={"#FAFAFA"}>
          No recuerdo mi contraseña
        </Text>
      </Link>
    </Box>
  );
}
