import { useState, useEffect } from "react";
import courseService from "../../services/course.service";
import { Box, Heading, Text, Center, Spinner, Image, Icon, Flex, Divider } from "@chakra-ui/react";
import { formatDate, formatTime } from "../../utils/functions.js";
import golfCourseImage from "../../assets/courses/campo-golf.jpg";
import { pointer, calendar, clock, holes } from "../../utils/icons";

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
          <Heading fontSize={"22px"} fontWeight={500} color={"main.golfieGreen"} mb={"4px"}>
            {courseDetails.name}
          </Heading>
          <Flex alignItems={"center"} gap={2} mb={"4px"}>
            <Icon as={pointer} />
            <Text textStyle={"psr"}>{courseDetails.address}</Text>
          </Flex>
          <Flex gap={2} mb={"4px"}>
            <Flex alignItems={"center"} gap={2}>
              <Icon as={calendar} />
              <Text textStyle={"psr"}>{formatDate(start)}</Text>
            </Flex>
            <Divider orientation="vertical" />
            <Flex alignItems={"center"} gap={2}>
              <Icon as={clock} />
              <Text textStyle={"psr"}>{formatTime(start)}</Text>
            </Flex>
            <Divider orientation="vertical" />
            <Flex alignItems={"center"} gap={2}>
              <Icon as={holes} />
              <Text textStyle={"psr"}>{courseDetails.holes}</Text>
            </Flex>
          </Flex>
          <Image borderRadius={"8px"} h={"120px"} w="full" objectFit="cover" src={golfCourseImage} />
        </Box>
      )}
    </>
  );
}
