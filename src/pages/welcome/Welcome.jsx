import { Box, Button, Flex, Heading, Image, Spacer } from "@chakra-ui/react";

import Logo from "../../assets/logo.svg";
import welcomeImage from "../../assets/welcome/welcome.jpg";

export default function Welcome() {
  return (
    <Box
      height={"100vh"}
      width={"full"}
      background={`linear-gradient(0deg, #02735BB2, #02735BB2),url(${welcomeImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      pt={"24px"}
      pb={"24px"}
    >
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Box>
          <Box position="absolute" top={"5%"} left={"40%"} zIndex={2}>
            <Image src={Logo} alt="Logo" />
          </Box>

          <Heading as={"h1"} size="3xl" color={"#FAFAFA"} pt={"24px"}>
            Te damos la bienvenida a la app donde el golf comienza.
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button type="submit" w={"full"} mt={"16px"}>
            Continuar con email
          </Button>
          <Button type="submit" w={"full"} mt={"16px"}>
            Continuar con Apple
          </Button>
          <Button type="submit" w={"full"} mt={"16px"}>
            Continuar con Google
          </Button>
          <Button type="submit" w={"full"} mt={"16px"}>
            Continuar con Facebook
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
