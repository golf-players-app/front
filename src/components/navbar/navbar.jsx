import { Box, Flex, Icon, Text, Link } from "@chakra-ui/react";
import { game, play, people, profileCircle } from "../../utils/icons";

export default function Navbar() {
  return (
    <Box w={"full"} h={"66px"} backgroundColor={"#262223"} borderRadius={"8px"} padding={"12px"}>
      <Flex justifyContent={"space-around"} alignContent={"center"}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Icon as={people} w={"24px"} h={"24px"} mb={"2px"} />
          <Text color={"main.whiteBall"} textStyle={"pxsr"}>
            Amigos
          </Text>
        </Flex>
        <Link href="/my-rounds">
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Icon as={game} w={"24px"} h={"24px"} mb={"2px"} />
            <Text color={"main.whiteBall"} textStyle={"pxsr"}>
              Mis partidas
            </Text>
          </Flex>{" "}
        </Link>
        <Link href="/rounds">
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Icon as={play} w={"24px"} h={"24px"} mb={"2px"} />
            <Text color={"main.whiteBall"} textStyle={"pxsr"}>
              Jugar
            </Text>
          </Flex>
        </Link>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Icon as={profileCircle} w={"24px"} h={"24px"} mb={"2px"} />
          <Text color={"main.whiteBall"} textStyle={"pxsr"}>
            Perfil
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
