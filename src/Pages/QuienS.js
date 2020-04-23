import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuienS.scss';
import jppLogo from '../img/joyaLogo.png';
import gatoXolo from '../img/catImg.png';
import lugarC from '../img/ciudadela.png';


function QuienS() {
  return (
    <body>
      <div class="baseQuien">
        <div class="contQuien">
          <div class="textobajo">
            <div class="col-md-9 ftco-animate pb-5">
              <h1 class="mb-3 bread">Quienes somos</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="infoQuien">
        <div class="izqQuien">
          <img src={gatoXolo} alt="perroXC"/>
        </div> 
        <div class="derQuien">
          <div class="txtQD">
            <h2>Sobre nosotros</h2>
            <h1>Joyeria Plata Y Piedra</h1>
            <p>
              Somos una empresa 100% familiar, que contamos con tres generaciones dedicados a fortalecer nuestras tradiciones, incluyendo a las nuevas generaciones por el amor a México. <br/>
              Realizamos artículos artesanales, elaborados con cariño para todos nuestros clientes. <br/>
            </p>
          </div>      
        </div> 
      </div>

      <div class="divisorQS">
        <div class="sepIzq">
          <p>
            Te gustaría conocer nuestros productos? <br/>
            No dudes en consultarlos
          </p>
        </div>
        <div class="sepDer"></div>
      </div>

      <div class="servicios">
        <div class="servCont">
          <div class="servIzq">
            <p>
              <i class="fas fa-search fa-3x"></i><br/><br/>
              <b>Perspectivas</b><br/><br/>
              Visión fresca, actualizandose si es necesario. Haciendo que nuestos productos brillen. <br/>
            </p>
          </div>
          <div class="servCent">
            <p>
              <i class="fas fa-concierge-bell fa-3x"></i><br/><br/>
              <b>Diferencia</b><br/><br/>
              Atención, y el trato al cliente. Se mantiene un sentimiento familiar complementado con un buen servicio y atención.
            </p>
          </div>
          <div class="servDer">
            <p>
              <i class="fas fa-eye fa-3x"></i><br/><br/>
              <b>Enfoque</b><br/><br/>
              Poner en alto a los artesanos mexicanos. Demostrar que México tiene talento.
            </p>
          </div>
        </div>
      </div>

      <div class="separadorQuien"></div>

      <div class="quienFin">
        <div class="izqFin">
          <img src={lugarC} alt="perroXC"/>
        </div> 
        <div class="derFin">
          <div class="txtFin">
            <h1>La ciudadela</h1>
            <p>
              Mercado de artesanías representativas de diversas regiones de México, en el cual se encuentran las mejores artesanías de la República Mexicana.<br/><br/>
              En 1964 con el apoyo del gobierno de la ciudad de México y Ayuntamiento de Zacatlán Puebla, se instala la entonces feria de la manzana, en cuyas exhibiciones se unen los primeros artesanos quienes solicitan permisos para acceder al predio abandonado e instalar ahí las primeras ferias artesanales itinerantes de la ciudad de México.<br/><br/>
              A partir del primero de junio de 1965 se establece el primer mercado de artesanías, con el nombre de<b> “La Feria de la Ciudadela”</b> y un año más tarde se consolidaría como la Unión de artesanos y similares de la república mexicana. Dando origen así al Mercado de Artesanías<b> “La Ciudadela”</b>, exponiendo productos elaborados de distintas regiones de nuestro país, desde hace 49 años.
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
              <span class="Xolo-Capitas"><img src={jppLogo} alt="logotipo xolo"/></span>
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

export default QuienS;
