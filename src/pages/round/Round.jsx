import { useEffect, useState } from "react";
import roundService from "../../services/rounds.services";
import courseService from "../../services/course.service";
import { TOKEN_NAME } from "../../context/auth.context";
import CourseDetail from "../../components/round/courseDetail";
import { Box, Center, Spinner } from "@chakra-ui/react";

export default function Round() {
  const [rounds, setRounds] = useState();
  useEffect(() => {
    const getRounds = async () => {
      const token = localStorage.getItem(TOKEN_NAME);
      const resRounds = await roundService.getRounds(token);
      setRounds(resRounds.data[0]);
    };
    getRounds();
  }, []);

  console.log(rounds);

  const renderCourses = () => {
    return rounds.map((round) => <div key={round._id}>Hola</div>);
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
