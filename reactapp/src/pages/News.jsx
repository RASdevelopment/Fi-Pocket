import React from "react";
import Header from '../components/header.jsx';
import Navbar from '../components/navbar.jsx';

function News() {
  return (
    <div>
      <Header />
      <h1>News</h1>
      <p><n>Nota:</n> Para usar <i><n>yarn start</n></i>, debes invocarla estando en el directorio de la carpeta "reactapp"</p>
      <Navbar />
    </div>
  );
}

export default News;
