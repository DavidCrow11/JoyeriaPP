import React from 'react';
import {useOneContentfulData} from '../Hooks/useContenfulData';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nota.scss';
import jppLogo from '../img/joyaLogo.png';

const Nota = () => {
  const id = useParams();
  const [notaBlog, loadingNotaBlog] = useOneContentfulData(id);
  if(loadingNotaBlog){
      return(
          <h1>Cargando producto ...</h1>
      )
  }
  const crearHTML = datos => documentToHtmlString(datos)
  return(
      <body>
        <div class="baseNota">
          <div class="contNota">
            <div class="txtBNota">
              <div class="text w-100 text-center mb-md-5 pb-md-5">
                <h1 class="mb-4">Catálogo detalles</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="producto">
          <div class="ladIzq">
            <div class="prodImg">
              <img src={notaBlog.fields.imagenPrincipal.fields.file.url}></img>
            </div>
          </div>
          <div class="ladDer">
            <div class="contProd">
              <div class="divisor"></div>
              <h1>{notaBlog.fields.title}</h1>
              <p
                dangerouslySetInnerHTML={
                  {__html:crearHTML(notaBlog.fields.description)}}>
              </p>
              <div class="btnVolver">
                <Link to="/catalogo" class="catVol">Volver</Link>
              </div>
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
                <span class="Joyeria"><img src={jppLogo} alt="logotipo joyería"/></span>
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
  )
}

export default Nota;