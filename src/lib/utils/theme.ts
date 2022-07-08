import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config: any = {
  initialColorMode: "dark",
}

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("gray.100", "#1b1c1d")(props),
    },
  }),
}

const colors = {
  highlight: {
    standard: "#b53a3a",
    hover: "#bf3434",
    active: "#000000",
  },
  brandGray: {
    accent: "#bdbdbd",
    active: "#212121",
    light: "#131314",
    dark: "#161717",
    darker: "#000000",
    darkest: "#18191c",
    hover: "#1c1c1c",
  },
  brandGreen: "#bd0d39",
  labelGray: "#72767d",
  menuRed: "#f04747",
  brandBorder: "#e04848",
  accountBar: "#121212",
  memberList: "#121112",
  iconColor: "#6e6e6e",
  messageInput: "black",
}

const customTheme = extendTheme({
  colors,
  config,
  styles,
})

export default customTheme

export const scrollbarCss = {
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#2f3136",
    width: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "brandGray.darker",
    borderRadius: "18px",
  },
}
