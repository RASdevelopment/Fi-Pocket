import React from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import Ill1 from '../img/ILL1-NoNet.svg';
import { Saludo, Aleatorio } from "../components/News/Consejo";

function News() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="box">
          <Saludo />
          <br />
          {/* <h3>Inicia sesión para acceder a todas las funciones</h3> */}
          <h4>Consejo del día:</h4>
          <Aleatorio />
        </div>
        <div className="box">
          <h1>Noticias</h1>
          <span><h3>Facultad de Ingeniería</h3></span>
          <div>
            <div className="fb-page" data-href="https://www.facebook.com/ingenieria.uady.mx/?locale=es_LA" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/ingenieria.uady.mx/?locale=es_LA" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ingenieria.uady.mx/?locale=es_LA">Facultad de Ingeniería - UADY</a></blockquote></div>
          </div>
          <div className="NoNetElementHide">
            <h3>Conéctate a Internet para ver los feeds de noticias</h3>
            <img src={Ill1} alt="Sin Conexión" className="heroIl" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default News;
