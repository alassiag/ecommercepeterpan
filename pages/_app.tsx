
import React from "react";
import {INFORMATION} from "../app/constants";
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
      maxWidth="container.xl" 
      padding={4}
      >
        <VStack marginBottom={6} 
               // backgroundColor="blue.200"
                //  {INFORMATION.avatar} 
                // 
                //  {INFORMATION.title}
                //
        > 
          <Image borderRadius={9999} width={128} src="peter-pan.png" /> 
  
          <Heading><Image marginLeft="-35px" width={348} src="letter-logo.png" /></Heading>
          
          <Text fontWeight="400" fontSize="1.2rem"  >{INFORMATION.description}</Text>
         </VStack> 
         <Divider marginY={6} />
      <Component {...pageProps} />
      </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
