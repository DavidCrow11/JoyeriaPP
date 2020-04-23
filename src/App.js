import React from 'react';
import 'bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import imagenGrafica from './img/joyaLogo.png';
import Home from './Pages/Home'
import QuienS from './Pages/QuienS'
import Catalogo from './Pages/Catalogo'
import Faq from './Pages/Faq'
import Contacto from './Pages/Contacto'
import Nota from './Pages/Nota'

function App() {
  window.onscroll = function() {scrollFunction()};
  return (
    <Router>
            <Navigation>
                <Route path='/' exact component={Home}/>
                <Route path='/quienS' component={QuienS}/>
                <Route path='/catalogo' component={Catalogo}/>
                <Route path='/faq' component={Faq}/>
                <Route path='/contacto' component={Contacto}/>
            </Navigation>
                
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path="/quienS" component={QuienS} />
                    <Route path="/catalogo" component={Catalogo} />
                    <Route path="/nota/:id" component={Nota} />
                    <Route path="/faq" component={Faq} />
                    <Route path='/contacto' component={Contacto}/>
                </Switch>
        </Router>
    
  );
}
const Navigation = () =>{
  return(
    <div>
    <div id="header">
      <nav class="navegador">
            <NavLink to='/' class="navLink"><img src={imagenGrafica} alt=""></img></NavLink>    
            <NavLink to="/quienS"  class="navLink">Quienes somos</NavLink>
            <NavLink to="/catalogo"  class="navLink">Catálogo</NavLink>
            <NavLink to="/faq"  class="navLink">Preguntas frecuentes</NavLink>
            <NavLink to="/contacto" class="navLink">Contacto</NavLink>
      </nav>
    </div>

      <div id="headScroll">
        <div class="navScroll">
          <NavLink to='/' class="navLink"><img src={imagenGrafica} alt=""></img></NavLink>    
          <NavLink to="/quienS"  class="navLink">Quienes somos</NavLink>
          <NavLink to="/catalogo"  class="navLink">Catálogo</NavLink>
          <NavLink to="/faq"  class="navLink">Preguntas frecuentes</NavLink>
          <NavLink to="/contacto" class="navLink">Contacto</NavLink>
        </div>
      </div></div>
  )
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headScroll").style.top = "0";
  } else {
    document.getElementById("headScroll").style.top = "-100px";
  }
}

export default App;
