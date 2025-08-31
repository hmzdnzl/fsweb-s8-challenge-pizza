import react from "react";
import "./Success.css"
import styled from "styled-components";
import Footer from "./Footer"; 

const Body = styled.div`
  background-color: #CE2829;
  height: 1080px;
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
  margin-top: 0px;
  aspect-ratio: 5 / 1;
`;

const LezzetinYolda=styled.h2`
  color: #FDC913;
  font-size: 3rem;
  font-weight: 400;
  margin-top: 50px;
  font-family: "Satisfy", cursive;
  letter-spacing: 0%;

`;
const TebrikYazisi2 = styled.h1`
  color: #FFFFFF;
  font-size: 6rem;
  font-weight: 300;
  font-family: "Roboto Condensed", sans-serif;
`;
const Cizgi = styled.div`
  width: 550px;
  height: 1px;
  border: 1px solid #FAF7F2;
  margin-top: 30px;
`;
const TebrikDiv = styled.div`
  text-align: center;
`;
const PizzaAdi = styled.h1`
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 40px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;
const Boyut = styled.p`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 40px;
  
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;
const Hamur = styled.p`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 20px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;
const EkMalzeme = styled.p`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 25px;
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  width: 250px;
`;
const Isim = styled.p`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 50px;
  margin-left: -147px;
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;
const SiparisTarihi = styled.div`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  margin-left: 92px;
  width: 300px;
`;
const SiparisId = styled.div`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  margin-left: -109px;
`;
const SiparisNotuLabel = styled.label`
color: #FFFFFF;
font-size: 1rem;
font-weight: 300;
margin-left: -111px;
margin-top: 10px;
`;
const SiparisNotu = styled.div`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 5px;
  margin-left: 0px;
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  border: 1px solid white;
  width: 200px;
  height: 50px;
  padding: 5px;
`;
const SiparisToplamAlani = styled.div`
 width: 350px;
 height: 197px;
  font-size: 1rem;
  font-weight: 400;  
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  border: 1px solid white;
  margin-top: 20px;
`;
const SiparisToplamiYazi = styled.p`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 50px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  
`;
const SiparisAdeti=styled.p`
  color: #FFFFFF;
  font-weight: 600;
  width: 200px;
  height: 50px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  margin: 0px 50px;
  font-size: 18px;
  `;
const SecimlerYazisi = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  margin: 20px 50px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;
const SecimlerFiyati = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  margin: 20px 75px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;
const ToplamYazisi = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  margin: 25px 50px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;
const ToplamUcret = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  margin: 25px 45px;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
`;




export default function Success(props) {
  const { fiyat, secim, adet, isim, 
    secilenToplam, boyut, hamur, 
    pizzaAdi, siparisNotu, siparisId, 
    siparisTarihi } = props;
  return (
    <div>

      <Body id="body">

        <Logo id="logo" />
        <LezzetinYolda>lezzetin yolda</LezzetinYolda>
        <TebrikDiv>
         
          <TebrikYazisi2>SİPARİŞ ALINDI</TebrikYazisi2>
        </TebrikDiv>
        <Cizgi id="cizgi" />
        <PizzaAdi>{pizzaAdi}</PizzaAdi>
        <div style={{ display: "flex", 
          flexDirection: "column", 
          alignItems: "flex-start", 
          justifyContent: "left",
          width: "202px",
          height: "153px",          
          padding: "0px",
          marginLeft: "0px",

        }}>
        <Boyut>Boyut: <span style={{ fontWeight: "bold" }}>{boyut}</span></Boyut>
        <Hamur>Hamur: <span style={{ fontWeight: "bold" }}>{hamur}</span></Hamur>
        <EkMalzeme>Ek Malzemeler: <span style={{ fontWeight: "bold" }}>{secim.join(", ")}</span></EkMalzeme>
        </div>

        <Isim>İsim: <span style={{ fontWeight: "bold" }}>{isim}</span></Isim>
        <SiparisTarihi>Sipariş Tarihi: <span style={{ fontWeight: "bold" }}>{siparisTarihi}</span></SiparisTarihi>
        <SiparisId>Sipariş ID: <span style={{ fontWeight: "bold" }}>{siparisId}</span></SiparisId>
        <SiparisNotuLabel htmlFor="siparisNotu">Sipariş Notu:</SiparisNotuLabel>
        <SiparisNotu>{siparisNotu}</SiparisNotu>
        <SiparisToplamAlani>
        <SiparisToplamiYazi>Sipariş Toplamı</SiparisToplamiYazi>
        <SiparisAdeti>Sipariş Adeti: <span style={{ fontWeight: "bold" }}>{adet}</span></SiparisAdeti>
        <div style={{ display: "flex", 
          flexDirection: "row", 
          alignItems: "flex-start", 
          justifyContent: "space-between", 
          width: "252px", 
          height: "30px",           
          marginLeft: "0px",
          marginTop: "-35px"

        }}>
          
          <SecimlerYazisi>Seçimler</SecimlerYazisi>
          <SecimlerFiyati>{secilenToplam.toFixed(2)+"₺"} </SecimlerFiyati>
        </div>
        <div style={{ display: "flex", 
          flexDirection: "row", 
          alignItems: "flex-start", 
          justifyContent: "space-between", 
          width: "252px", 
          height: "30px",           
          marginLeft: "0px",
          marginTop: "0px",
          gap: "42px"

        }}>
          <ToplamYazisi>Toplam</ToplamYazisi>
          <ToplamUcret>{fiyat.toFixed(2)+"₺"}</ToplamUcret>
        </div>
        </SiparisToplamAlani>
      </Body>
      <Footer/>
     
    </div>
  );
}
