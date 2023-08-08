import React from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import "../CSS/Signup.css"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className='main-signup-div'>
            <form>
                <Text fontSize='4xl' textAlign={"center"} fontWeight={"bold"}>Login</Text>
                <Text fontSize='2xl' textAlign={"center"} mb={30} >Come on, Let bid Together</Text>
                <Input placeholder='Email' mb={6} type='email' />
                <Input placeholder='Password' mb={6} type='password' />
                <Button width={"100%"}>Submit</Button>

                <p>Don't have <Link to={"/signup"}><strong>Account</strong></Link></p>
            </form>
        </div>
    )
}

export default Login