import { createRoot } from "react-dom/client"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import customTheme from "./lib/utils/theme"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <>
    <ColorModeScript />
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </>,
)
