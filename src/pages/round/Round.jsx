import { useEffect, useState } from "react";
import roundService from "../../services/rounds.services";
import courseService from "../../services/course.service";

export default function Round() {
  const [rounds, setRounds] = useState([
    {
      start: null,
      end: null,
      price: null,
      status: "",
      course: "",
      players: [""],
      courseDetails: {},
    },
  ]);
  useEffect(() => {
    const getRounds = async () => {
      const resRounds = await roundService.getRounds();
      setRounds(resRounds);
      rounds.forEach(async (round) => {
        //Course Details
        const courseDetails = await courseService.getCourse(round.course);
        setRounds(...round, courseDetails);
      });
    };
    getRounds();
  }, []);

  console.log(rounds);

  return <>Hola</>;
}
