import { Box, useBreakpointValue, Stack, Heading, Text, Container, Image, Button, Center } from "@chakra-ui/react";
import Slider from "react-slick";
import firstImageOnboarding from "../../assets/onboarding/first-image.jpg";
import secondImageOnboarding from "../../assets/onboarding/second-image.jpg";
import thirdImageOnboarding from "../../assets/onboarding/third-image.jpg";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@chakra-ui/react";

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
  const theme = useTheme();
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
      image: firstImageOnboarding,
    },
    {
      brand: "Teegolf",
      title: "Decide si quieres ir a jugar.",
      text: "Mira el tiempo, el estado del campo y su diseño en un solo lugar, de forma integrada.",
      image: secondImageOnboarding,
    },
    {
      brand: "Teegolf",
      title: "Descubre con quién  jugarás tu partida.",
      text: "Mira con quién irás a jugar tu próxima partida antes de llegar al campo.",
      image: thirdImageOnboarding,
    },
  ];
  const navigate = useNavigate();

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
      <Box position="absolute" left={"40%"} pt={"48px"} zIndex={2}>
        <Image src={Logo} alt="Logo" />
      </Box>
      {/* Button */}
      <Center>
        <Box position="absolute" top={top} zIndex={2} w={"90%"}>
          <Center>
            <Button
              w={"full"}
              pr={"20%"}
              pl={"20%"}
              backgroundColor={"main.whiteBall"}
              onClick={() => navigate(`/welcome`)}
            >
              <Text textStyle={"pmb"} color={"main.golfieGreen"}>
                Continuar
              </Text>
            </Button>
          </Center>
        </Box>
      </Center>
      {/* Slider */}
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"4xl"}
            position="relative"
            background={`linear-gradient(0deg, ${theme.colors.main.golfieGreenOpacity}, ${theme.colors.main.golfieGreenOpacity}),url(${card.image})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            {/* Customize caption */}
            <Container size="container.ld" height="full" position="relative">
              <Stack spacing={6} w={"90%"} maxW={"lg"} position="absolute" top="10%">
                <Heading fontSize={"36px"} fontWeight={500} color={"main.whiteBall"}>
                  {card.title}
                </Heading>
                <Text textStyle={"pmr"} color={"main.whiteBall"}>
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
