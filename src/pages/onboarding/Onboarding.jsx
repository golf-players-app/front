import { Box, useBreakpointValue, Stack, Heading, Text, Container, Image, Button, Flex } from "@chakra-ui/react";

import Slider from "react-slick";
import FirstImageOnboarding from "../../assets/onboarding/first-image.jpg";
import SecondImageOnboarding from "../../assets/onboarding/second-image.jpg";
import ThirdImageOnboarding from "../../assets/onboarding/third-image.jpg";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

// Settings for the slider
const settings = {
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Onboarding() {
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "5%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      brand: "Teegolf",
      title: "Reserva tu green fee online.",
      text: "Puedes reservar tu partida en tan solo tres simples pasos.",
      image: FirstImageOnboarding,
    },
    {
      brand: "Teegolf",
      title: "Decide si quieres ir a jugar.",
      text: "Mira el tiempo, el estado del campo y su diseño en un solo lugar, de forma integrada.",
      image: SecondImageOnboarding,
    },
    {
      brand: "Teegolf",
      title: "Descubre con quién  jugarás tu partida.",
      text: "Mira con quién irás a jugar tu próxima partida antes de llegar al campo.",
      image: ThirdImageOnboarding,
    },
  ];

  return (
    <Box position={"relative"} height={"100vh"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        // charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Brand */}
      <Box position="absolute" top={"5%"} left={"40%"} zIndex={2}>
        <Image src={Logo} alt="Logo" />
      </Box>
      {/* Buttons */}
      <Box position="absolute" top={top} left={side} zIndex={2} w={"90%"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} alignContent={"center"}>
          <Box pl="10%">
            <Link>
              <Text color={"#FAFAFA"} as="u" fontSize={"xs"}>
                Omitir
              </Text>
            </Link>
          </Box>
          <Button pr={"20%"} pl={"20%"} backgroundColor={"#FAFAFA"} color={"#02735B"} fontSize={"md"}>
            Continuar
          </Button>
        </Flex>
      </Box>
      {/* Slider */}
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"4xl"}
            position="relative"
            background={`linear-gradient(0deg, #02735BB2, #02735BB2),url(${card.image})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            {/* Customize caption */}
            <Container size="container.ld" height="full" position="relative">
              <Stack spacing={6} w={"90%"} maxW={"lg"} position="absolute" top="10%">
                <Heading fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} color={"#FAFAFA"}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color={"#FAFAFA"}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
