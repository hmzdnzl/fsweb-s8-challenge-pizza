import React from "react";
import styled from "styled-components";


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
    border: 1px solid black;
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
border: 1px solid red;
`;
const Boyut=styled.div`
width: 147px;
height: 155px;
border: 1px solid blue;
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
const FarkliRenk = styled.span`
  color: red;
`;
const BoyutSecenekleriDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid red;
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
border: 1px solid green;
`;
const HamurSecimiLabel = styled.label` 
  font-family: 'Barlow', sans-serif;
`;
const HamurSecimi=styled.input`
width: 158px;
height: 38px;
`;
const EkMalzeme=styled.div`
width: 486px;
height: 81px;
border: 1px solid red;
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
border: 1px solid red;
`;
const EkMalzemelerYazisi=styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid black;
  width: 486px;
  height: 56px; 
  margin-top: -10px;
`;
const EkMalzemeAlani=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex-wrap: wrap;
  border: 1px solid black;
  width: 524px;
  height: 214px;
  border: 1px solid blue;
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
  border: 1px solid #5F5F5F;
  margin-top: 35px;
  padding:0;
border: 1px solid red;
`;
const SiparisNotuBaslik=styled.p`
font-family: 'Barlow', sans-serif;
font-size: 20px;
font-weight: 600;
line-height: 24.8px;
color: #292929;
margin:;
width: 146px;
height: 25px;
border: 1px solid red;
`;
const SiparisNotuInput=styled.textarea`
  width: 531px;
  height: 56px;
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  color: black;
  resize: none;
`;
const UcretAlani=styled.div`
  width: 530px;
  height: 256px;
  border: 1px solid black;
  margin-top: 35px; 
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
  border: 1px solid black;
  margin-top: 20px;
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
const SiparisToplamAlani=styled.div`
  width: 350px;
  height: 255px;
  border: 1px solid blue;
`;
export default function OrderPizza() {
  return (
    <div>
      <Header>
      <Logo></Logo>
<NavLinks>
<HomeLink href="/">Anasayfa - </HomeLink>
<OrderLink href="/order">Sipariş Oluştur</OrderLink>
</NavLinks>
      </Header>
      <Body>
<PizzaAdi>Position Absolute Acı Pizza</PizzaAdi>
<FiyatPuanYorum>
<PizzaFiyati>85.50₺</PizzaFiyati>
<PuanYorum> 
  <PizzaPuan>4.9</PizzaPuan>
  <Yorum> (200)</Yorum>
</PuanYorum>
</FiyatPuanYorum>
<Aciklama>
  Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
  Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
  Küçük bir pizzaya bazen pizzetta denir.
</Aciklama>
<BoyutHamur>
  <Boyut>
    <BoyutSecimiYazisi>Boyut Seç<span style={{ 
      color: "red", 
      fontFamily:"Barlow",
      fontWeight:"600",
      fontSize:"20px",
      }}>*</span></BoyutSecimiYazisi>
   <BoyutSecenekleriDiv>
  <BoyutSecenekleriLabel>
    <BoyutSecenekleri type="radio" name="boyut" value="kucuk" />
    Küçük
  </BoyutSecenekleriLabel>
  <BoyutSecenekleriLabel>
    <BoyutSecenekleri type="radio" name="boyut" value="orta" />
    Orta
  </BoyutSecenekleriLabel>
  <BoyutSecenekleriLabel>
    <BoyutSecenekleri type="radio" name="boyut" value="buyuk" />
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
    <select name="hamur" defaultValue="">
      <option value="" disabled>Hamur Kalınlığı Seç</option>
      <option value="ince">İnce</option>
      <option value="kalin">Kalın</option>
    </select>
  </HamurSecimiLabel>
  </Hamur>
</BoyutHamur>
<EkMalzeme>
  <EkMalzemelerBaslik>Ek Malzemeler</EkMalzemelerBaslik>
  <EkMalzemelerYazisi>En Fazla 10 malzeme seçebilirsiniz. 5₺</EkMalzemelerYazisi>
</EkMalzeme>

<EkMalzemeAlani>
  
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Pepperoni" />
    Pepperoni
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Tavuk Izgara" />
    Tavuk Izgara
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Mısır" />
    Mısır
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Sarımsak" />
    Sarımsak
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Ananas" />
    Ananas
  </EkMalzemeSecenekleriLabel>
   <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Sosis" />
    Sosis
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Soğan" />
    Soğan
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Sucuk" />
    Sucuk
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Biber" />
    Biber
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Kabak" />
    Kabak
  </EkMalzemeSecenekleriLabel>
   <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="KanadaJumbonu" />
    Kanada Jumbonu
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Domates" />
    Domates
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Jalepeno" />
    Jalepeno
  </EkMalzemeSecenekleriLabel>
  <EkMalzemeSecenekleriLabel>
    <EkMalzemeSecenekleri type="checkbox" name="malzeme" value="Sucuk" />
    Sucuk
  </EkMalzemeSecenekleriLabel>


</EkMalzemeAlani>
<SiparisNotuAlani>
  <SiparisNotuBaslik>Sipariş Notu</SiparisNotuBaslik>
  <SiparisNotuInput placeholder="Siparişine eklemek istediğin bir not var mı?" />
</SiparisNotuAlani>
<UcretAlani>
  <SiparisAdetiAlani>
    <AdetAzalt>-</AdetAzalt>
    <Adet>1</Adet>
    <AdetArttir>+</AdetArttir>
  </SiparisAdetiAlani>
  <SiparisToplamAlani>
   
  </SiparisToplamAlani>
</UcretAlani>
      </Body>
    </div>
  );
}
