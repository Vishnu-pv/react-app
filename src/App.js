import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter,
   Route, 
   Link, 
   Switch,
   Router 
  } from "react-router-dom";
import Home from './Views/Home'
import About from './Views/About'


function App() {
  return (
    <div>

    <BrowserRouter>
        <Header />

      <div className="p-3">

      
      <Switch>

<Route exact path="/">
  <Home/>
</Route>
<Route path="/about">
<About/>
</Route>

</Switch>

      </div>
  

       <Footer/>
        </BrowserRouter>  

    </div>
  );
}

export default App;
