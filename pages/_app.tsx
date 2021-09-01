
import React from "react";
import {INFORMATION} from "../app/constants";
import { ChakraProvider, 
          Box, 
          Flex,
          Link,
          Button,
          Heading, 
          HStack,
          Text, 
          Icon,
          Image, 
          Container,
          Stack,
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
          padding={4}>
          <VStack 
            marginBottom={6} 
            height={{base:"28vh", sm:"50vh"}}
            position="relative"
            backgroundImage="banner_solido.jpg"
            backgroundSize="cover"
               

               //<Image borderRadius={9999} width={128} src="peter-pan.png" /> 
                //  {INFORMATION.avatar} 
                // <Image marginLeft="-25px" width={358} src="letter-logo.png" />
                //  {INFORMATION.description}
                // {INFORMATION.title}
            > 
            <Image 
              position="absolute"
              top={{base:"32", sm:"250"}}
              left={{base:"8", sm:"45"}}
              borderRadius={9999} 
              width={128}
              cursor="pointer"
              transition='0.3s'
              transform='rotate(-728deg)'
              border="6px solid #fff"
              src="solido_avatar.jpg" 
               _hover={{
              transition:'0.3s',
              transform:'rotate(712deg)',
            }}
              />
               
            <Text
              position="absolute"
              color={{base:"white", sm:"gray.900"}} 
              fontSize={{base:"1.4rem", sm:"2.6rem"}} 
              fontWeight={{base:"550", sm:"700"}}
              left={{base:"25", sm:"185"}}
              bottom={{base:"162", sm:"1"}}
              >Ropa & complementos
            </Text>
            <Text 
              position="absolute"
              bottom={{base:"145", sm:"-7"}}
              left={{base:"35", sm:"185"}}
              fontSize={{base:"85%", sm:"1.2rem"}} 
              fontWeight="600"
              color={{base:"white", sm:"gray.900"}}
              >Tienda de Ropa y Calzado Urbano
            </Text>   
            <HStack  width="100%" 
                      top={{base:"28vh", sm:"50vh"}}   
                      justifyContent="flex-end"
                      position="absolute"  
                       
               >
                 <Button
                  maxWidth="32px"
                  minWidth="32px"
                  paddingX="6"
                  borderRadius="6"
                  backgroundColor="white"
                  isExternal
                    _hover={{ 
                        backgroundColor: "white",
                        transition: "0.3s",
                        transform: "scale(1.2)"
                      }}  
                  as={Link}
                   href={`https://www.instagram.com/solido.style/`}
                  leftIcon={<Image src="https://icongr.am/material/instagram.svg?size=28&color=000000" />}>
                 </Button>
                 <Button
                   maxWidth="32px"
                  minWidth="32px"
                  paddingX="6"
                  borderRadius="6"
                  backgroundColor="white"
                  isExternal
                   _hover={{ 
                        backgroundColor: "white",
                        transition: "0.3s",
                        transform: "scale(1.2)"}} 
                  as={Link}       
                   href={`https://www.facebook.com/solidoinccdb`}
                  leftIcon={<Image src="https://icongr.am/fontawesome/facebook.svg?size=28&color=000000" />}>
                 </Button>             
                  <Button
                   maxWidth="32px"
                  
                  paddingX="6"
                  borderRadius="6"
                  backgroundColor="white"
                  isExternal
                   _hover={{ 
                        backgroundColor: "white",
                        transition: "0.3s",
                        transform: "scale(1.2)"}} 
                  as={Link}         
                   href={`https://wa.me/?text=absent`}
                  leftIcon={<Image src="https://icongr.am/material/whatsapp.svg?size=28&color=000000" />}>
                 </Button>
                 </HStack>
          </VStack> 
        <Divider 
            paddingY={{base:"2", sm:"4"}}
            marginY={{base:"8", sm:"16"}} />
            
      <Component {...pageProps} />
      </Container>
    </Box>
        <Link 
            position="fixed"
            bottom="3"
            zIndex="2221"
            alignSelf="center"        
            //bgGradient="linear(to-tr, green.600, green.200)"
            width="86px"
            height="86px"
            borderRadius="50%"
            //border="4px solid #ffffff"
            right="2"
            href={`https://wa.me/3468515731?text=absent`}
           >
          <Image src="https://icongr.am/material/whatsapp.svg?size=70&color=11ff11" 
            zIndex="2555"
           /> 
        </Link>
      <Divider />
        <Flex 
          bottom={{base:"0", sm:"0"}}
          zIndex="111"
          paddingY={{base:"2", sm:"4"}}
          justifyContent="center" 
          alignItems="center" 
          backgroundColor="#ffffff" 
        >
          <Text fontSize="lg" 
            color="black"
            fontWeight="400"
            >- 2021  ©  SolidoStyle - Made it for fun & for you - </Text>
          </Flex>
      
  </ChakraProvider>
  );
}

export default App;
