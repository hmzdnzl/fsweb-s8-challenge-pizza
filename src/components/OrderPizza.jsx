import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./OrderPizza.css"


const Header = styled.header`
     background-color: #CE2829;
      background-size: cover;
      background-position: center;
      height: 207px;
      width: 100%;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: flex-start;
      position: relative;
`;
const Logo = styled.div`
    background-image: url('/images/images-1/logo.svg');
      background-size: cover;
       background-position: center;
       height: 50px;
       width: 400px;
       margin-top: 50px;
      
`;
const NavLinks = styled.div`
   display: flex,
  justify-content: center;
  align-items: flex-start;
  position: relative;

`;
const HomeLink = styled.a`
    text-decoration: none;
      display: inline-block;
      align-items: center;
      font-size: 16px;
      justify-content: center;
      color: white;
      margin-top: 167px;
      margin-left: -780px;
      font-family: 'Barlow', sans-serif;
    width: 73px;
    height: 29px;
`;
const OrderLink = styled.a`
     text-decoration: none;
     font-weight: bold;
     font-family: 'Barlow', sans-serif;
        display: inline-block;
        align-items: center;
        font-size: 16px;
        justify-content: center;
        color: white;
        margin-top: 167px;
        margin-left: 0px;
        
        width: 125px;
        height: 29px;
`;
const Body = styled.div`
    width: 532px;
    height: 1340px;
   
    margin: auto;
    margin-top: 31px;
`;
const PizzaAdi = styled.h1`
    font-family: 'Barlow', sans-serif;
    font-size: 22px;
    font-weight: semi-bold;
    line-height: 29.5px;
    margin-bottom: 20px;
    vertical-align: middle;
    width: 488px;
    height: 56px;
    size: 22px;
    letter-spacing: 0px;
    padding: 10px 0;
    font-weight: 600;
`;
const FiyatPuanYorum = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 532px;
    height: 56px;
    padding: 10px 0;
  
    margin: -15px 0;
`;
const PizzaFiyati = styled.h2`
    font-family: 'Barlow', sans-serif;
    font-size: 28px;
    font-weight: 700;
    line-height: 37.5px;   
    vertical-align: middle;
    width: 106px;
    height: 37px;
    letter-spacing: 0%;

`;
const PuanYorum=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 118px;
    height: 27px;
    

`;
const PizzaPuan = styled.div`
font-family: 'Barlow', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 28.8px;
vertical-align: middle;
horizontal-align: right;
width: 106px;
height: 24px;
letter-spacing: 0%;
padding: 0 5px;
text-align: left;
justify-content: center;
color:#5F5F5F
`;
const Yorum=styled.div`
font-family: 'Barlow', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 28.8px;
vertical-align: middle;
horizontal-align: right;
width: 106px;
height: 24px;
letter-spacing: 0%;

text-align: right;
justify-content: right;
color:#5F5F5F
`;
const Aciklama=styled.p`
font-family: 'Barlow', sans-serif;
width: 532px;
height:173px;
font-size: 16px;
font-weight: 400;
line-height: 28.8px;
color: #5F5F5F;
font-family: 'Barlow', sans-serif;
margin-top: 15px;

`;
const BoyutHamur=styled.div`
width: 428px;
height: 155px;
margin-top: 35px;
display: flex;
justify-content: space-between;

`;
const Boyut=styled.div`
width: 147px;
height: 155px;

`;
const BoyutSecimiYazisi=styled.p`
width: 146px;
height: 25px;
font-family: 'Barlow', sans-serif;
font-size: 20px;
font-weight: 600;
line-height: 24.8px;
color: #292929;
font-style: semi-bold;
letter-spacing: 0%;
vertical-align: middle;
`;
const BoyutSecenekleriDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  width: 101px;
  height: 110px; 
  gap: 5px;
  margin-top: 19px;

`;
const BoyutSecenekleriLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #5F5F5F;
  font-size: 16px;
vertical-align: middle;
font-weight: 500;
font-family: 'Barlow', sans-serif;
`;
const BoyutSecenekleri=styled.input`
width: 15px;
height: 15px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
margin: 10px 1px;
justify-content: left;

`;
const Hamur=styled.div`
width: 159px;
height: 75px;

row-gap: 1px;
display: flex;
flex-direction: column;
align-items: flex-start;
box-sizing: border-box;
`;
const HamurSecimiLabel = styled.label` 
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  margin-top: 10px;
 
`;
const EkMalzeme=styled.div`
width: 486px;
height: 81px;

margin-top: 35px;
`;
const EkMalzemelerBaslik= styled.p`
font-family: 'Barlow', sans-serif;
font-size: 20px;
font-style: semi-bold;
font-weight: 600;
line-height: 24.8px;
color: #292929;
margin-bottom: 10px;
width: 154px;
height: 25px;

`;
const EkMalzemelerYazisi=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
 
  width: 486px;
  height: 76px; 
  margin-top: -25px;
  
