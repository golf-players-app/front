import { useParams } from "react-router-dom";
import FederationForm from "../../components/federation/federationForm";
import { useEffect, useState } from "react";
import playerService from "../../services/players.service";
import { Box, Button } from "@chakra-ui/react";
import federatedService from "../../services/federated.services";

export default function Federation() {
  const { id } = useParams();
  const [data, setData] = useState({});
  // const [federateData, setFederateData] = useState({});
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await playerService.getOne(id);
      setData(res.data);
    };
    getData();
  }, []);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.federatedNumber) {
        const federated = await federatedService.getById({ federatedNumber: data.federatedNumber });
        console.log(federated.data);
        setShowList(true);
      } else {
        const federated = await federatedService.getByName(data);
        console.log(federated);
        setShowList(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FederationForm data={data} handleChange={handleChange} />
      <Button mt={4} colorScheme="blue" type="submit">
        Enviar
      </Button>
    </Box>
  );
}
