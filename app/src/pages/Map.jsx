import React, {useState, useEffect} from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import ZoomableImage from "../components/ZoomableMap/ZoomableMap";
import ModalMap from "../components/Modal/ModalMap";

function Map() {
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [ElementSended, setElementSended] = useState(null);
  const [IsClosing, setIsClosing] = useState(true);

    const AbrirModal = (element) => {
        setElementSended(element);
        setIsModalOpen(true);
        setIsClosing(false);
    }

    const CerrarModal = () => {
        document.getElementsByClassName("MainModal")[0].classList.remove("modal-enter");
        document.getElementsByClassName("MainModal")[0].classList.add("modal-exit");
        setTimeout(() => {
            setIsModalOpen(false);
        }, 290);
        setIsClosing(true);
    }

    useEffect(function () {
      document.querySelectorAll(".EdificioMapa").forEach( element => {element.addEventListener("click", (e) => {AbrirModal(e.target.id)})})
    },[]);

  return (
    <div>
      <Header />
      <div className="content">
        {/* <div id="ModalMap">
          Ola
        </div> */}
        {/* <ModalMap CerrarModal={CerrarModal()}/> */}
        {IsModalOpen && <ModalMap CerrarModal={CerrarModal} buildingId={ElementSended} IsClosing={IsClosing}/>}
        <h1 onClick={() => {AbrirModal("TitulodePrueba")}}>Mapa</h1>
        <div id="MapBox" className="box">
          <ZoomableImage/>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Map;