`;
const EkMalzemeAlani=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex-wrap: wrap;
  
  width: 524px;
  height: 214px;
  
  margin-top: 35px;
  gap: 15px;
`;
const EkMalzemeSecenekleriLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  color: #5F5F5F;
  font-size: 16px;
  vertical-align: middle;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;   
  width: 155px;
  height: 25px;
color: #5F5F5F;
`;
const EkMalzemeSecenekleri=styled.input`
width: 15px;
height: 15px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
margin: 10px 1px;
justify-content: left;
`;
const SiparisNotuAlani=styled.div`
  width: 531px;
  height: 137px;
  
  margin-top: 1px;
  padding:0;
`;
const SiparisNotuBaslik=styled.p`
font-family: 'Barlow', sans-serif;
font-size: 20px;
font-weight: 600;
line-height: 24.8px;
color: #292929;
width: 146px;
height: 25px;

justify-content: left;
display: flex;
align-items: center;
`;
const IsimAlani=styled.div`
width: 500px;
height: 25px;
margin-top: 10px;

color: #292929;
gap: 3px;
display: flex;
align-items: center;
`;
const IsimInput=styled.input`
  width: 100px;
  height: 23px;
  
  color: #292929;
`;
const SiparisNotuInput=styled.textarea`
  width: 531px;
  height: 56px;
  resize: none;  
  margin-top: 20px;
  padding: 10px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  color: #292929
  resize: none;
`;
const Cizgi=styled.div`
  width: 100%;
  border: 1px solid #5F5F5F80;
  margin-top: 30px;
`;
const UcretAlani=styled.div`
  width: 530px;
  height: 256px;
  
  margin-top: 30px;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  color: black;
  display: flex;
  justify-content: space-between;
`;
const SiparisAdetiAlani=styled.div`
  width: 170px;
  height: 56px;
  
  margin-top: 0px;
  display: flex;

  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  color: black;
`;
const AdetAzalt=styled.button`
  width: 57px;
  height: 56px;  
  background-color: #FDC913;
  cursor: pointer;
`;
const Adet=styled.div`
width: 56px;
height: 56px;
border: 1px solid #D9D9D9;
display: flex;
align-items: center;
justify-content: center;
`;
const AdetArttir=styled.button`
  width: 57px;
  height: 56px;  
  background-color: #FDC913;
  cursor: pointer;
`;
const SiparisToplamiAlani=styled.div`
  width: 350px;
  height: 160px;
  
`;
const UcretHesaplama=styled.div`
  width: 350px;
  height: 197px;  
  margin-top: 0px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #D9D9D9;
`;
const SiparisToplamiBaslik=styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.8px;
  color: #292929;
  width: 154px;
  height: 25px; 
  justify-content: left;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-left: 50px;
`;
const SecimlerYazisi=styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 24.8px;
  color: #5F5F5F;
  width: 88px;
  height: 25px;
  
  justify-content: left;
  display: flex;
  align-items: center;
  margin: 0;
`;const ToplamYazisi=styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 24.8px;
  color: #CE2829;
  width: 88px;
  height: 25px;
  
  justify-content: left;
  display: flex;
  align-items: center;
  margin: 0;
`;
const SecimlerUcret=styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 24.8px;
  color: #5F5F5F;
  width: 250px;
  height: 25px;
  
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 50px;
`;
const ToplamYaziTutar=styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 24.8px;
  color: #CE2829;
  width: 250px;
  height: 25px;
  
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 50px;
`;
const SiparisVerButonu=styled.button`
  width: 350px;
  height: 62px;
  background-color: #FDC913;
  cursor: pointer;
  margin-top: -20px;
`;
const SecilenUcreti=styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 24.8px;
  color: #5F5F5F;
  width: 60px;
  height: 25px;  
  justify-content: right;
  display: flex;
  align-items: center;
  margin-right: 0px;
`;
const ToplamTutar=styled.div`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 24.8px;
  color: #CE2829;
  width: 60px;
  height: 25px;  
  justify-content: right;
  display: flex;
  align-items: center;
  margin-right: 0px;
