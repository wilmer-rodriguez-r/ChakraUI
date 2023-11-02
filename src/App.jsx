import { Header } from "./components/Header"
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  return (
    <ChakraProvider>
      <Header></Header>
    </ChakraProvider>
  )
}

export default App
