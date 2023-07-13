import { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Spacer,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import backgroundImage from "../../assets/login/background-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import playerService from "../../services/players.service";
import { AuthContext } from "../../context/auth.context";
import { leftArrow } from "../../utils/icons";

export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const theme = useTheme();
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
      navigate(`/rounds`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      height={"100vh"}
      width={"full"}
      background={`linear-gradient(0deg, ${theme.colors.main.golfieGreenOpacity}, ${theme.colors.main.golfieGreenOpacity}),url(${backgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      pt={"24px"}
      pb={"24px"}
    >
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Box>
          <Flex alignItems={"center"} pb={"12px"}>
            <Link to="/welcome">
              <Icon as={leftArrow} stroke={"main.whiteBall"} h={"24px"} w={"24px"} mr={"8px"} />
            </Link>
            <Text fontFamily={"Lora"} fontSize={"22px"} color={"main.whiteBall"}>
              Log in
            </Text>
          </Flex>

          <Heading fontSize={"36px"} fontWeight={500} color={"main.whiteBall"} pt={"20px"}>
            Encantados de
            <br /> verte de nuevo.
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Box as="form" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel color={"main.whiteBall"}>
                {" "}
                <Text textStyle={"psr"}>Usuario</Text>
              </FormLabel>
              <Input
                backgroundColor={"main.whiteBall"}
                type="email"
                name="email"
                placeholder="Escriba aquí su email"
                value={data.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={"16px"}>
              <FormLabel color={"main.whiteBall"}>
                <Text textStyle={"psr"}>Contraseña</Text>
              </FormLabel>
              <Input
                backgroundColor={"main.whiteBall"}
                type="password"
                name="password"
                placeholder="Escriba aquí su contraseña"
                value={data.password}
                onChange={handleChange}
              />
            </FormControl>

            <Button type="submit" w={"full"} mt={"40px"}>
              <Text textStyle={"pmb"} color={"main.golfieGreen"}>
                Log in
              </Text>
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