`;
export default function OrderPizza() {
  const [fiyat, setFiyat] = useState("0");
  const [secim, setSecim] = useState("");
  const [adet, setAdet] = useState(1);
  const [isim, setIsim] = useState("");
  const [secilenToplam, setSecilenToplam] = useState(0);
  const [secilenHata, setSecilenHata] = useState("");
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  function adetArttir() {
    setAdet(adet + 1);
  }

  function adetAzalt() {
   if (adet > 1) {
    setAdet(adet - 1);
   }    
  }
  

  function handleIsimChange(event) {
    setIsim(event.target.value);
  }

   function handleSecimChange(event) {
  const malzeme = event.target.value;

  
  if (event.target.checked) {
    setSecilenToplam((secilen) => secilen + 5);
  } else {
    setSecilenToplam((secilen) => secilen - 5);
  }

  let nextSecim;
  if (secim.includes(malzeme)) {
    nextSecim = secim.filter((item) => item !== malzeme);
    setSecim(nextSecim);
  } else {
    nextSecim = [...secim, malzeme];
    setSecim(nextSecim);
  }

  if (nextSecim.length < 4 && nextSecim.length > 0) {
    setSecilenHata("En az 4 malzeme seçmelisiniz.");
  } else if (nextSecim.length > 10) {
    setSecilenHata("En fazla 10 malzeme seçebilirsiniz.");
  } else {
    setSecilenHata("");
  }      
}

function handleBoyutChange(event) {
  setBoyut(event.target.value);
}
const isBoyutSecimiDisabled= boyut !== "kucuk" && boyut !== "orta" && boyut !== "buyuk";

function handleHamurChange(event) {
  setHamur(event.target.value);
}
const hamurSecimiDisabled= hamur !== "ince" && hamur !== "kalin";

function fiyatHesapla() {
  let boyutFiyat = 0;
if (boyut === "kucuk") {
  boyutFiyat = 85.5;
} else if (boyut === "orta") {
  boyutFiyat = 125.5;
} else if (boyut === "buyuk") {
  boyutFiyat = 165.5;
}
let toplam=(boyutFiyat + secilenToplam) * adet;
setFiyat(toplam);
}
useEffect(() => {
  fiyatHesapla();
  console.log(siparisOzeti);
}, [boyut, secilenToplam, adet]);

let siparisOzeti = {
  isim: isim,
  boyut: boyut,
  hamur: hamur,
  malzemeler: secim,
  adet: adet,
  siparisTutari: fiyat
};

function siparisVermeIslemi() {
axios.post("https://reqres.in/api/pizza", siparisOzeti, {
  headers: {
    "x-api-key": "reqres-free-v1",
   }
})
  .then(response => {
    console.log("Başarılı:", response.data);

  })
  .catch(error => {
    console.error("Hata oluştu:", error);
  });
  
}

  return (
    <div className="orderpizzapage">
      <Header id="header">
     <div id="logo-container"><Logo id="orderpagelogo" ></Logo></div>
<NavLinks id="navlinks">
<HomeLink href="/">Anasayfa - </HomeLink>
<OrderLink href="/order">Sipariş Oluştur</OrderLink>
</NavLinks>
      </Header>
      <Body id="body">
<PizzaAdi>Position Absolute Acı Pizza</PizzaAdi>
<FiyatPuanYorum id="fiyatpuanyorum">
<PizzaFiyati>85.50₺</PizzaFiyati>
<PuanYorum id="puanyorum"> 
  <PizzaPuan>4.9</PizzaPuan>
  <Yorum> (200)</Yorum>
</PuanYorum>
</FiyatPuanYorum>
<Aciklama id="aciklama">
  Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
  Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
  Küçük bir pizzaya bazen pizzetta denir.
</Aciklama>
<BoyutHamur id="boyuthamur">
  <Boyut>
    <BoyutSecimiYazisi>Boyut Seç<span style={{ 
      color: "red", 
      fontFamily:"Barlow",
      fontWeight:"600",
      fontSize:"20px",
      }}>*</span></BoyutSecimiYazisi>
   <BoyutSecenekleriDiv>
  <BoyutSecenekleriLabel>
    <BoyutSecenekleri onChange={handleBoyutChange} type="radio" name="boyut" value="kucuk" />
    Küçük
  </BoyutSecenekleriLabel>
  <BoyutSecenekleriLabel>
    <BoyutSecenekleri onChange={handleBoyutChange} type="radio" name="boyut" value="orta" />
    Orta
  </BoyutSecenekleriLabel>
  <BoyutSecenekleriLabel>
    <BoyutSecenekleri onChange={handleBoyutChange} type="radio" name="boyut" value="buyuk" />
    Büyük
  </BoyutSecenekleriLabel>
</BoyutSecenekleriDiv>
  </Boyut>
  <Hamur>
<BoyutSecimiYazisi>Hamur Seç<span style={{ 
      color: "red", 
      fontFamily:"Barlow",
      fontWeight:"600",
      fontSize:"20px",
      }}>*</span></BoyutSecimiYazisi>
 <HamurSecimiLabel>
    <select id="hamur-secimi" onChange={handleHamurChange} name="hamur" defaultValue="">
      <option value="" disabled>Hamur Kalınlığı</option>
      <option value="ince">İnce</option>
      <option  value="kalin">Kalın</option>
    </select>
  </HamurSecimiLabel>
  </Hamur>
</BoyutHamur>
<EkMalzeme id="ekmalzeme">
  <EkMalzemelerBaslik id="ekmalzemelerbaslik">Ek Malzemeler</EkMalzemelerBaslik>
  <EkMalzemelerYazisi id="ekmalzemelerayazisi">En az 4 adet malzeme seçmeniz gerekmektedir. En Fazla 10 adet malzeme seçebilirsiniz. 5₺

  </EkMalzemelerYazisi>
  <div id="secilenHata" style={{ color: "red", marginTop: "-20px" }}>{secilenHata}</div>
</EkMalzeme>

<EkMalzemeAlani id="ekmalzemealani">
  
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Pepperoni" />
    Pepperoni
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Tavuk Izgara" />
    Tavuk Izgara
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Mısır" />
    Mısır
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Sarımsak" />
    Sarımsak
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Ananas" />
    Ananas
  </EkMalzemeSecenekleriLabel>
   <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Sosis" />
    Sosis
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Soğan" />
    Soğan
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Sucuk" />
    Sucuk
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Biber" />
    Biber
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Kabak" />
    Kabak
  </EkMalzemeSecenekleriLabel>
   <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="KanadaJumbonu" />
    Kanada Jumbonu
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Domates" />
    Domates
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Jalepeno" />
    Jalepeno
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri  onChange={handleSecimChange} type="checkbox" name="malzeme" value="Salam" />
    Salam
  </EkMalzemeSecenekleriLabel>


</EkMalzemeAlani>
<SiparisNotuAlani>
  <SiparisNotuBaslik>Sipariş Notu</SiparisNotuBaslik>
  <IsimAlani>İsminiz:
    <IsimInput onChange={handleIsimChange} type="text" name="isim" placeholder="İsminizi Yazınız" />
    <div id="isim-hata" style={{ color: "red" }}>{isim.length < 3 && isim.length > 0 ? "İsim en az 3 harf olmalıdır." : null}</div>
  </IsimAlani>
  <SiparisNotuInput id="siparis-notu" placeholder="Siparişine eklemek istediğin bir not var mı?" />
</SiparisNotuAlani>
<Cizgi id="cizgi"></Cizgi>
<UcretAlani id="ucretalani">
  <SiparisAdetiAlani id="siparisadetialani">
    <AdetAzalt onClick={adetAzalt}>-</AdetAzalt>
    <Adet>{adet}</Adet>
    <AdetArttir onClick={adetArttir}>+</AdetArttir>
  </SiparisAdetiAlani>
  <SiparisToplamiAlani>
    
<UcretHesaplama id="ucrethesaplama">
  <SiparisToplamiBaslik>Sipariş Toplamı</SiparisToplamiBaslik>
 
 <SecimlerUcret>
  <SecimlerYazisi>Seçimler</SecimlerYazisi>
 <SecilenUcreti onChange={handleSecimChange}>{secilenToplam*adet}<span>₺</span></SecilenUcreti>

 </SecimlerUcret>
 <ToplamYaziTutar>
  <ToplamYazisi>Toplam</ToplamYazisi>
  <ToplamTutar>{fiyat}<span>₺</span></ToplamTutar>
</ToplamYaziTutar>
</UcretHesaplama>
<Link to="/success">
  <SiparisVerButonu id="siparis-ver-butonu" onClick={siparisVermeIslemi} disabled={secim.length < 4 
    || secim.length > 10 
    || isim.length < 3 
    || isBoyutSecimiDisabled 
    || hamurSecimiDisabled}>SİPARİŞ VER</SiparisVerButonu>
</Link>
  </SiparisToplamiAlani>
</UcretAlani>
      </Body>
<div>


</div>
    </div>
  );
}
