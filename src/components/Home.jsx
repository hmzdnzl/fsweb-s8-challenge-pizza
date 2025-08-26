import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import  "./Home.css"
const TumSayfa=styled.div`
    background-image: url('/images/images-1/home-banner.png');
    background-size: cover;
    background-position: center;
    height: 1080px;
    width: 1920px;
    display: flex;
    text-align: center;
    justify-content: center;  
`;
const LogoButtonText=styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 892px;
      height: 377px;
`;
const Logo=styled.div`
      background-image: url('/images/images-1/logo.svg');
       background-size: cover;
       background-position: center;
       height: 40px;
       width: 330px;
       margin-top: 5px;
`;
const Text=styled.div`
       font-family: "'Roboto Condensed', sans-serif";
       font-size: 70px;
       line-height: 45px;
       letter-spacing: 1.5px;
       color: white;
       margin-top: 35px;
       margin-bottom: 0px;
       width: 693px;
       height: 195px;
       size: 86px;
       line-height: 92px;
       horizontal-align: center;
       vertical-align: middle;
`;
const Button=styled.button`
        margin-top: 50px;
       height: 56px;
       width: 194px;
       background-color: #FDC913;
       color: black;
       font-family: "Barlow";
       font-size: 18px;
       line-height: 56px;
       border: none;
       cursor: pointer;
       border-radius: 50px;
       }
`;
export default function Home() {
  return (
    <TumSayfa>
     <LogoButtonText>
<Logo></Logo>
<Text>KOD ACIKTIRIR PİZZA, DOYURUR</Text>
<Link to="/order">
<Button>ACIKTIM</Button>
</Link>
     </LogoButtonText>
    </TumSayfa>
  );
}

