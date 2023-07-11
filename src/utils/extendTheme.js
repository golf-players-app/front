import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Lora', sans-serif`,
    body: `'Manrope', sans-serif`,
  },
  textStyles: {
    plb: {
      fontSize: "24px",
      fontWeight: "700",
    },
    plr: {
      fontSize: "24px",
      fontWeight: "500",
    },
    pmb: {
      fontSize: "16px",
      fontWeight: "700",
    },
    pmr: {
      fontSize: "16px",
      fontWeight: "500",
    },
    psb: {
      fontSize: "14px",
      fontWeight: "700",
    },
    psr: {
      fontSize: "14px",
      fontWeight: "500",
    },
    pxsb: {
      fontSize: "12px",
      fontWeight: "700",
    },
    pxsr: {
      fontSize: "12px",
      fontWeight: "500",
    },
  },
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
