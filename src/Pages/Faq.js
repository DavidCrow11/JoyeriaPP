import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Faq.scss';
import XoloLogo from '../img/xoloCapitaN.png';


function Faq() {
  return (
    <body>
      <div class="baseFaq">
        <div class="contFaq">
          <div class="textoFaq">
            <div class="col-md-9 ftco-animate pb-5">
              <h1 class="mb-3 bread">Preguntas frecuentes</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="areaFaq">
        <div class="faqIzq"></div>
        <div class="faqDer">
          <div class="pregunta">            
            <div class="divisor"></div>
            <h2>¿Su local dónde se encuentra?</h2>
            <p>
              El local se encuentra entre el pasillo central B y el pasillo 8.
            </p>
          </div>
          <div class="pregunta">
            <div class="divisor"></div>
            <h2>¿Cuentan con alguna red social?</h2>
            <p>
              Por el momento no contamos con alguna red social.
              <div id="redes">
                <span id="btnFace"><a href="" target="_blank"><i class="fab fa-facebook fa-3x"></i></a></span>
                <span id="btnInsta"><a href="" target="_blank"><i class="fab fa-instagram fa-3x"></i></a></span>
              </div>
            </p>
          </div>
          <div class="pregunta">
            <div class="divisor"></div>
            <h2>¿Sólo venden joyeria?</h2>
              <p>
                No, también vendemos articulos para perro. Aqui está el link por si gusta ver nuestros productos
                <div class="pagWeb">
                  <span class="Xolo"><a href="" target="_blank"><img src={XoloLogo} alt="xoloCapita"/></a></span>
                </div>
              </p>
          </div>
        </div>
      </div>

      <div class="divisorFaq"></div>

      <div class="areaFaqBajo">
        <div class="faqIzqBajo">
          <div class="pregunta">            
            <div class="divisor"></div>
            <h2>¿Que tipo de artículos vende?</h2>
            <p>
              Todo tipo de joyeria, anillos, aretes, pulseras collares, etc.
            </p>
          </div>
          <div class="pregunta">
            <div class="divisor"></div>
            <h2>¿De que material está hecho?</h2>
              <p>
                La joyeria esta compuesta por plata y piedras preciosas.
              </p>
              <div class="colores">
                <div class="col1"/>                
                <div class="col2"/>                
                <div class="col3"/>                
                <div class="col4"/>                
                <div class="col5"/>              
              </div>
          </div>
        </div>
        <div class="faqDerBajo"></div>
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
              <span class="Xolo"><img src={XoloLogo} alt="logotipo xoloCapitas"/></span>
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

export default Faq;