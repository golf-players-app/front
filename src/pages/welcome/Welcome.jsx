import { Box, Button, Center, Flex, Heading, Image, Spacer, Text, useTheme } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";
import welcomeImage from "../../assets/welcome/welcome.jpg";
import { Link } from "react-router-dom";

export default function Welcome() {
  const theme = useTheme();
  return (
    <Box
      height={"100vh"}
      width={"full"}
      background={`linear-gradient(0deg, ${theme.colors.main.golfieGreenOpacity}, ${theme.colors.main.golfieGreenOpacity}),url(${welcomeImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      pt={"24px"}
      pb={"24px"}
    >
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Box>
          <Center>
            <Image src={Logo} alt="Logo" pt={"24px"} />
          </Center>

          <Heading fontSize={"36px"} fontWeight={500} color={"main.whiteBall"} pt={"40px"}>
            Te damos la bienvenida a la app donde el golf comienza.
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Link to={"/signup"}>
            <Button w={"full"} mt={"16px"} backgroundColor={"main.whiteBall"}>
              <Text textStyle={"pmb"} color={"main.golfieGreen"}>
                Registrarse
              </Text>
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button w={"full"} mt={"16px"} backgroundColor={"main.whiteBall"}>
              <Text textStyle={"pmb"} color={"main.golfieGreen"}>
                Iniciar sesión
              </Text>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
