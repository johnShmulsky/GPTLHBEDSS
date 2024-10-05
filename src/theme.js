import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
  colors: {
    bgColor: "#3c1514",
    textColor: "white",
  },
  styles: {
    global: {
      body: {},
    },
  },
});
const rosebudTheme = extendTheme({
  colors: {
    bgColor: "#4d84c4",
    textColor: "white",
  },
  styles: {
    global: {
      body: {},
    },
  },
});
const oglalaTheme = extendTheme({
  colors: {
    bgColor: "#068684",
    textColor: "white",
  },
  styles: {
    global: {
      body: {},
    },
  },
});

export { defaultTheme, rosebudTheme, oglalaTheme };
