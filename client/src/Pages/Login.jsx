import React, { useState } from "react";
import { Input, Button, Text } from "@chakra-ui/react";
import "../CSS/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { LoginUser } from "../Redux/Auth/Action";

const Login = () => {
  // const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  // @ts-ignore
  const { isAuthtication, User, loading, error } = useSelector(
    (store) => store.authReducer
  );

  // const toast = useToast()
  // const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //@ts-ignore
    dispatch(LoginUser(formValues));
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
