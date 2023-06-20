import React from "react";
import styled from "styled-components";
import moneybank_logo from "../image/moneybank_logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const signUpOnClick = () => {
    navigate("/signup");
  };

  return (
    <LoginDiv>
      <LoginBox>
        <LogoTitle src={moneybank_logo} alt="moneybank_logo" />
        <LoginForm>
          <LoginText>Login to your Account</LoginText>
          <IdInput placeholder="Id" />
          <PassInput placeholder="Password" />

          {/* <ButtonBox> */}
          <SignBox>Sign in</SignBox>

          <SignUp>
            Don't have an account? <Sign onClick={signUpOnClick}>Sign up</Sign>
          </SignUp>
          {/* </ButtonBox> */}
        </LoginForm>
      </LoginBox>
    </LoginDiv>
  );
}

export default Login;

const LoginDiv = styled.div`
  background-color: #fff;
  width: 830px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const LoginText = styled.h2`
  font-weight: 600;
  margin-top: 20px;
  /* font-size: 18px; */
`;
const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -100px;
`;
const LogoTitle = styled.img`
  width: 250px;
  margin: 0 auto;
`;
const LoginForm = styled.form`
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

const SignUp = styled.div`
  margin-top: 50px;
  text-align: center;
`;
const Sign = styled.span`
  cursor: pointer;
  font-weight: 500;
  color: #f5ba41;
`;
