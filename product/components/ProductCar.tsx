import React from 'react';
import {Button, Image, Flex,  HStack, Stack, Text } from "@chakra-ui/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';
//import 'react-lazy-load-image-component/src/effects/opacity.css';
//import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { parseCurrency } from './../../utils/currency';
import {Product} from "../types"



interface Props {
    product: Product;
    onAdd: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({product, onAdd}) => {

  return (
    <Stack 
      key={product.id}
      backgroundColor="white"
      //borderRadius="md"
      padding={4}  
      spacing={3}
      boxShadow="0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.3)" >   

    <Stack justifyContent="center" alignItems="center" spacing={1} 
            position="relative" >  
    <HStack position="absolute" width="fit-content" backgroundColor="teal.400" 
            top="-2" right="-1" >     
          <text fontWeight="bold"
                color="white"> 
              </text>
     </HStack> 
        <Stack 
            position="relative"
            overflow="hidden"
            cursor="pointer"        
            borderTopLeftRadius={24}  
            borderBottomRightRadius={55}
            minHeight={{base:"195", sm:"225"}}
            minWidth={235}
            maxWidth={245}
            maxHeight={{base:"175", sm:"225"}}
            border="1px solid #cecece"
            shadow=" 1px 0 10px rgba(23,25,25,0.7)"
            objectFit="cover"
            backgroundColor="black"
            >
          <Image  
            alt={product.title}
              position="absolute"
              transition='0.3s'
            _hover={{
              
              opacity: '0.2',
              transition: ' 0.3s',
              transform: 'scale(1.3) rotate(5deg)',
            }}
            src={product.image}/>
            <Stack  padding={4}  
                    spacing={3} > 
            <Text fontSize="xl" color="white">
              {product.detail}
            </Text>
            </Stack>
        </Stack>
        <Stack paddingTop="4" >
            <Text> {product.title} </Text>
        </Stack>    
            <Text> Presentacion : {product.description}</Text>

            <Text fontSize="sm" 
                  fontWeight="500"
                  color="blue.600" >   
                  Precio : {parseCurrency(product.price)}
            </Text>

  </Stack>
  <Flex width="100%" 
     //paddingX={6} 
     justifyContent={{base:"flex-start", sm:"center"}} 
     alignItems="center">
  <Button 
      paddingLeft={{base:"6", sm:"0"}} 
      justifyContent="center"
      borderRadius={{base:"50", sm:"0"}}
      colorScheme="blue" 
      size="md"
      fontSize="lg"
      fontWeight="500"
      onClick={() => onAdd(product)}                     // cart-arrow-down
      leftIcon={<Image src="https://icongr.am/material/cart-plus.svg?size=26&color=ffffff" />}
      width={{base:"fit-content", sm:"65%"}}
      >
        <Text display={{base:"none", sm:"flex"}} >
        Agregar
      </Text>
      </Button>
      
   </Flex>
  </Stack>
 );
}

export default ProductCard;


