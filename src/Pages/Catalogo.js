import React, {useEffect, useState} from 'react';
import {useContentfulData} from '../Hooks/useContenfulData';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalogo.scss';
import jppLogo from '../img/joyaLogo.png';
const Catalogo = () => {
    const [notasBlog, loadingNotasBlog] = useContentfulData('productos')
    
    useEffect(()=>{
        //console.log(notasBlog)
    })
    if(loadingNotasBlog){
        return <h1>Cargando...</h1>
    }
    return(
        <body>
            <div class="baseCatalogo">
                <div class="contCatalogo">
                    <div class="txtBCatalogo">
                        <div class="text w-100 text-center mb-md-5 pb-md-5">
                            <h1 class="mb-4">Catálogo</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="artCuadro">
                <div class="artCentro">    
                    {notasBlog.items.map( nota =>{
                        console.log(nota)
                            return(
                                <div class="articulo" key={nota.sys.id}>
                                    <div class="artImg">
                                        <img src={nota.fields.imagenPrincipal.fields.file.url} alt=""/>
                                    </div>
                                    <div class="contArt">
                                        <h2>{nota.fields.title}</h2>
                                        <p>{nota.fields.slug}</p>
                                        <div class="botones">
                                            <Link to={'/nota/'+ nota.sys.id} class="detCat">Detalles</Link>
                                            <Link to="/contacto" class="contCat">Contacto</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}
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

export default Catalogo;