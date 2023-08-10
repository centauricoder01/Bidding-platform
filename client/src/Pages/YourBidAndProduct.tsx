import React, { useEffect } from 'react'
import { yourProduct } from "../Redux/Bids/Action"
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Heading,
  SimpleGrid,
 
} from '@chakra-ui/react'

import { useDispatch } from "react-redux";
import { FcInfo } from "react-icons/fc"


export default function YourBidAndProduct() {
  const dispatch = useDispatch();

  //@ts-ignore
  const getuserId = JSON.parse(localStorage.getItem("UserInfo"));
  //@ts-ignore
  const getuserProduct = JSON.parse(localStorage.getItem("YourItem")) || []
  console.log(getuserProduct)
  useEffect(() => {
    let value = { userId: getuserId?.user._id }
    //@ts-ignore,,   
    dispatch(yourProduct(value)).then((res) => {
      localStorage.setItem("YourItem", JSON.stringify(res.yourBids))
    });

  }, [dispatch])
  return (
    <Container maxW={'7xl'} p={"20"}>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            Your Products
          </Heading>
        </Box>
        <SimpleGrid
          columns={{ base: 3, lg: 3 }}
          spacing={{ base: 8, md: 10 }}
        >
          {
            // @ts-ignore 
            getuserProduct?.map((ele) => (
              <Stack>
                <Image src={ele.image} height={"100%"} />
                <Heading>{ele.title}</Heading>
                <Text>{ele.desc}</Text>
              </Stack>
            ))
          }
         
        </SimpleGrid>
        {
          getuserProduct.length === 0 ? <Box textAlign="center" py={10} px={6}>
            <FcInfo size={100} style={{width:"100%", margin: "auto"}} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              You Don't have any Product
            </Heading>
            
          </Box> : null
        }
      </Stack>


    </Container>
  )
}
