
import React from 'react';
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <div>

    
      </div>
      
     <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order" component={OrderPizza} />
          <Route path="/success" component={Success} />
        </Switch>
      </BrowserRouter>
    

    </>
  )
}

export default App
