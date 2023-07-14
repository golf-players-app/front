import { useEffect, useState } from "react";
import roundService from "../../services/rounds.services";
import { TOKEN_NAME } from "../../context/auth.context";
import CourseDetail from "../../components/round/courseDetail";
import { player } from "../../utils/icons";

import { Box, Center, Spinner, Text, Button, Flex, Icon } from "@chakra-ui/react";

export default function Round() {
  const [rounds, setRounds] = useState();
  const token = localStorage.getItem(TOKEN_NAME);
  useEffect(() => {
    const getRounds = async () => {
      const resRounds = await roundService.getRounds(token);
      setRounds(resRounds.data[0]);
    };
    getRounds();
  }, []);

  const handleClick = async (id) => {
    await roundService.addPlayer(id);
  };

  const renderCourses = () => {
    return rounds.map((round) => (
      <Box mb={"72px"}>
        <div key={round._id}>
          <CourseDetail course={round.course} start={round.start} />

          <Flex justifyContent={"space-around"} alignItems={"center "} gap={8} mt={"12px"}>
            <Text textStyle={"pmb"} color={"main.golfieGreen"} w="116px">
              {round.price} €
            </Text>
            <Flex alignItems={"center"} gap={2} w="116px">
              <Icon as={player} />
              <Text textStyle={"psr"}>{round.players.length}/4</Text>
            </Flex>
            <Button onClick={() => handleClick(round._id)} backgroundColor={"main.golfieGreen"} h={"48px"} w="full">
              <Text textStyle={"pmb"} color={"main.whiteBall"}>
                Jugar
              </Text>
            </Button>
          </Flex>
        </div>
      </Box>
    ));
  };

  return (
    <>
      {!rounds ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box height={"100vh"} width={"full"} pt={"24px"} pb={"24px"}>
          <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
            {renderCourses()}
          </Flex>
        </Box>
      )}
    </>
  );
}
