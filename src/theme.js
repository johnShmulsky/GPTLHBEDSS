import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
  colors: {
    bgColor: "#460000",
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
    bgColor: "#0D74FF",
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
    bgColor: "red",
    textColor: "white",
  },
  styles: {
    global: {
      body: {},
    },
  },
});

export { defaultTheme, rosebudTheme, oglalaTheme };
