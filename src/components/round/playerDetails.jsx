import { useState, useEffect } from "react";
import playerService from "../../services/players.service.js";
import { Box, Heading, Text, Center, Spinner, Image } from "@chakra-ui/react";

export default function PlayerDetails({ players }) {
  const [playerDetails, setPlayerDetails] = useState();
  useEffect(() => {
    const getPlayers = () => {
      const resPlayers = [];
      players.forEach(async (player) => {
        const resPlayer = await playerService.getOne(player);
        resPlayers.push(resPlayer.data[0]);
      });

      setPlayerDetails(resPlayers);
    };
    getPlayers();
  }, []);

  const renderPlayer = () => {
    for (let i = 0; i < 4; i++) {
      if (playerDetails[i]) {
        return <Text>{playerDetails[i].name}</Text>;
      } else {
        return <Text>Libre</Text>;
      }
    }
  };

  return (
    <>
      {!playerDetails ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box>{renderPlayer()}</Box>
      )}
    </>
  );
}
