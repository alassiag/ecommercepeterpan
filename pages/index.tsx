import React from 'react';
import {GetStaticProps } from "next";
import {Button, Flex, Image, Grid, Link, Stack, Text} from "@chakra-ui/react";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

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
  const [selectedImage, setSelectedImage] = React.useState<string>(null);
  const [selectedDetail, setSelectedDetail] = React.useState<string>(null);
  const text = React.useMemo(
    () => cart

  .reduce(
    (message, product) => 
      message.concat(`  ${product.title} : ${parseCurrency(product.price)}\n`), '',
    )
  .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`),
    [cart],
  );
  const cuantity=(cart.length > 1)? 's' : '';
    //console.log(cuantity);
    //React.useEffect(() => {
     // setTimeout(() => setCart([]), 2000);
    //}, [cart]);

  return (
    
  <AnimateSharedLayout type="crossfade">  
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
          <Image  alt={product.title}
                  as={motion.img}  
                  cursor="pointer" 
                  layoutId={product.image}         
                  borderTopRadius="md"  
                  maxHeight={245} 
                  borderColor="cyan.400" 
                  onClick={() => (setSelectedImage(product.image), 
                  setSelectedDetail(product.detail))}
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
        onClick={() => setCart(cart => cart.concat(product))}
        _hover={{
          background:"white",
          color: "primary.500",
        }}
         >
         Agregar al carrito
        </Button>
      </Stack>
    ))} 
    </Grid>
    <AnimatePresence>    
    {Boolean(cart.length) && (
      <Flex 
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0}}
        alignItems="center" 
        as={motion.div}  
        bottom={4} 
        justifyContent="center" 
        position="sticky"  >
        <Button
        isExternal 
        as={Link}
        colorScheme="whatsapp"
        href={`https://wa.me/5493468515731?text=${encodeURIComponent(text)}`} // 3468560193
        width="fit-content" 
        leftIcon={<Image src="https://icongr.am/fontawesome/whatsapp.svg?size=28&color=ffffff"/>}
        size="lg" 
        >
         Completar pedido ( {cart.length} ) producto{cuantity}
        </Button>  
      </Flex>
    )}
    </AnimatePresence>
   </Stack>
   <AnimatePresence>
     
     {selectedImage && (
     <Flex key="backdrop" alignItems="center" as={motion.div}
           backgroundColor="rgba(0,0,0,0.7)"
           justifyContent="center"
           layoutId={selectedImage} 
           position="fixed"
           flexWrap="wrap"
           flexDirection="unset"
           top={0}
           left={0}
           height="100%"
           width="100%"
           onClick={() => setSelectedImage(null)}
           >
       <Image key="image" 
              src={selectedImage} 
              maxWidth="40%"
              borderRadius="1rem 0 0 1rem"/>
       <Flex 
           fontWeight="demi"
           layoutId={selectedDetail}
           paddingX={15}
           color="white"
           width="30%"
           >
       <Text key="text"> {selectedDetail} </Text>
       </Flex>
     </Flex> 
     )}
   </AnimatePresence>   
  </AnimateSharedLayout>
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