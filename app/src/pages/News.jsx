import React from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import Ill1 from '../img/ILL1-NoNet.svg';

function News() {
  return (
    <div>
      <Header />
      <div class="content">
        <div class="box">
          <h2>¡Hola!</h2>
          <br />
          {/* <h3>Inicia sesión para acceder a todas las funciones</h3> */}
          <h4>Consejo del día:</h4>
          <p class="advice">Persiste en el aprendizaje constante y busca oportunidades para aplicar tus conocimientos en proyectos reales</p>
        </div>
        <div class="box">
          <h1>Noticias</h1>
          <h3>Conéctate a Internet para ver los feeds de noticias</h3>
          <img src={Ill1} alt="Sin Conexión" class="heroIl" />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default News;
