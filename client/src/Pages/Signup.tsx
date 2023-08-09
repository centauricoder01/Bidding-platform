import React, { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import "../CSS/Signup.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useToast } from '@chakra-ui/react'
import { SignUpFunc } from '../Redux/ApiCalling';


const Signup = () => {

    const dispatch = useDispatch();
    const toast = useToast()
    const navigate = useNavigate();
    interface FormValues {
        name: string
        email: string;
        password: string;
    }

    const [loading, setLoading] = useState(false)

    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
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
        SignUpFunc(formValues).then((res) => {
            if (res.message === "Signup Successfull") {
                toast({
                    title: 'Signup Successfull',
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
                navigate("/login")
            }
            else if (res.message === "User Already Exist please enter new Email...") {
                toast({
                    title: 'Email Already Registered',
                    status: "info",
                    duration: 5000,
                    isClosable: true,
                })
            }
            else {
                toast({
                    title: 'Server Error',
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
        })
    };


    return (
        <div className='main-signup-div'>
            <form>
                <Text fontSize='4xl' textAlign={"center"} fontWeight={"bold"}>Signup</Text>
                <Text fontSize='2xl' textAlign={"center"} mb={30} >Take Part in Exciting Bidding</Text>
                <Input placeholder='Name' mb={6} type='text' name='name' onChange={handleChange} value={formValues.name} />
                <Input placeholder='Email' mb={6} type='email' name='email' onChange={handleChange} value={formValues.email} />
                <Input placeholder='Password' mb={6} type='password' name='password' onChange={handleChange} value={formValues.password} />
                <Button width={"100%"} onClick={handleSubmit}>Submit</Button>

                <p>Already have <Link to={"/login"}><strong>Account</strong></Link></p>
            </form>
        </div>
    )
}

export default Signup