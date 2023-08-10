import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    Center,
    useColorMode
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"



export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    //@ts-ignore
    const value = useSelector(state => state.authReducer)

    const [localstrval, setlocalstrval] = useState(false);
    const [username, setusername] = useState("")

    useEffect(() => { 
        let localstorageValue = localStorage.getItem("UserInfo");
        localstorageValue !== null ? setlocalstrval(true) : setlocalstrval(false)
        //@ts-ignore
        let parsedVal = JSON.parse(localstorageValue);
        parsedVal?.user?.name !== null ? setusername(parsedVal?.user?.name) : setusername("");

    }, [value])

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
                            </Button>

                            {
                                localstrval ? <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={'center'}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={'2xl'}
                                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            <p>{username || "Raj"}</p>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <Link to={"/dashboard"}><MenuItem>Dashboard</MenuItem></Link>
                                        <Link to={"/bidsandprod"}>
                                            <MenuItem>Your Bids & Product</MenuItem>
                                        </Link>
                                        <Link to={"/addprod"}>
                                            <MenuItem>Add Product</MenuItem>
                                        </Link>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </Menu> : <Link to={"/signup"}>
                                    <Button>Signup</Button>
                                </Link>
                            }

                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
