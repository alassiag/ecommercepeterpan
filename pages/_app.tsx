import {INFORMATION} from "../app/constants";
import React from "react";
import { ChakraProvider, 
          Box, 
          Heading, 
          Text, 
          Image, 
          Container,
          VStack,
          Divider
          } from "@chakra-ui/react";

import {AppProps} from "next/app";

import theme from "../theme";

const App: React.FC <AppProps>= ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
      <Container 
      backgroundColor="white"
      borderRadius="sm"
      boxShadow="dark-lg"
      marginY={4}
      maxWidth="container.lg" 
      padding={4}
      >
        <VStack marginBottom={6} 
               // backgroundColor="blue.200"
                //   {INFORMATION.avatar}
                // src="peter-pan.png"
        > 
          <Image borderRadius={9999} width={128} src={INFORMATION.avatar} /> 
            
          <Heading>{INFORMATION.title}</Heading>
          <Text>{INFORMATION.description}</Text>
         </VStack> 
         <Divider marginY={6} />
      <Component {...pageProps} />
      </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
