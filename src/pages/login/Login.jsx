import { useContext, useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Spacer, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import backgroundImage from "../../assets/login/background-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import playerService from "../../services/players.service";
import { AuthContext } from "../../context/auth.context";

export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { authenticate, storeToken } = useContext(AuthContext);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const player = await playerService.login(data);
      storeToken(player.data.authToken);
      authenticate();
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };
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
              <Input backgroundColor={"#FAFAFA"} type="email" name="email" value={data.email} onChange={handleChange} />
            </FormControl>
            <FormControl mt={"16px"}>
              <FormLabel color={"#FAFAFA"}>Contraseña</FormLabel>
              <Input
                backgroundColor={"#FAFAFA"}
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
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
