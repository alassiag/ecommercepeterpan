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
      borderRadius="lg"
      padding={4}  
      spacing={3}
      boxShadow="0 3px 6px 0 rgba(0,0,0,0.34), 0 2px 10px 0 rgba(0,0,0,0.52)" >   

    <Stack justifyContent="center" alignItems="center" spacing={1} >   
    
    <LazyLoadImage  
            alt={product.title}
            cursor="pointer"        
            borderRadius={9}  
            minHeight={225}
            maxWidth={225}
            maxHeight={225} 
            objectFit="cover"
            effect="black-and-white"
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
      size="lg"
      onClick={() => onAdd(product)}
      leftIcon={<Image src="https://icongr.am/material/cart-arrow-down.svg?size=26&color=ffffff" />}
      width="65%"
      >
      Agregar 
   </Button>
   </HStack>
  </Stack>
 );
}

export default ProductCard;


