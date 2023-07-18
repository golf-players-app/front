import { Box, Center, Flex, Spacer, Spinner, Text } from "@chakra-ui/react";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import roundService from "../../services/rounds.services";
import CourseDetail from "../../components/round/courseDetail";
import { player } from "../../utils/icons";

export default function MyRounds() {
  const [rounds, setRounds] = useState();

  useEffect(() => {
    const getRounds = async () => {
      const resRounds = await roundService.getPlayerRounds();
      setRounds(resRounds.data[0]);
    };
    getRounds();
    console.log(rounds);
  }, []);

  const renderCourses = () => {
    return rounds.map((round) => (
      <Box mb={"72px"}>
        <div key={round._id}>
          <CourseDetail course={round.course} start={round.start} />
          <Text textStyle={"pmb"} color={"main.golfieGreen"} w="116px" mt={"12px"}>
            {round.price} €
          </Text>
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
            <Box maxH={"100vh"} overflowY="scroll">
              {renderCourses()}
            </Box>
            <Spacer />
            <Navbar />
          </Flex>
        </Box>
      )}
    </>
  );
}
