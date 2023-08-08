import React, { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import "../CSS/Signup.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useToast } from '@chakra-ui/react'
import { LoginFunc } from '../Store/ApiCalling';
import { add } from "../Store/AuthSlice"


const Login = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const toast = useToast()
    const navigate = useNavigate();
    interface FormValues {
        email: string;
        password: string;
    }

    const [formValues, setFormValues] = useState<FormValues>({
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        LoginFunc(formValues).then((res) => {
            dispatch(add(res))
        })
    };


    return (
        <div className='main-signup-div'>
            <form>
                <Text fontSize='4xl' textAlign={"center"} fontWeight={"bold"}>Login</Text>
                <Text fontSize='2xl' textAlign={"center"} mb={30} >Come on, Let bid Together</Text>
                <Input placeholder='Email' mb={6} type='email' name='email' onChange={handleChange} value={formValues.email} />
                <Input placeholder='Password' mb={6} type='password' name='password' onChange={handleChange} value={formValues.password} />
                <Button width={"100%"} onClick={handleSubmit}>Submit</Button>

                <p>Don't have <Link to={"/signup"}><strong>Account</strong></Link></p>
            </form>
        </div>
    )
}

export default Login