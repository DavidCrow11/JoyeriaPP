import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacto.scss';
import jppLogo from '../img/joyaLogo.png';


function Contacto() {
  return (
    <body>
      <div class="baseContacto">
        <div class="contContacto">
          <div class="textoContacto">
            <div class="col-md-9 ftco-animate pb-5">
              <h1 class="mb-3 bread">Contáctanos</h1>
            </div>
          </div>
        </div>
      </div>

      <form class="contacto" action="contacto.php" method="post">
        <div class="contacInfo">
          <div class="contCont">
            <div class="contIzq">
              <div class="direccion">
                <div class="cI">
                  <i class="fas fa-map-marked-alt fa-2x"></i>
                </div>
                <div class="cD">
                  <h1>Dirección:</h1>
                  <p>
                    Balderas S/N, Colonia Centro, Centro, Cuauhtémoc, 06040 Cuauhtémoc, CDMX
                  </p>
                </div>
              </div>
              <div class="telefono">
                <div class="cI">
                  <i class="fas fa-mobile-alt fa-2x"></i>
                </div>
                <div class="cD">
                  <h1>Teléfono:</h1>
                  <p>
                    55 0000 0000
                  </p>
                </div>
              </div>
              <div class="email">
                <div class="cI">
                  <i class="fas fa-envelope fa-2x"></i>
                </div>
                <div class="cD">
                  <h1>Email:</h1>
                  <p>
                    info@mail.com
                  </p>
                </div>
              </div>
            </div>

            <div class="contDer">
              <div id="cNom">
                <input id="nombre" type='text' name="nombre" placeholder="Tu nombre" required=""/>
              </div>
              <div id="cMail">
                <input id="email" type='email' name="email" placeholder="Tu correo" required=""/>
              </div>
              <div id="cCd">
                <input id="cd" type='text' name="cd" placeholder="Tu ciudad de residencia" maxlength="10" required=""/>
              </div>
              <div id="cMens">
                <textarea id="mns" name="mns" placeholder="Anota alguna duda o comentario" required=""/>
              </div>
              <div id="botones">
                <input id="reset" type="reset" name="reset" value="Borrar"/>
                <input id="submit" type="submit" name="submit" value="Enviar" />
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="DivMapa">
        <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.571937659248!2d-99.15133898514306!3d19.43089278688526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2ad1abd143%3A0x10fdffa52b4ee0!2sLa%20Ciudadela!5e0!3m2!1sen!2smx!4v1586205091230!5m2!1sen!2smx"></iframe>
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
              <span class="Xolo-capitas"><img src={jppLogo} alt="logotipo xolo"/></span>
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

export default Contacto;