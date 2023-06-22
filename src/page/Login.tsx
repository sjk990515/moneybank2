import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moneybank_logo from "../image/moneybank_logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const navigate = useNavigate();

  const [idInput, setIdInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [passIconOn, setPassIconOn] = useState(false);

  const idInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdInput(e.target.value);
  };
  const passInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassInput(e.target.value);
  };

  const signInOnClick = async () => {
    const response = await axios.get(
      `http://localhost:3001/user?userId=${idInput}&userPassword=${passInput}`
    );

    if (idInput == "" || passInput == "") {
      alert("빈칸이 존재합니다.");
    } else if (response.data.length == 0) {
      alert("존재하지 않는 계정입니다.");
    } else {
      window.sessionStorage.setItem("userId", response.data[0].userId);
      window.sessionStorage.setItem("userName", response.data[0].userName);
      alert("로그인 되었습니다.");

      navigate("/mainPage");
    }
  };

  const passIconOnClick = () => {
    setPassIconOn(!passIconOn);
  };

  const signUpOnClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("userId")) {
      alert("이미 로그인 되어있습니다.");
      navigate("/mainPage");
    }
  }, []);

  return (
    <LoginDiv>
      <LoginBox>
        <LogoTitle src={moneybank_logo} alt="moneybank_logo" />
        <LoginForm>
          <LoginText>Login to your Account</LoginText>
          <IdInput placeholder="Id" onChange={idInputOnChange} />
          <PassBox>
            <PassInput
              type={passIconOn ? "text" : "password"}
              placeholder="Password"
              value={passInput}
              onChange={passInputOnChange}
            />
            <PassIcon onClick={passIconOnClick}>
              {passIconOn ? <AiFillEye /> : <AiFillEyeInvisible />}
            </PassIcon>
          </PassBox>
          <SignBox onClick={signInOnClick}>Sign in</SignBox>

          <SignUp>
            Don't have an account? <Sign onClick={signUpOnClick}>Sign up</Sign>
          </SignUp>
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
const PassBox = styled.div`
  position: relative;
  margin-top: 40px;
`;
const PassInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #f5ba41;
  padding-bottom: 5px;
  font-size: 16px;
  text-indent: 5px;
  &::placeholder {
    color: #ccc;
  }
`;
const PassIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
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
