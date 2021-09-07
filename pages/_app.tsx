
import React from "react";
import { INFORMATION } from "../app/constants";
import {
  ChakraProvider,
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

import { AppProps } from "next/app";

import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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
            height={{ base: "28vh", sm: "50vh" }}
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
              top={{ base: "40", sm: "250", xl: "300" }}
              left={{ base: "8", sm: "45" }}
              borderRadius={9999}
              width={128}
              //cursor="pointer"
              transition='0.3s'
              transform='rotate(-728deg)'
              border="6px solid #fff"
              src="solido_avatar.jpg"
              //_hover={{
              //  transition: '0.3s',
              //  transform: 'rotate(712deg)',
              //}}
            />

            <Text
              position="absolute"
              color={{ base: "white", sm: "gray.900" }}
              fontSize={{ base: "1.4rem", sm: "2.6rem" }}
              fontWeight={{ base: "550", sm: "700" }}
              left={{ base: "25", sm: "185" }}
              bottom={{ base: "162", sm: "1" }}
            >Ropa & complementos
            </Text>
            <Text
              position="absolute"
              bottom={{ base: "145", sm: "-7" }}
              left={{ base: "35", sm: "185" }}
              fontSize={{ base: "85%", sm: "1.2rem" }}
              fontWeight="600"
              color={{ base: "white", sm: "gray.900" }}
            >Tienda de Ropa y Calzado Urbano
            </Text>
          </VStack>
          <Stack direction="row"
            width="95%" justifyContent="flex-end" spacing={3} >

            {INFORMATION.social.map((social) => (
              <Link key={social.name}
                isExternal href={social.url} >
                <Flex
                  width={9}
                  height={9}
                  borderRadius={9999}
                  backgroundColor="primary.500"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  _hover={{
                    backgroundColor: "primary.600",
                    transition: "0.2s",
                    transform: "scale(1.2)"
                  }}
                >
                  <Image
                    src={`https://icongr.am/fontawesome/${social.name}.svg?size=24&color=ffffff`}
                  />
                </Flex>
              </Link>
            ))}
          </Stack>
          <Divider
            paddingY={{ base: "2", sm: "4" }}
            marginY={{ base: "8", sm: "16" }} />
          <Stack direction="row" 
                paddingY={{ base: "2", sm: "6" }}
                width="100%" 
                justifyContent="center" >
              <label>Buscar producto</label>    
             <input id="productSearch" type="text" placeholder="Buscar" bordercolor="1px solid #111" />

          </Stack>       
          <Component {...pageProps} />
        </Container>
      </Box>

      <Divider />
      <Flex
        position={{ base: "fixed", sm: "relative" }}
        bottom={{ base: "0", sm: "0" }}
        zIndex="111"
        paddingY={{ base: "4", sm: "6" }}
        justifyContent="center"
        alignItems="center"
        backgroundColor="gray.700"
        width="100%"
      >
        <Text fontSize="lg"
          color="white"
          fontWeight="400"
          paddingX={{ base: "6", sm: "0" }}
        >- 2021 © - SolidoStyle - </Text>
      </Flex>

    </ChakraProvider>
  );
}

export default App;
