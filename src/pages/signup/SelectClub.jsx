import { useEffect, useState } from "react";
import clubService from "../../services/clubs.service";
import playerService from "../../services/players.service";
import { Box, Button, Checkbox, FormControl, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function SelectClub() {
  const { id } = useParams();
  const [clubs, setClubs] = useState([]);

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
    try {
      const trueClubs = [];
      clubs.forEach((club) => {
        if (club.value === true) {
          trueClubs.push(club._id);
        }
      });
      await playerService.update(id, { clubs: trueClubs });
    } catch (error) {
      console.log(error);
    }
  };

  const renderClubs = () => {
    return clubs.map((club) => (
      <div key={club._id}>
        {club.value ? (
          <Checkbox name={club.name} id={club._id} value={club.value} onChange={handleChange} defaultChecked>
            {club.name}
          </Checkbox>
        ) : (
          <Checkbox name={club.name} id={club._id} value={club.value} onChange={handleChange}>
            {club.name}
          </Checkbox>
        )}
      </div>
    ));
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl>{renderClubs()}</FormControl>
      <Stack>
        <Button type="submit">Submit</Button>
      </Stack>
    </Box>
  );
}
