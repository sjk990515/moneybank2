import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import moneybank_logo from "../image/moneybank_logo.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Signup() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passIconOn, setPassIconOn] = useState(false);
  const [confirmIconOn, setConfirmIconOn] = useState(false);

  const postMutation = useMutation(
    (newUser) => axios.post(`http://localhost:3001/user`, newUser),
    {
      onSuccess: () => {
        alert("회원가입 완료 되었습니다.");
        navigate("/");
      },
    }
  );

  const idOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const nameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };
  const confirmPasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const signUpOnClick = async () => {
    const response = await axios.get(
      `http://localhost:3001/user?userId=${userId}`
    );

    if (
      userId == "" ||
      userName == "" ||
      userPassword == "" ||
      confirmPassword == ""
    ) {
      alert("빈칸이 존재합니다.");
    } else if (confirmPassword != userPassword) {
      alert("비밀번호가 같지 않습니다");
      setConfirmPassword("");
      setUserPassword("");
      setPassIconOn(false);
      setConfirmIconOn(false);
    } else if (response.data.length == 0) {
      let newUser: any = {
        id: uuidv4(),
        userId,
        userName,
        userPassword,
      };
      postMutation.mutate(newUser);
    } else {
      alert("존재하는 아이디 입니다.");
      setUserId("");
    }
  };

  const passIconOnClick = () => {
    setPassIconOn(!passIconOn);
  };
  const confirmIconOnClick = () => {
    setConfirmIconOn(!confirmIconOn);
  };
  return (
    <SignUpDiv>
      <GoBack
        onClick={() => {
          navigate("/");
        }}
      >
        <IoIosArrowBack />
      </GoBack>

      <SignUpBox>
        <LogoTitle src={moneybank_logo} alt="moneybank_logo" />
        <SignUpForm>
          <SignUpText>Create your Account</SignUpText>
          <IdInput
            placeholder="Id"
            value={userId}
            maxLength={25}
            onChange={idOnChange}
          />
          <NameInput
            placeholder="Name"
            maxLength={16}
            onChange={nameOnChange}
          />
          <PassBox>
            <PassInput
              type={passIconOn ? "text" : "password"}
              placeholder="Password"
              value={userPassword}
              maxLength={20}
              onChange={passwordOnChange}
            />
            <PassIcon onClick={passIconOnClick}>
              {passIconOn ? <AiFillEye /> : <AiFillEyeInvisible />}
            </PassIcon>
          </PassBox>
          <PassBox>
            <PassInput
              type={confirmIconOn ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              maxLength={20}
              onChange={confirmPasswordOnChange}
            />
            <PassIcon onClick={confirmIconOnClick}>
              {confirmIconOn ? <AiFillEye /> : <AiFillEyeInvisible />}
            </PassIcon>
          </PassBox>
          <SignBox onClick={signUpOnClick}>Sign up</SignBox>
        </SignUpForm>
      </SignUpBox>
    </SignUpDiv>
  );
}

export default Signup;

const SignUpDiv = styled.div`
  position: relative;
  background-color: #fff;
  width: 830px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const GoBack = styled.div`
  position: absolute;
  font-size: 32px;
  cursor: pointer;
  top: 50px;
  left: 70px;
`;
const SignUpText = styled.h2`
  font-weight: 600;
  margin-top: 20px;
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

const NameInput = styled.input`
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
