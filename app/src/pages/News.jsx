import React, { useEffect, useState } from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import Ill1 from '../img/ILL1-NoNet.svg';
import { Saludo, Aleatorio } from "../components/News/Consejo";
import CarrFeeds from '../components/News/CarrFeeds';
import { PaginasNoticiasData } from "../admin/PaginasNoticias";
import { CheckConnection } from "../components/CheckConnection/CheckConnection";

var flag = true;
var ActualIndex = 0;

function News() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const IntervalChange = setInterval(() => {
          if (flag) {
              ScrollToFeed("sig");
          }
      }, 10000);

      const listPages = document.querySelectorAll(".Page");
      listPages[currentIndex].scrollIntoView({
          behavior: "smooth",
          align: {
              lockY: true
          }
      });

      return () => {
          clearInterval(IntervalChange);
      }
  },[currentIndex, ScrollToFeed]);

  function ScrollToFeed(direction) {
      if (direction === "sig") {
          if (currentIndex < 2) {
              setCurrentIndex(currentIndex + 1);
              ActualIndex++;
          } else {
              setCurrentIndex(0);
              ActualIndex = 0;
          }
      } else {
          if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
              ActualIndex--;
          } else {
              setCurrentIndex(2);
              ActualIndex = 2;
          }
      }

      document.getElementById("NombreFuenteNoticia").innerHTML = PaginasNoticiasData[ActualIndex].Nombre;
  }

  CheckConnection();

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
        <div className="box" id="boxNoticias">
          <div id="CabeceraNews">
            <div>
              <h1>Noticias</h1>
              <h3 id="NombreFuenteNoticia" className="NetSwitchable">{PaginasNoticiasData[0].Nombre}</h3>
            </div>
            <div className="NetSwitchable">
              <button className='NavCarr' onClick={(event) => {ScrollToFeed(); flag = false;}}> <b className='icon-left-arrow'></b> </button>
              <button className='NavCarr' onClick={() => {ScrollToFeed("sig"); flag = false;}}> <b className='icon-right-arrow UIicon0'></b> </button>
            </div>
          </div>
          <CarrFeeds />
          <div id="LoaderNews" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          <div className="NoNetElementHide NetSwitchable">
            <img src={Ill1} alt="Sin Conexión" className="heroIl" />
            <h3>Conéctate a Internet para ver los feeds de noticias</h3>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default News;
