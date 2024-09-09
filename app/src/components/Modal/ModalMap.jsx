import React from "react";
import ZoomableBuilding from "../ZoomableMap/ZoomableBuilding";
import { ListaMapaData } from "../../admin/ListaEdificios";

function ModalMap({ CerrarModal, buildingId, isClosing }) {

  function plantaAlta() {
    console.log("Planta Alta Activada");
    document.getElementById("buttonUp").classList.add("activeButton");
    document.getElementById("buttonDown").classList.remove("activeButton");
  }

  function plantaBaja() {
    console.log("Planta Baja Activada");
    document.getElementById("buttonUp").classList.remove("activeButton");
    document.getElementById("buttonDown").classList.add("activeButton");
  }

  function FindBuilding(idSearched) {
    return ListaMapaData.find(elemento => elemento.clave == idSearched);
  };

  const selectedBuilding = FindBuilding(buildingId)

  return (
    //   <div id="ModalMap">
    //     <div id="ModalMapHeader">
    //         <span className="Alt-h1">Título</span>
    //         <div id="FloorButtons">
    //             <button className="icon-down-square-arrow iconButton"></button>
    //             <button className="icon-up-square-arrow closerButton iconButton"></button>
    //         </div>
    //     </div>
    //     <ul>
    //         <li>Ola1</li>
    //         <li>Ola2</li>
    //         <li>Ola3</li>
    //     </ul>
    //   </div>

    <div className={`MainModal ${isClosing ? 'modal-exit' : 'modal-enter'}`}>
        <div className="ModalHeader">
            <h1>{selectedBuilding.nombre}</h1>
            <button onClick={CerrarModal}><span className="icon-xmark"></span></button>
        </div>
        <div id="BuildingBox" className="box">
          <ZoomableBuilding/>
        </div>
        {/* <h2>
            {'(ElementList.recursos.length) ? "Recursos" : ""'}
        </h2> */}
        {(selectedBuilding.ubicaciones.length) ? (<ul className="SwitchList"><li><button onClick={() => {plantaAlta()}} className="ButtonUpDown" id="buttonUp"><span className="icon-up-square-arrow"></span>Planta Alta</button></li><li><button onClick={() => {plantaBaja()}} id="buttonDown" className="ButtonUpDown activeButton"><span className="icon-down-square-arrow"></span>Planta Baja</button></li></ul>) : ""}
        <ul className="ubiList">
          {
            selectedBuilding.ubicaciones[0].map( (element) => {
              return <button className="ButtonList" onClick={() => {console.log(element.nombre)}}><li key={element.id} className="elementList"><span className="iconList">{element.ubicacion}</span><span className="text">{element.nombre}</span></li></button>
            })
          }
            {/* {ElementList.recursos.map((element) => {
                return <a href={element.fuente} target="_blank" rel="noopener noreferrer" key={element.id}><li className="elementList"><span className="iconList icon-file"></span><span className="text">{element.titulo}</span><span className="icon-download"></span></li></a>
            })} */}
        </ul>
      </div>
  );
}

export default ModalMap;