import React, { useEffect } from 'react'
import { yourProduct } from "../Redux/Bids/Action"
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";


export default function YourBidAndProduct() {
  const dispatch = useDispatch();

  //@ts-ignore
  const getuserId = JSON.parse(localStorage.getItem("UserInfo"));
  //@ts-ignore
  const getuserProduct = JSON.parse(localStorage.getItem("YourItem"))
  console.log(getuserProduct)

  useEffect(() => {
    let value = { userId: getuserId.user._id }
    //@ts-ignore,,   
    dispatch(yourProduct(value)).then((res) => {
      localStorage.setItem("YourItem", JSON.stringify(res.yourBids))
    });

  }, [getuserId.user._id, dispatch])
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Your Products
            </Heading>
          </Box>

          {/* <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                porro, quae, quisquam quos reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
          </Stack> */}

          {
            // @ts-ignore 
            getuserProduct.map((ele)=>(
              <Stack>
                
                
              </Stack>
            ))
          }
        </Stack>
      </SimpleGrid>
    </Container>
  )
}