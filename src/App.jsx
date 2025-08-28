
import React from 'react';
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import './App.css'

function App() {
 const [fiyat, setFiyat] = useState(0);
  const [secim, setSecim] = useState([]);
  const [adet, setAdet] = useState(1);
  const [isim, setIsim] = useState("");
  const [secilenToplam, setSecilenToplam] = useState(0);
  const [secilenHata, setSecilenHata] = useState("");
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [pizzaAdi, setPizzaAdi] = useState("Position Absolute Acı Pizza");
  const [siparisNotu, setSiparisNotu] = useState("");
  const [siparisId, setSiparisId] = useState("");
  const [siparisTarihi, setSiparisTarihi] = useState("");
  return (
    <>
      <div>

    
      </div>
      
     <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order"  >
            <OrderPizza
              fiyat={fiyat}
              setFiyat={setFiyat}
              secim={secim}
              setSecim={setSecim}
              adet={adet}
              setAdet={setAdet}
              isim={isim}
              setIsim={setIsim}
              secilenToplam={secilenToplam}
              setSecilenToplam={setSecilenToplam}
              secilenHata={secilenHata}
              setSecilenHata={setSecilenHata}
              boyut={boyut}
              setBoyut={setBoyut}
              hamur={hamur}
              setHamur={setHamur}
              pizzaAdi={pizzaAdi}
              setPizzaAdi={setPizzaAdi}
              siparisNotu={siparisNotu}
              setSiparisNotu={setSiparisNotu}
              siparisId={siparisId}
              setSiparisId={setSiparisId}
              siparisTarihi={siparisTarihi}
              setSiparisTarihi={setSiparisTarihi}
            />
          </Route>
          <Route path="/success" >
            <Success
              fiyat={fiyat}
              secim={secim}
              adet={adet}
              isim={isim}
              secilenToplam={secilenToplam}              
              boyut={boyut}
              hamur={hamur}
              pizzaAdi={pizzaAdi}
              siparisNotu={siparisNotu}
              siparisId={siparisId}
              siparisTarihi={siparisTarihi}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    

    </>
  )
}

export default App
