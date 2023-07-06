import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Spacer, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import backgroundImage from "../../assets/login/background-image.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Box
      height={"100vh"}
      width={"full"}
      background={`linear-gradient(0deg, #02735BB2, #02735BB2),url(${backgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      pt={"24px"}
      pb={"24px"}
    >
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Box>
          <Flex alignItems={"flex-end"}>
            <ArrowBackIcon boxSize={5} m={"5px"} color={"#FAFAFA"} />
            <Text color={"#FAFAFA"} fontSize={"md"} m={"5px"}>
              Log in
            </Text>
          </Flex>

          <Heading as={"h1"} size="3xl" color={"#FAFAFA"} pt={"24px"}>
            Encatados de verte de nuevo.
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Box as="form" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel color={"#FAFAFA"}>Usuario</FormLabel>
              <Input backgroundColor={"#FAFAFA"} type="email" />
            </FormControl>
            <FormControl mt={"16px"}>
              <FormLabel color={"#FAFAFA"}>Contraseña</FormLabel>
              <Input backgroundColor={"#FAFAFA"} type="password" />
            </FormControl>

            <Button type="submit" w={"full"} mt={"40px"}>
              Log in
            </Button>
          </Box>

          <Link>
            <Text textAlign={"center"} color={"#FAFAFA"}>
              No recuerdo mi contraseña
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
