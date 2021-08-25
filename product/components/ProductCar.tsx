import React from 'react';
import {Button, Image, HStack, Stack, Text } from "@chakra-ui/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
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
            overflow="hidden"
            cursor="pointer"        
            borderTopLeftRadius={24}  
            borderBottomRightRadius={85}
            minHeight={{base:"195", sm:"225"}}
            minWidth={235}
            maxWidth={245}
            maxHeight={{base:"175", sm:"225"}}
            border="1px solid #cecece"
            shadow="1px 0 10px rgba(23,25,25,0.7)"
            objectFit="cover"
            effect="opacity">
          <Image  
            alt={product.title}
            
            _hover={{
              transition: ' 0.5s',
              transform: 'scale(1.3) rotate(6deg)',
            }}
            src={product.image}/> 
        </Stack>
    <Text> {product.title} </Text>

    <Text> Presentacion : {product.description}</Text>

    <Text fontSize="sm" 
          fontWeight="500"
          color="primary.600" >   
          Precio : {parseCurrency(product.price)}
    </Text>

  </Stack>
  <HStack paddingX={13} justifyContent="center" alignItems="center">
  <Button 
    
      colorScheme="primary" 
      size="md"
      onClick={() => onAdd(product)}
      leftIcon={<Image src="https://icongr.am/material/cart-arrow-down.svg?size=26&color=ffffff" />}
      width={{base:"95%", sm:"75%"}}
      >
      Agregar 
   </Button>
   </HStack>
  </Stack>
 );
}

export default ProductCard;


