import React from 'react';
import {GetStaticProps } from "next";
import {Button, Flex, Image, Grid, Link, Stack, Text} from "@chakra-ui/react";

import {Product} from "../product/types";
import api from '../product/api';

interface Props {
  products: Product[];
}

function parseCurrency(value: number): string  {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}
const IndexRoute: React.FC<Props> = ({products}) => {
  const [cart,setCart] = React.useState<Product[]>([]);
  const text = React.useMemo(
    () => cart

  .reduce(
    (message, product) => 
      message.concat(`  ${product.title} : ${parseCurrency(product.price)}\n`), '',
    )
  .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`),
    [cart],
  );
  
  return (
  <Stack spacing={6}> 
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
    {products.map(product => ( 
      <Stack 
          key={product.id}
          backgroundColor="white"
          borderRadius="md"
          padding={4}  
          spacing={3}
          boxShadow="lg" 
          >
       <Stack spacing={1} >     
          <Text> {product.title} </Text>
          <Image src={product.image}></Image>
          <Text> Presentacion : {product.description}</Text>
          <Text fontSize="sm" 
              fontWeight="500"
              color="primary.600" > 
              Precio : {parseCurrency(product.price)}
          </Text>
        </Stack>
        <Button 
            colorScheme="primary" 
            //variant="outline"
            size="sm"
            //width="75%"
        onClick={() => setCart(cart => cart.concat(product))}
         >
         Agregar al carrito
        </Button>
      </Stack>
    ))}
    </Grid>
    {Boolean(cart.length) && (
      <Flex alignItem="center"  bottom={4} justifyContent="center" position="sticky"  >
        <Button
        isExternal 
        as={Link}
        colorScheme="whatsapp"
        href={`https://wa.me/5493468515731?text=${encodeURIComponent(text)}`} // 3468560193
        width="fit-content"
        >
         Completar pedido ({cart.length} productos)
        </Button>  
      </Flex>
    )}
  </Stack>
  );
};
             //getserviceProps  
export const getStaticProps: GetStaticProps = async () => {

  const products = await api.list();

  return {
    revalidate: 10,  // (tiempo de refresco de la publicacion) para evitar costos de server
    props: {
      products,
    }, 
  };
};
export default IndexRoute;