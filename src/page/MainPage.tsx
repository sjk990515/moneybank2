import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainPage() {
  const userName = window.sessionStorage.getItem("userName");

  const settings = {
    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    // speed: 500,
    dots: true,
  };

  return (
    <Wrap>
      <MainVisualBg>
        <DarkMode></DarkMode>
        <UserNameTitle>안녕하세요 {userName}님</UserNameTitle>
        <Logout>Logout</Logout>

        {/* 원 */}
        <CircleBox>
          <CircleOne />
          <CircleTwo />
          <CircleThree />
        </CircleBox>

        {/* 계좌 & 현금 */}
        <CircleText>
          <Account>
            <AccountSpan>취미지출</AccountSpan> 계좌
          </Account>
          <Property>92803499 ₩</Property>
        </CircleText>
      </MainVisualBg>

      <SliderDiv>
        <SliderStyle {...settings}>
          <SliderBox>1</SliderBox>
          <SliderBox>2</SliderBox>
          <SliderBox>3</SliderBox>
          <SliderBox>4</SliderBox>
        </SliderStyle>
      </SliderDiv>
    </Wrap>
  );
}

export default MainPage;
const Wrap = styled.div`
  width: 100%;
  height: 2000px;
  background-color: #f3f4fa;
`;
const MainVisualBg = styled.div`
  position: relative;
  height: 500px;
  background-color: #fff;
  padding: 50px 70px 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
  box-shadow: 2px 3px 15px 2px #ccc;
`;

const DarkMode = styled.h2`
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 50px;
`;
const UserNameTitle = styled.h2`
  font-size: 20px;
  margin: 10px 0 8px;
  font-weight: 500;
`;
const Logout = styled.p`
  font-size: 14px;
  cursor: pointer;
`;
const CircleBox = styled.div`
  position: absolute;
  top: -125px;
  right: -250px;
  width: 750px;
  height: 750px;
  background-color: #f7f8fb;
  border-radius: 400px;
  transition: 0.5s ease;
  box-shadow: inset 0px 0px 20px #ccc;

  &:hover {
    transform: rotate(-140deg);
  }
`;
const CircleOne = styled.div`
  position: absolute;
  top: 180px;
  right: 450px;
  width: 200px;
  height: 200px;
  background-color: #ddd;
  border-radius: 100px;
  box-shadow: inset 0px 0px 15px #ccc;
`;
const CircleTwo = styled.div`
  position: absolute;
  top: 400px;
  right: 150px;
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 200px;
  box-shadow: inset 0px 0px 15px #ccc;
`;
const CircleThree = styled.div`
  position: absolute;
  top: 180px;
  right: 150px;
  width: 100px;
  height: 100px;
  background-color: #ededed;
  border-radius: 100px;
  box-shadow: inset 0px 0px 15px #ccc;
`;
const CircleText = styled.div`
  position: absolute;
  top: 50%;
  right: 70px;
  transform: translateY(-50%);
  text-align: right;
`;
const Account = styled.p`
  font-size: 20px;
  font-weight: 300;
`;
const AccountSpan = styled.span`
  font-weight: 500;
`;
const Property = styled.p`
  font-weight: 600;
  font-size: 48px;
`;
const SliderDiv = styled.div`
  margin-top: -100px;
`;
const SliderStyle = styled(Slider)`
  .slick-list {
    padding: 10px 0 15px 70px;
  }
  .slick-slide {
    /* padding-right: 10px; */
    margin-right: 40px;
    overflow: visible;
  }
`;
const SliderBox = styled.div`
  width: 400px;
  height: 200px;
  background-color: #ccc;
  color: #fff;
  font-size: 40px;
  text-align: center;
  box-shadow: 2px 3px 10px 0px #727272;
`;
