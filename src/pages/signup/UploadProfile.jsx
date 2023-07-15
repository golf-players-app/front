import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import noProfile from "../../assets/signup/noProfilePicture.png";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import playerService from "../../services/players.service";
import uploadService from "../../services/upload.service";

export default function UploadProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loadingImage, setLoadingImage] = useState(false);
  const [url, setUrl] = useState(noProfile);
  const uploadImage = async (e) => {
    e.preventDefault();
    try {
      setLoadingImage(true);
      const uploadData = new FormData();
      uploadData.append("imageURL", e.target.files[0]);
      const res = await uploadService.uploadImage(uploadData);
      setUrl(res.data.cloudinary_url);
      setLoadingImage(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      console.log(url);
      await playerService.update(id, { profilePic: url });
      navigate(`/select-club/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box height={"100vh"} width={"full"} pt={"24px"} pb={"24px"}>
      <Flex width={"full"} height={"full"} flexDirection={"column"} pl={"5%"} pr={"5%"}>
        <Heading fontSize={"28px"} fontWeight={500} color={"main.golfieGreen"}>
          Foto de perfil
        </Heading>

        <FormControl>
          <FormLabel>
            <Text textStyle={"psr"}>Elige una foto de perfil para que el resto de usuarios sepan quién eres.</Text>
          </FormLabel>
          <Input type="file" onChange={uploadImage} mt={"20px"} />
        </FormControl>
        <Center mt={"50px"}>
          <Image borderRadius="full" boxSize="150px" src={url} backgroundColor={"gray"} />
        </Center>
        <Spacer />
        <Stack>
          <Button onClick={handleSubmit} w={"full"} mt={"16px"} backgroundColor={"main.golfieGreen"}>
            <Text textStyle={"pmb"} color={"main.whiteBall"}>
              Continuar
            </Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
