
--product image--  1st model full size
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
   
   --product description ----  bellow image 
    <Text> Presentacion : {product.description}</Text>  


   --cancel button--  
   <DrawerFooter>
            <Button mr={3} variant="outline"  onClick={() => toggleCart(false)}>
              Cancelar
            </Button>
    </DrawerFooter>
                 <Button
                    _hover={{ 
                        backgroundColor: "white",
                        transition: "0.3s",
                        transform: "scale(1.2)"
                      }}  
                   href={`https://www.instagram.com/solido.style/`}
                  leftIcon={<Image src="https://icongr.am/material/instagram.svg?size=28&color=000000" />}>
                 </Button>
                 <Button
               
                   href={`https://www.facebook.com/solidoinccdb`}
                  leftIcon={<Image src="https://icongr.am/fontawesome/facebook.svg?size=28&color=000000" />}>
                 </Button>             
                  <Button
                
                   href={`https://wa.me/?text=absent`}
                  leftIcon={<Image src="https://icongr.am/material/whatsapp.svg?size=28&color=000000" />}>
                 </Button>
                
   