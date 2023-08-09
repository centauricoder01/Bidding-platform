import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
} from '@chakra-ui/react'

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

//@ts-ignore
export default function Singlepro({ image, title, desc, time, bids }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    //@ts-ignore
    const finalRef = React.useRef(null)
    return (
        <>
            <Center py={12}>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${IMAGE})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={image}
                            alt="#"
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} fontWeight={800}>
                            {title}
                        </Text>
                        <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={300} textAlign={"center"} overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"} width={"100%"}>
                            {desc}
                        </Heading>
                        <Text fontWeight={800} fontSize={'xl'}>
                            $57
                        </Text>
                        <Stack display={"flex"} justifyContent={"space-between"} width={"100%"}>
                            <Button onClick={onOpen}>Bid</Button>
                            <Button >View</Button>

                        </Stack>
                    </Stack>
                </Box>
            </Center>
            {/* MODAL start from HERE  */}

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter Your Bidding Amount</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input placeholder='Amount' />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}