import { useState } from 'react'
import { ChakraProvider, Box, AbsoluteCenter, Center, Text, Flex, Button, HStack } from '@chakra-ui/react'
function App() {
  const containerStyles = {
    background: "url('https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-shape-dark-background-generative-ai_191095-1435.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh",
  };
  return (
    <ChakraProvider>
      <Box style={containerStyles}>
        <Center minHeight="100vh">
          <Box minHeight="100px" minW={"500px"} content=''>
            <Center>
              <Flex direction="column" align="center" justify="center">
                <Text fontSize='6xl'  as='b'>Domina el Terreno</Text>
                <Box position='relative' h='100px'>
                  <AbsoluteCenter p='4' axis='both'>
                    <HStack>
                      <Button textColor="white" size={"lg"} variant='outline'>Ver Detalles</Button>
                      <Button textColor="white" size={"lg"} variant='outline'>Ver Video</Button>
                    </HStack>
                  </AbsoluteCenter>
                </Box>
              </Flex>
            </Center>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  )
}

export default App
