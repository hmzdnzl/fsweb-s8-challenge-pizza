import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import  "./Home.css"
import Footer from "./Footer";
const TumSayfa=styled.div`
    background-image: url('/images/images-1/home-banner.png');
    background-size: cover;
    background-position: center;
    height: 1080px;
    width: 100%;
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
      margin-top: 50px;
`;
const Logo=styled.div`
      background-image: url('/images/images-1/logo.svg');
       background-size: cover;
       background-position: center;
       height: 40px;
       width: 330px;
       margin-top: 5px;
`;
const Slogan=styled.p`
        color: #FDC913;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 50px;
  font-family: "Satisfy", cursive;
  letter-spacing: 0%;
`;
const Text=styled.p`
       font-family: "'Roboto Condensed', sans-serif";
       font-size: 70px;
       line-height: 45px;
       letter-spacing: 1.5px;
       color: white;
       margin-top: -10px;
       margin-bottom: 0px;
       width: 693px;
       height: 195px;
       size: 86px;
       line-height: 92px;
       horizontal-align: center;
       vertical-align: middle;
`;
const Button=styled.button`
        margin-bottom: -20px;
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
       
`;
const Kategoriler=styled.div`
       display: flex;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap;
       width: 100%;
       height: 94px;
       background-color: white;
        gap: 50px;
`;
const KategoriLogoDiv=styled.div`
      display: flex;
      align-items: center;
      gap: 10px;
`;
const KategoriLogo=styled.div`
       
       height: 42px;
       width: 42px;
       
`;
const KategoriAdi=styled.p`
       font-family: "Barlow", sans-serif;
       font-size: 18px;
       line-height: 32px;
       color: black;
       text-align: center;
`;
const Govde=styled.div`
       width: 100%;
       height: 1301px;
       background-color: #FAF7F2;
       padding-top: 70px;
       
       display: flex;
       flex-direction: column;
       align-items: center;
`;
const CardsWithButton=styled.div`
       display: flex;       
       width: 1072px;
       height: 449px;     
       justify-content: space-between;

      `;
      const Cardb=styled.div`
       display: flex;
        flex-direction: column;
        
      `;
      const CardbImage=styled.div`
    background-image: url('/images/iteration-2-images/cta/kart-1.png');
    background-size: cover;
    background-position: center;
    height: 448.75px;
    width: 531px;
    border-radius: 15px;
    padding: 35px 25px;
      `;
   
      const CardbHeader=styled.h2`
      font-family: "Quattrocento";
      font-size: 68px;
      width: 148px;
      color: white;
      `;
      const CardbText=styled.p`
      font-family: "Barlow", sans-serif;
      font-size: 20px;
      line-height: 27px;
      color: white;
      `;
      const CardsButton=styled.button`
      width:138px;
      height:48px;
      border-radius: 50px;
      color:#CE2829;
      font-family: "Barlow", sans-serif;
      font-weight: 600;
      font-size: 14px;
      border:none;
       cursor: pointer;
      
      `;
      const Cardsmall=styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      `;
      const CardsImage=styled.div`
      background-image: url('/images/iteration-2-images/cta/kart-2.png');
      width: 530px;
      height: 220px;
      background-size: cover;
      background-position: center;
      border-radius: 15px;
      padding: 30px;
      display:flex;
      flex-direction: column;
      gap:30px; 

     
      `;
      const Cards2Image=styled.div`
      background-image: url('/images/iteration-2-images/cta/kart-3.png');
      width: 530px;
      height: 220px;
      background-size: cover;
      background-position: center;
      border-radius: 15px;
        border-radius: 15px;
      padding: 30px;
      display:flex;
      flex-direction: column;
      gap:30px; 
      `;
      const CardsHeader=styled.h2`
      color:white;
      font-family:"Barlow", sans serif;
      width:182px;
      height: 86px;      
      font-size:32px;
      font-weight:600;
      `;
      const Cards2Header=styled.h2`
      color:#292929;
      font-family:"Barlow", sans serif;
      width:254px;
      height: 86px;      
      font-size:32px;
      font-weight:600;
      `;
    
      const Slogan2adet=styled.div`
     display: flex;
     width:1296px;
     height:110px;
    
     margin-top:70px;
     display:flex;
     flex-direction: column;
     align-items: center;
      `;
      const Slogan1=styled.p`      
      color: #CE2829;
      font-family:"Satisfy", cursive;
      font-size: 32px;
      `;
        const Slogan2=styled.p`
      font-family:"Barlow";
      font-size:42px;
      line-height: 56px
      `;
      const GovdeKategoriler=styled.div`
        display: flex;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap;
       width: 100%;
       height: 94px;
       
        gap: 50px;      
      `;
      const GovdeUrunler=styled.div`
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-items: center;
       gap: 20px;       
              width: 1068px;
       height: 430px;
       margin-top:10px;
      `;

    const Urun1=styled.div`
    width: 335px;
    height: 419px;
   
    display: flex;
    align-items: center;
    flex-direction: column;
    `;
 const Urun2=styled.div`
      width: 335px;
    height: 419px;
   
      display: flex;
    align-items: center;
    flex-direction: column;
    `;
    
     const Urun3=styled.div`
      width: 335px;
    height: 419px;
   
      display: flex;
    align-items: center;
    flex-direction: column;
    `;
    
    const UrunAdi=styled.p`
    font-family:"Barlow";
    font-weight: 600;
    `;
    const PuanYorumFiyat=styled.div`
    display: flex;    
    width: 270px;
    
    justify-content: space-between;
    `;
    const UrunPuani=styled.p`
    font-family:"Barlow";
    font-weight: 400;
    font-size: 16px;
    line-height: 28.8px;
    `;
    const UrunYorum=styled.p`
  font-family:"Barlow";
    font-weight: 400;
    font-size: 16px;
    line-height: 28.8px;
   
    `;
    const UrunFiyat=styled.p`
      font-family:"Barlow";
    font-weight: 700;
    font-size: 20px;
    line-height: 28.8px;
    
    `;
export default function Home() {
  return (
    <div style={{overflowX: "hidden"}}>
    <TumSayfa id="tumhomepage">
     <LogoButtonText id="logobuttontext">
<Logo id="logo"></Logo>
<Slogan id="slogan">fırsatı kaçırma</Slogan>
<Text id="slogantext">KOD ACIKTIRIR PİZZA, DOYURUR</Text>
<Link to="/order">
<Button id="aciktim-button">ACIKTIM</Button>
</Link>
     </LogoButtonText>
    </TumSayfa>
    <Kategoriler id="kategoriler">
      <KategoriLogoDiv>
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/1.svg" alt="Yeni Kore" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Yeni! Kore</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv>
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Pizza</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv>
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Burger</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv>
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Kızartmalar</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv>
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/5.svg" alt="Fast Food" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Fast Food</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv>
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/6.svg" alt="Gazlı İçecekler" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Gazlı İçecekler</KategoriAdi>
      </KategoriLogoDiv>
    </Kategoriler>
    <Govde id="govde">
      <CardsWithButton id="cardswithbuttons">
        <Cardb id="cardb">
          <CardbImage id="cardbimg">
            <CardbHeader>Özel Lezzetus</CardbHeader>
          <CardbText>Position:Absolute Acı Burger</CardbText>
          <Link to="/order">
          <CardsButton id="buttonb">SİPARİŞ VER</CardsButton>
          </Link>
          </CardbImage>          
        </Cardb>
        <Cardsmall id="cardsmall">
          <CardsImage id="cards1" >
           <CardsHeader>Hackathlon Burger Menü</CardsHeader>
          <Link to="/order">
          <CardsButton>SİPARİŞ VER</CardsButton>
          </Link>
          </CardsImage>

           <Cards2Image id="cards2" >
           <Cards2Header><span style={{color:"red"}}>Çoooook</span> hızlı npm gibi kurye </Cards2Header>
          <Link to="/order">
          <CardsButton>SİPARİŞ VER</CardsButton>
          </Link>
          </Cards2Image>
        </Cardsmall>
      </CardsWithButton>
      <Slogan2adet id="slogan2adet">
        <Slogan1>
en çok paketlenen menüler
        </Slogan1>
        <Slogan2 id="slogan2">
Acıktıran Kodlara Doyuran Lezzetler
        </Slogan2>
      </Slogan2adet>
       <GovdeKategoriler id="govdekategoriler">
      <KategoriLogoDiv className="kategori-2">
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/1.svg" alt="Yeni Kore" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Ramen</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv className="kategori-2-secilen">
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi style={{color:"white"}}>Pizza</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv className="kategori-2">
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Burger</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv className="kategori-2">
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>French fries</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv className="kategori-2">
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/5.svg" alt="Fast Food" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Fast Food</KategoriAdi>
      </KategoriLogoDiv>
      <KategoriLogoDiv className="kategori-2">
        <KategoriLogo>
          <img src="/images/iteration-2-images/icons/6.svg" alt="Gazlı İçecekler" style={{width: '42px', height: '42px'}} />
        </KategoriLogo>
        <KategoriAdi>Soft drinks</KategoriAdi>
      </KategoriLogoDiv>
    </GovdeKategoriler>
    <GovdeUrunler id="govdeurunler">
      <Urun1 id="urun">
<img src="images/iteration-2-images/pictures/food-1.png" />
<div style={{}}>
<UrunAdi>Terminal Pizza</UrunAdi>
<PuanYorumFiyat>
<UrunPuani>4.9</UrunPuani>
<div style={{
  width:"126.53px",
  height:"29px",
  display:"flex",
  justifyContent:"space-between"
}}>
<UrunYorum>(200)</UrunYorum>
<UrunFiyat>60₺</UrunFiyat>
</div>
</PuanYorumFiyat>
</div>
      </Urun1>
      <Urun2 id="urun">
<img src="images/iteration-2-images/pictures/food-2.png" />
<div style={{}}>
<UrunAdi>Position Absolute Acı Pizza</UrunAdi>
<PuanYorumFiyat>
<UrunPuani>4.9</UrunPuani>
<div style={{
  width:"126.53px",
  height:"29px",
  display:"flex",
  justifyContent:"space-between"
}}>
<UrunYorum>(200)</UrunYorum>
<UrunFiyat>60₺</UrunFiyat>
</div>
</PuanYorumFiyat>
</div>
      </Urun2>
      <Urun3 id="urun"> 
<img src="images/iteration-2-images/pictures/food-3.png" />
<div style={{}}>
<UrunAdi>useEffect Tavuklu Burger</UrunAdi>
<PuanYorumFiyat>
<UrunPuani>4.9</UrunPuani>
<div style={{
  width:"126.53px",
  height:"29px",
  display:"flex",
  justifyContent:"space-between"
}}>
<UrunYorum>(200)</UrunYorum>
<UrunFiyat>60₺</UrunFiyat>
</div>
</PuanYorumFiyat>
</div>
      </Urun3>
    </GovdeUrunler>
    </Govde>
    <Footer/>
    </div>
  );
}

/*
<Link to="/order">
<Button id="aciktim-button">ACIKTIM</Button>
</Link>

*/