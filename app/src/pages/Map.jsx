import React from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import MapImag from '../img/Mapa.svg';
import ZoomableImage from "../components/ZoomableMap/ZoomableMap";

function Map() {
  return (
    <div>
      <Header />
      <div class="content">
        <div id="ModalMap">
          Ola
        </div>
        <h1>Mapa</h1>
        <div id="MapBox" className="box">
          <ZoomableImage/>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Map;