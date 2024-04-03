import React from "react";

function ModalArchive({ CerrarModal, ElementList, isClosing }) {
  return (
      <div className={`MainModal ${isClosing ? 'modal-exit' : 'modal-enter'}`}>
        <div className="ModalHeader">
            <h1>{ElementList.titulo}</h1>
            <button onClick={CerrarModal}><span className="icon-xmark"></span></button>
        </div>
        {ElementList.descripcion}
        <h2>
            {(ElementList.recursos.length) ? "Recursos" : ""}
        </h2>
        <ul>
            {ElementList.recursos.map((element) => {
                return <a href={element.fuente} target="_blank" rel="noopener noreferrer" key={element.id}><li className="elementList"><span className="iconList icon-file"></span><span className="text">{element.titulo}</span><span className="icon-download"></span></li></a>
            })}
        </ul>
      </div>
  );
}

export default ModalArchive;