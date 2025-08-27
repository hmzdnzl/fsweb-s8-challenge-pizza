import react from "react";
import "./Success.css"
import styled from "styled-components";

const Body = styled.div`
  background-color: #CE2829;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;   
  justify-content: center; 
  align-items: center;     
`;


const Logo = styled.div`
  background-image: url('/images/images-1/logo.svg');
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center;
  width: 400px;
  height: 60px;
  margin-top: -400px;
  aspect-ratio: 5 / 1;
`
const TebrikDiv = styled.div`
  text-align: center;
`
const TebrikYazisi = styled.h1`
  color: #FFFFFF;
  font-size: 6rem;
  font-weight: 300;
  margin-top: 200px;
  font-family: "Roboto Condensed", sans-serif;
    @media (max-width: 540px) {
    font-size: 4.5rem; 
    letter-spacing: 1.5px;
  }
`;

const TebrikYazisi2 = styled.h1`
  color: #FFFFFF;
  font-size: 6rem;
  font-weight: 300;

  font-family: "Roboto Condensed", sans-serif;
    @media (max-width: 540px) {
    font-size: 4.5rem; 
    letter-spacing: 1.5px;
  }

`;
export default function Success() {
  return (
    <div>

      <Body id="body">

        <Logo />
        <TebrikDiv>
          <TebrikYazisi className="tebrik-yazisi">TEBRİKLER!</TebrikYazisi>
          <TebrikYazisi2>SİPARİŞİNİZ ALINDI!</TebrikYazisi2>
        </TebrikDiv>
      </Body>



    </div>
  );
}
