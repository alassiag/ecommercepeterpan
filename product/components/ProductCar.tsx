import React from 'react';
import {Button, Image, Stack, Text } from "@chakra-ui/react";
import {motion} from "framer-motion";

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
    boxShadow="0 3px 6px 0 rgba(0,0,0,0.34), 0 2px 10px 0 rgba(0,0,0,0.52)" 
    >
        
  <Stack spacing={1} >    
    <Text> {product.title} </Text>
    <Image  alt={product.title}
            as={motion.img}  
            cursor="pointer" 
            layoutId={product.image}         
            borderTopRadius="md"  
            minHeight={245}
            maxHeight={245} 
            objectFit="cover"  
            borderColor="cyan.400" 
            src={product.image}/>
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
      _hover={{
      background:"white",
      color: "primary.500",
       }}
    >
     Agregar al carrito
   </Button>
  </Stack>
 );
}

export default ProductCard;


