import React from "react";
import styled from "styled-components";
import "./Footer.css"
const FooterAlan = styled.footer`
  background-color: #1A1A1A;
  height: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;   
  justify-content: center; 
  align-items: center;     
`;
const FooterBuyukDiv = styled.div`
  width: 100%;
  height: 471px;
  display: flex;
  flex-wrap: wrap;
`;
const UcluAlan = styled.div`
  width: 1066px;
  height: 390px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 58px;
  
`;
const SolAlan=styled.div`
  width: 306px;
  height: 390px;  
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  row-gap: 25px;
 `;
 const SiteAdi=styled.h1`
  color: #FFFFFF;
  font-size: 50px;
  font-weight: 400;
  line-height: 50px;
  font-family: "Londrina Solid", cursive;
  letter-spacing: 0%;
 `;
 const AdresKonum=styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  width: 80%;
display: flex;
align-items: start;
gap: 10px;
line-height: 32px;
`;
 const Konum=styled.div`
 `;
 const MailIconMail=styled.div`
 color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  width: 80%;
display: flex;
align-items: start;
gap: 10px;
line-height: 32px;
`;
 const Mail=styled.div`
 `;
 const TelefonIconTelefon=styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  width: 80%;
display: flex;
align-items: start;
gap: 10px;
line-height: 32px;
`;
 const Telefon=styled.div`
 `;
 const OrtaAlan=styled.div`
  width: 306px;
  height: 390px;  
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
 `;
 const OrtaAlanBaslik=styled.h2`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 500;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  margin-top: 60px;
  `;
 const SagAlan=styled.div`
  width: 366px;
  height: 390px;  
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
 `;
 const SagAlanBaslik=styled.h2`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 500;
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  margin-top: 60px;
 `;
 const FotolarAlani=styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;  
  width: 347px;
  height: 222px;
  margin-top: 35px;
  
 `;
 const Foto=styled.img`
  width: 30%;  

  height: 94px;
  margin:5px;
  border-radius: 3px;
 `;
 const FooterKucukDiv = styled.div`
  color: #FFFFFF;
  width: 100%;
  height: 90px;
  font-size: 18px;
  font-weight: 400; 
  font-family: "Barlow", sans-serif;
  letter-spacing: 0%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  padding-left: 420px;
`;
const TwitterLogo = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 790px;
`;
export default function Footer() {
    return <div>
 <FooterAlan id="footer">
      <FooterBuyukDiv id="footerbuyuk">
       <UcluAlan id="uclualan">
        <SolAlan id="solalan">
          
          <SiteAdi>Teknolojik Yemekler</SiteAdi>
          <AdresKonum>
            <img src="/images/iteration-2-images/footer/icons/icon-1.png" />
           <Konum> 341 Londonderry Road,
Istanbul Türkiye</Konum>
           </AdresKonum>
          
          <MailIconMail>
            <img src="/images/iteration-2-images/footer/icons/icon-2.png" />
             <Mail>aciktim@teknolojikyemekler.com</Mail>
            </MailIconMail>
         
          <TelefonIconTelefon>
<img src="/images/iteration-2-images/footer/icons/icon-3.png" />
<Telefon>+90 216 123 45 67</Telefon>
          </TelefonIconTelefon>
          
        </SolAlan>
        <OrtaAlan id="ortaalan">
          <OrtaAlanBaslik>Hot Menu</OrtaAlanBaslik>
          <ul style={{ listStyleType: "none", 
                       padding: 0,
                       color: "#FFFFFF",
                       display: "flex",
                       flexDirection: "column",
                       justifyContent: "left",
                       alignItems: "left",
                       fontSize: "18px",
                       gap: "17px",
                       fontFamily: "'Barlow', sans-serif",
                        fontWeight: "400",
                        marginTop: "30px"
                     }}>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz  Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </OrtaAlan>
        <SagAlan id="sagalan">
          <SagAlanBaslik>Instagram</SagAlanBaslik>
          <FotolarAlani>
            <Foto src="/images/iteration-2-images/footer/insta/li-0.png" />
            <Foto src="/images/iteration-2-images/footer/insta/li-1.png" />
            <Foto src="/images/iteration-2-images/footer/insta/li-2.png" />
            <Foto src="/images/iteration-2-images/footer/insta/li-3.png" />
            <Foto src="/images/iteration-2-images/footer/insta/li-4.png" />
            <Foto src="/images/iteration-2-images/footer/insta/li-5.png" />

          </FotolarAlani>
        </SagAlan>
        </UcluAlan> 
      </FooterBuyukDiv>
      <span id="altcizgi"></span>
        <FooterKucukDiv id="kucukalan"><span id="alttext">© 2025 Teknolojik Yemekler.</span>

         
        </FooterKucukDiv>

        <div id="twlogodiv"> <TwitterLogo id="twlogo">
            <i className="fa-brands fa-twitter"></i>
          </TwitterLogo></div>
      </FooterAlan>

    </div>
}