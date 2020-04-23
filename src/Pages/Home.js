import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import DogImg from '../img/DogImg.png';
import XoloLogo from '../img/xoloCapita.png';

import './Home.scss';

function Home() {
  return (
    <body>
      <div class="imagenBase">
        <div class="contenedor">
          <div class="textoCentral">
            <div class="text w-100 text-center mb-md-5 pb-md-5">
              <h1 class="mb-4">Bienvenido a Joyeria Plata Y Piedra</h1>
              <p>El valor de la joya en una cultura.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contenidoHome">
        <div class="txtInfo">
          <div class="infoIzq">
            <p>
              Conoce nuestros productos.
            </p>
          </div>
          <div class="infoDer">
            <p>
              Lo más importante para nosotros, es el amor. <br/>
              Por eso nos enfocamos en dar ese obsequio que no solo te recordará una cultura, también la emoción de conocer algo nuevo. <br/>
              Visítanos, y no dudes en que te sorprenderás con nuestros diseños, hechos a mano con la tradición de tres generaciones.
            </p>
          </div>
        </div>
      </div>

      <div class="finalHome">
        <div class="contenidoFinal">
          <div class="imagen">
            <img src={DogImg} alt="perroXC"/>
          </div>
          <div class="contDer">
            <p>
              Nuestro motor de acción se activa con la motivación. Es el combustible que nos empuja a hacer las cosas y a caminar hacia nuestro objetivo con entusiasmo, energía y convicción. Es lo que impulsa y estimula nuestra existencia.<br/><br/>
              De todas las cosas que llevas puestas, tu actitud es la más importante.<br/><br/>
              Conoce más sobre nosotros a través de la página web. <br/>
              Y no dudes en visitarnos.<br/><br/>
              <b>Te esperamos.</b>
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div class="links">
          <div class="social">
            <span id="btnFace"><a href="" target="_blank"><i class="fab fa-facebook fa-2x"></i></a></span>
            <span id="btnInsta"><a href="" target="_blank"><i class="fab fa-instagram fa-2x"></i></a></span>                        
          </div>
          <div class="web">
            <p>
              No dudes en visitar nuestra otra página de productos.
              <span class="Xolo"><a href="" target="_blank"><img src={XoloLogo} alt="xoloCapita"/></a></span>
            </p>
          </div>
        </div>
        <div class="separador"></div>
        <div class="derechos">
          <p>
            Copyright ©2020 All rights reserved | Elaborado por David Lugo Resendiz - ICONOS
          </p>
        </div>
      </footer>     
      
    </body>
	);
}

export default Home;