import { useEffect, useState } from "react";
import roundService from "../../services/rounds.services";
import { TOKEN_NAME } from "../../context/auth.context";
import CourseDetail from "../../components/round/courseDetail";

import { Box, Center, Spinner, Text, Button } from "@chakra-ui/react";

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
      <div key={round._id}>
        <CourseDetail course={round.course} start={round.start} />
        <Text>{round.players.length}/4</Text>
        <Text>{round.price} €</Text>
        <Button onClick={() => handleClick(round._id)}>Jugar</Button>
      </div>
    ));
  };

  return (
    <>
      {!rounds ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box>{renderCourses()}</Box>
      )}
    </>
  );
}
