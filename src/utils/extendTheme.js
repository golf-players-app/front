import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    main: {
      golfieGreen: "#02735B",
      golfieGreenOpacity: "#02735BB2",
      whiteBall: "#FAFAFA",
      blackGrip: "#262223",
    },
    secondary: {
      softGrey: "#B2B2B2",
      darkGrey: "#727272",
    },
    help: {
      errorRed: "#E53E3E",
    },
  },
});
