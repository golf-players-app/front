import { useEffect, useState } from "react";
import clubService from "../../services/clubs.service";
import playerService from "../../services/players.service";
import { Box, Button, Checkbox, FormControl, Stack, Text } from "@chakra-ui/react";

export default function SixPage() {
  const { id } = useParams();
  const [clubs, setClubs] = useState([]);
  const [clubList, setClubList] = useState([]);
  const { register } = usePlayerForm();

  useEffect(() => {
    const getData = async () => {
      const user = await playerService.getOne(id);
      const res = await clubService.getAll();
      res.data.forEach((club) => {
        setClubs({ [club]: false });
      });
      console.log(clubs);
    };
    getData();
  }, []);

  const handleChange = (e) => {
    setData({
      ...clubs,
      [e.target.name]: e.target.value,
    });
  };

  const renderClubs = () => {
    return clubList.map((club) => (
      <div key={club._id}>
        <Checkbox name="clubs" value={club._id} onChange={handleChange}>
          {club.name}
        </Checkbox>
      </div>
    ));
  };

  return (
    <>
      <FormControl>{renderClubs()}</FormControl>
      <Stack>
        <Button type="submit">Submit</Button>
      </Stack>
    </>
  );
}
