import React, { useState } from 'react'
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
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { yourBid } from '../Redux/Bids/Action';
import { GetAllBids } from "../Redux/Bids/Action"





const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

//@ts-ignore
export default function Singlepro({ image, title, desc, time, bids, productId, price }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    //@ts-ignore
    const finalRef = React.useRef(null)
    const navigate = useNavigate();
    const [getBidValue, setBidValue] = useState(100)
    const toast = useToast();

    //@ts-ignore
    const getuserId = JSON.parse(localStorage.getItem("UserInfo"));

    //@ts-ignore
    const RedirecttoSingleProductPage = () => {
        let obj = {
            image, title, desc, time, bids
        }
        localStorage.setItem("SingleProduct", JSON.stringify(obj));
        navigate("/singlepro")
    }


    const HandleSubmit = () => {
        if (getBidValue < price) {
            return toast({
                title: "Bid cannot be less than Price",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
        }

        let value = true;
        for (let i = 0; i < bids.length; i++) {
            if (getBidValue < bids[i].amount) {
                value = false;
            }
        }

        let obj = {
            userId: getuserId?.user._id, name: getuserId?.user.name, amount: getBidValue, productId: productId
        }
        if (!value) {
            return toast({
                title: "Bid cannot be less than Price last Bid",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
        }
        else {
            toast({
                title: "Bid Added",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            // @ts-ignore
            dispatch(yourBid(obj));
            onClose();
            // @ts-ignore
            dispatch(GetAllBids())
        }
    }


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
                            ₹{price}
                        </Text>
                        <Stack display={"flex"} justifyContent={"space-between"} width={"100%"}>
                            <Button onClick={onOpen}>Bid</Button>
                            <Button onClick={RedirecttoSingleProductPage} >View</Button>

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
                        {/* @ts-ignore */}
                        <Input placeholder='Amount' value={getBidValue} type="number" onChange={(e: number) => setBidValue(e.target.value)} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={HandleSubmit}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}