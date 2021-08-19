
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
               //<Image borderRadius={9999} width={128} src="peter-pan.png" /> 
                //  {INFORMATION.avatar} 
                // <Image marginLeft="-25px" width={358} src="letter-logo.png" />
                //  
                //
        > 
          <Text borderRadius={9999} width={128}>{INFORMATION.avatar}</Text> 
  
          <Heading>{INFORMATION.title}</Heading>
          
          <Text fontWeight="400" fontSize="1.2rem">{INFORMATION.description}</Text>
         </VStack> 
         <Divider marginY={6} />
      <Component {...pageProps} />
      </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
