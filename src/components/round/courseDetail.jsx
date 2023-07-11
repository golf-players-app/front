import { useState, useEffect } from "react";
import courseService from "../../services/course.service";
import { Box, Heading, Text, Center, Spinner, Image } from "@chakra-ui/react";
import { formatDate, formatTime } from "../../utils/functions.js";
import golfCourseImage from "../../assets/courses/campo-golf.jpg";

export default function CourseDetail({ course, start }) {
  const [courseDetails, setCourseDetails] = useState();

  useEffect(() => {
    const getCourse = async () => {
      const resCourse = await courseService.getCourse(course);
      setCourseDetails(resCourse.data);
    };
    getCourse();
  }, []);

  return (
    <>
      {!courseDetails ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box>
          <Heading>{courseDetails.name}</Heading>
          <Text>{formatDate(start)}</Text>
          <Text>{formatTime(start)}</Text>
          <Text>📫 {courseDetails.address}</Text>
          <Text>⛳ {courseDetails.holes}</Text>
          <Image src={golfCourseImage} />
        </Box>
      )}
    </>
  );
}
