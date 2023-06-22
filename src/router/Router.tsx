import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import Login from "../page/Login";
import styled from "styled-components";
import Signup from "../page/Signup";
import MainPage from "../page/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MobileDiv>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mainPage" element={<MainPage />} />
        </Routes>
      </MobileDiv>
    </BrowserRouter>
  );
}

export default Router;

const MobileDiv = styled.div`
  max-width: 830px;
  margin: auto;
  box-shadow: 0px 3px 20px 2px #ccc;
  overflow: hidden;
`;
