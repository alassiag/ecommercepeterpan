import React from 'react';
import { Button, Flex, Grid, HStack, Image, Link, List, ListItem, Stack, Text, Divider,
Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import {parseCurrency} from "../../utils/currency";
import ProductCard from '../components/ProductCar';
import { Product } from './../types';

interface Props { products: Product[]; }

interface CartItem extends Product {
  quantity: number;
}

const StoreScreen: React.FC<Props> = ({products}) => {
  const [cart,setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);
  const total = React.useMemo(
    () => parseCurrency(cart.reduce((total, product) => total + (product.price * product.quantity), 0)),
    [cart],
    );
  const text = React.useMemo(
    () => cart

  .reduce(
    (message, product) => 
      message.concat(`${product.title} : ${parseCurrency(product.price * product.quantity)}\n`), '',
    )
  .concat(`\nTotal: ${total}`),
    [cart, total],  
  );                  

  function handleRemoveFromCart(index: number) {
    setCart((cart) => cart.filter((_, _index) => index !== index));
  }  
  function handleEditCart(product: Product, action: 'increment' | 'decrement') {
     setCart((cart) => {
      const isInCart = cart.some((item) => item.id === product.id);

      if (!isInCart) {
        return cart.concat({...product, quantity: 1})
      }

        return cart.reduce((acc, _product) => {
          if (product.id !== _product.id) {
            return acc.concat(_product); 
        }
  
          if (action === 'decrement') {
            if (_product.quantity === 1) {
            return acc;
          }
          
          return acc.concat({..._product, quantity: _product.quantity -1});
           } else if (action === 'increment') {
            return acc.concat({..._product, quantity: _product.quantity +1});
          }
        }, [])
      },
    );   
  } 
  
  return (
   <> 
    <Stack spacing={6}> 
    {products.length ? (
    <Grid gridGap={6} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
      {products.map((product) => ( 
        <ProductCard
          key={product.id} 
          product={product}
          onAdd={(product) => handleEditCart(product, "increment") }/> ))} 
      </Grid>
    ) : (
      <Text color="gray.600" fontsize="lg" margin="auto">
        No hay productos
      </Text>
    )}  
           
        {Boolean(cart.length) && (
        <Flex alignItems="center" bottom={4} justifyContent="center" position="sticky" >
          <Button 
            colorScheme="whatsapp"
            size="lg"
            width={{base: "100%", lg:"fit-content"}} 
            onClick={() => toggleCart(true)}
          >
            
            Ver pedido ({cart.reduce((acc, item) => acc + item.quantity, 0)}) productos
          </Button>  
        </Flex>
        )}
    
      </Stack>
                          
      <Drawer isOpen={isCartOpen}
            placement="right" 
            onClose={() => toggleCart(false)}
            size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="xl" fontWeight="bold">Mi Pedido</DrawerHeader>

          <DrawerBody>
            <List spacing={1} >
              {cart.map((product, index) => (
                <ListItem key={product.id}>
                  <Stack>
                  <HStack justifyContent="space-between" > 
                    <Flex width="88%" justifyContent="space-between" >
                    <Text fontWeight="400">
                      {product.title}{product.quantity > 1 ? ` (x${product.quantity})` : ``}
                    </Text>  
                      <Text color= "green.400">
                        {parseCurrency(product.price * product.quantity)}
                      </Text>
                      </Flex>
                      <Button 
                        justifyContent="center"
                        backgroundColor="transparent"
                        size="xs"
                        maxWidth="28px"                   
                        rightIcon={<Image src="https://icongr.am/fontawesome/trash-o.svg?size=25&color=E53E3E"/>}              
                        onClick={()=> handleRemoveFromCart(index)}
                        _hover={{backgroundColor: 'transparent'}} 
                        _active={{backgroundColor: 'transparent',
                                  borderColor: 'red',
                                  border: "none"}}> 
                      </Button>        
                     </HStack>  
                      <HStack>
                        <Button size="xs" onclick={() => handleEditCart(product, 'decrement')}>{" "} - {" "}</Button>
                          <Text>{product.quantity}</Text>
                        <Button size="xs" onclick={() => handleEditCart(product, 'increment')}>{" "} + {" "}</Button>
                      </HStack>
                      
                    <Divider marginY={2} />
                  </Stack>
                </ListItem>
                ))}
            </List>   
          </DrawerBody>
            <HStack spacing={2}
                    justifyContent="space-around"
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