import React from 'react';
import {
  Button, 
  Flex, 
  Image, 
  Grid, 
  Link, 
  Stack, 
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

import {Product} from "../types";

import {parseCurrency} from "../../utils/currency";
import ProductCard from '../components/ProductCar';

interface Props { products: Product[]; }

//const [selectedImage, setSelectedImage] = React.useState<string>(null);
//const [selectedDetail, setSelectedDetail] = React.useState<string>(null);

const StoreScreen: React.FC<Props> = ({products}) => {
  const [cart,setCart] = React.useState<Product[]>([]);
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);
  const text = React.useMemo(
    () => cart

  .reduce(
    (message, product) => 
      message.concat(`${product.title} : ${parseCurrency(product.price)}\n`), '',
    )
  .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`),
    [cart],
  );

  const cuantity=(cart.length > 1)? 's' : '';


  return (
   <> 
    <Stack spacing={6}> 
    {products.length ? (
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">

      {products.map((product) => ( 
        <ProductCard
          key={product.id} 
          product={product}
          onAdd={(product) => 
          setCart((cart) => cart.concat(product))} />
      ))} 
      </Grid>
    ) : (
      <Text color="gray.500" fontsize="lg" margin="auto">
        No hay productos
      </Text>
    )}  
        {Boolean(cart.length) && (
        <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky" >
          <Button
            onClick={() => toggleCart(true)}
            colorScheme="whatsapp"
            width="fit-content" 
          >
            Ver pedido ( {cart.length} ) producto{cuantity}
          </Button>  
        </Flex>
        )}
    
      </Stack>
    
    <Drawer isOpen={isCartOpen} placement="right" onClose={() => toggleCart(false)}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi Pedido</DrawerHeader>

          <DrawerBody>
            <span>Should be done</span>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} variant="outline"  onClick={() => toggleCart(false)}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    );
  };
             
export default StoreScreen;