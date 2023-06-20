import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import moneybank_logo from "../image/moneybank_logo.png";
function Signup() {
  const [idText, setIdText] = useState("");
  const postMutation = useMutation(
    (newUser) => axios.post(`http://localhost:3001/user`, newUser),
    {
      onSuccess: () => {},
    }
  );

  const idOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdText(e.target.value);
  };

  const signUpOnClick = () => {
    // e.preventDefault();
    let newUser: any = {
      idText,
    };

    postMutation.mutate(newUser);
  };
  return (
    <SignUpDiv>
      <SignUpBox>
        <LogoTitle src={moneybank_logo} alt="moneybank_logo" />
        <SignUpForm>
          <SignUpText>Create your Account</SignUpText>
          <IdInput placeholder="Id" onChange={idOnChange} />
          <PassInput placeholder="Name" />
          <PassInput placeholder="Password" />
          <PassInput placeholder="Confirm Password" />
          <SignBox>Sign up</SignBox>
        </SignUpForm>
      </SignUpBox>
    </SignUpDiv>
  );
}

export default Signup;

const SignUpDiv = styled.div`
  background-color: #fff;
  width: 830px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const SignUpText = styled.h2`
  font-weight: 600;
  margin-top: 20px;
  /* font-size: 18px; */
`;
const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -100px;
`;
const LogoTitle = styled.img`
  width: 250px;
  margin: 0 auto;
`;
const SignUpForm = styled.form`
  width: 400px;
  margin: 0 auto;
`;
const IdInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #f5ba41;
  margin-top: 30px;
  padding-bottom: 5px;
  font-size: 16px;
  text-indent: 5px;
  &::placeholder {
    color: #ccc;
  }
`;
const PassInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #f5ba41;
  padding-bottom: 5px;
  margin-top: 40px;
  font-size: 16px;
  text-indent: 5px;
  &::placeholder {
    color: #ccc;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SignBox = styled.p`
  margin-top: 40px;
  cursor: pointer;
  width: 400px;
  height: 40px;
  background-color: #f5ba41;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  border-radius: 5px;
`;
