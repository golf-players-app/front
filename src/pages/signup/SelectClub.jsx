import { useEffect, useState } from "react";
import clubService from "../../services/clubs.service";
import playerService from "../../services/players.service";
import { Box, Button, Checkbox, Flex, FormControl, Heading, Spacer, Stack, Text, Image, Icon } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { emptyClub } from "../../utils/icons";
export default function SelectClub() {
  const { id } = useParams();
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const user = await playerService.getOne(id);
      const res = await clubService.getAll();
      const clubArray = [];
      res.data.forEach((club) => {
        if (user.data.clubs.includes(club._id)) {
          clubArray.push({ name: club.name, _id: club._id, value: true });
        } else {
          clubArray.push({ name: club.name, _id: club._id, value: false });
        }
      });

      setClubs(clubArray);
    };
    getData();
  }, []);

  const handleChange = (e) => {
    const clubId = e.target.id;
    const updatedClubs = clubs.map((club) => {
      if (club._id === clubId) {
        return { ...club, value: !club.value };
      }
      return club;
    });
    setClubs(updatedClubs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const trueClubs = [];
      clubs.forEach((club) => {
        if (club.value === true) {
          trueClubs.push(club._id);
        }
      });
      await playerService.update(id, { clubs: trueClubs });
      navigate(`/welcome`);
    } catch (error) {
      console.log(error);
    }
  };

  const renderClubs = () => {
    return clubs.map((club) => (
      <div key={club._id}>
        {club.value ? (
          <Checkbox
            name={club.name}
            id={club._id}
            value={club.value}
            onChange={handleChange}
            colorScheme="green"
            defaultChecked
          >
            <Flex gap={2} p={"8px"} alignItems={"center"}>
              <Icon as={emptyClub} w={"24px"} h={"24px"} />
              <Text fontFamily={"Lora"} fontSize={"16px"}>
                {club.name}
              </Text>
            </Flex>
          </Checkbox>
        ) : (
          <Checkbox name={club.name} id={club._id} value={club.value} onChange={handleChange}>
            <Flex gap={2} p={"8px"} alignItems={"center"}>
              <Icon as={emptyClub} w={"24px"} h={"24px"} />
              <Text fontFamily={"Lora"} fontSize={"16px"}>
                {club.name}
              </Text>
            </Flex>
          </Checkbox>
        )}
      </div>
    ));
  };

  return (
    <Box as="form" onSubmit={handleSubmit} height={"100vh"} width={"full"} pt={"24px"} pb={"24px"}>
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Heading fontSize={"28px"} fontWeight={500} color={"main.golfieGreen"} pb={"12px"}>
          Elige tu club o clubes
        </Heading>
        <Box maxH={"100vh"} overflowY="scroll">
          <FormControl>{renderClubs()}</FormControl>
        </Box>
        <Spacer />
        <Stack>
          <Button type="submit" w={"full"} mt={"16px"} backgroundColor={"main.golfieGreen"}>
            <Text textStyle={"pmb"} color={"main.whiteBall"}>
              Finalizar
            </Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
