import React from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import "../CSS/Signup.css"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <div className='main-signup-div'>
            <form>
                <Text fontSize='4xl' textAlign={"center"} fontWeight={"bold"}>Signup</Text>
                <Text fontSize='2xl' textAlign={"center"} mb={30} >Take Part in Exciting Bidding</Text>
                <Input placeholder='Name' mb={6} type='text' />
                <Input placeholder='Email' mb={6} type='email' />
                <Input placeholder='Password' mb={6} type='password' />
                <Button width={"100%"}>Submit</Button>

                <p>Already have <Link to={"/login"}><strong>Account</strong></Link></p>
            </form>
        </div>
    )
}

export default Signup