import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SingleBid() {
  //@ts-ignore
  const getlocalstorage = JSON.parse(localStorage.getItem("SingleProduct")) || [];

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '90%', md: '70%' }}
        // height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Image objectFit={"cover"} src={getlocalstorage?.image} width={"50%"} />
        <Stack>
          <Heading>{getlocalstorage?.title}</Heading>
          <Text>{getlocalstorage?.desc}</Text>
          <Text fontSize={"xl"}>Time : {getlocalstorage?.time}</Text>
          <Heading>Total Bids</Heading>
          <Stack>
            {
              getlocalstorage?.bids?.length !== 0 ?  // @ts-ignore 
                getlocalstorage?.bids?.map((ele) => (
                  <Stack>
                    <Text fontWeight={600} fontSize={"xl"}>{ele.name} ------- ₹ {ele.amount}</Text>
                  </Stack>
                )) : <Heading>No bidding has started</Heading>
            }
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}