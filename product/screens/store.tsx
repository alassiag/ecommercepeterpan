import React from 'react';
import {
  Button, 
  Flex,  
  Grid, 
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Stack, 
  Text,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

import {Product} from "../types";

import {parseCurrency} from "../../utils/currency";
import ProductCard from '../components/ProductCar';

interface Props { products: Product[]; }

const StoreScreen: React.FC<Props> = ({products}) => {
  const [cart,setCart] = React.useState<Product[]>([]);
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);
  const total = React.useMemo(
    () => parseCurrency(cart.reduce((total, product) => total + product.price, 0)),
    [cart],
    );
  const text = React.useMemo(
    () => cart

  .reduce(
    (message, product) => 
      message.concat(`${product.title} : ${parseCurrency(product.price)}\n`), '',
    )
  .concat(`\nTotal: ${total}`),
    [cart, total],
  );
  function handleRemoveFromCart(index: number) {

    setCart(cart => cart.filter((_, _index) => _index !== index));
  } 
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
      <Text color="gray.600" fontsize="lg" margin="auto">
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
            Ver pedido ({cart.length} producto{cuantity})
          </Button>  
        </Flex>
        )}
    
      </Stack>
                          
    <Drawer isOpen={isCartOpen} placement="right" onClose={() => toggleCart(false)}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Su Pedido</DrawerHeader>

          <DrawerBody>
            <List spacing={1} >
              {cart.map((product, index) => (
                <ListItem key={product.id}>
                  <HStack justifyContent="space-between" >
                    <Text fontWeight="400">{product.title}</Text>  
                    <HStack spacing={2}>
                      <Text color= "green.400">{parseCurrency(product.price)}</Text>
                      <Button 
                        justifyContent="center"
                        backgroundColor="transparent"
                        size="xs"
                        maxWidth="28px"
                        width="fit-content" 
                        rightIcon={<Image src="https://icongr.am/fontawesome/trash-o.svg?size=25&color=319795"/>}              
                        onClick={()=> handleRemoveFromCart(index)}
                        _hover={{backgroundColor: 'transparent'}} 
                        _active={{backgroundColor: 'transparent',
                                  borderColor: 'red',
                                  border: "none"}}> 
                      </Button>
                    </HStack>
                  </HStack>  
                  <Divider marginY={2} />
                </ListItem>
                ))}
            </List>   
          </DrawerBody>
            <HStack justifyContent="space-around"
                    fontWeight="500" >    
            <Text>Total:</Text>
            <Text color="green.400">{total}</Text>
            </HStack>
          <DrawerFooter> 
            <Button
             isExternal
             as={Link}
             colorScheme="whatsapp"
             leftIcon={<Image src="https://icongr.am/fontawesome/whatsapp.svg?size=28&color=ffffff"/>}              
                        
             href={`https://wa.me/5493468515731?text=${encodeURIComponent(text)}`}
             size="lg"
             width="100%"
             > Enviar mi pedido 
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    );
  };
             
export default StoreScreen;