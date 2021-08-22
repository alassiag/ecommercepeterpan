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
      borderRadius="md"
      padding={4}  
      spacing={3}
      boxShadow="0 3px 6px 0 rgba(0,0,0,0.34), 0 2px 10px 0 rgba(0,0,0,0.52)" >   

    <Stack justifyContent="center" alignItems="center" spacing={1} >   
    
    <Image  
            alt={product.title}
            cursor="pointer"        
            borderTopRadius={9}  
            minHeight={{base:"145", sm:"225"}}
            maxWidth={225}
            maxHeight={{base:"145", sm:"225"}}
            objectFit="cover"
            effect="opacity"
            src={product.image}/> 
    
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


