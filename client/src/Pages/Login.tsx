import React, { useState } from "react";
import { Input, Button, Text } from "@chakra-ui/react";
import "../CSS/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { LoginUser } from "../Redux/Auth/Action";

const Login = () => {
  const dispatch = useDispatch();

  const toast = useToast();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });


  //@ts-ignore
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  //@ts-ignore
  const handleSubmit = (event) => {
    event.preventDefault();

    //@ts-ignore
    dispatch(LoginUser(formValues)).then((res) => {


      if (res.message === "User Login Successful") {
        toast({
          title: "User Login Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else if (res.message === "Wrong Password") {
        toast({
          title: "Wrong Password",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Server Error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <div className="main-signup-div">
      <form>
        <Text fontSize="4xl" textAlign={"center"} fontWeight={"bold"}>
          Login
        </Text>
        <Text fontSize="2xl" textAlign={"center"} mb={30}>
          Come on, Let bid Together
        </Text>
        <Input
          placeholder="Email"
          mb={6}
          type="email"
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
        <Input
          placeholder="Password"
          mb={6}
          type="password"
          name="password"
          onChange={handleChange}
          value={formValues.password}
        />
        <Button width={"100%"} onClick={handleSubmit}>
          Submit
        </Button>

        <p>
          Don't have{" "}
          <Link to={"/signup"}>
            <strong>Account</strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
