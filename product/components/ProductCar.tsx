import React from 'react';
import {Button, Image, Stack, Text } from "@chakra-ui/react";


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

    <Stack justifyContent="center" spacing={1} >   
    
    <Image  alt={product.title}
            cursor="pointer"        
            borderRadius={9}  
            minHeight={105}
            maxWidth={105}
            maxHeight={105} 
            objectFit="cover"
            border="3px solid"  
            borderColor="gray.500" 
            src={product.image}/> 
    
    <Text> {product.title} </Text>

    <Text> Presentacion : {product.description}</Text>

    <Text fontSize="sm" 
          fontWeight="500"
          color="primary.600" >   
          Precio : {parseCurrency(product.price)}
    </Text>

  </Stack>
  <Button 
      colorScheme="primary" 
      size="sm"
      onClick={() => onAdd(product)}
      rightIcon={<Image src="https://icongr.am/material/cart-arrow-down.svg?size=26&color=ffffff" />}
      >
      Agregar 
   </Button>
  </Stack>
 );
}

export default ProductCard;


