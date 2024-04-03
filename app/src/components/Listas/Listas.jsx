import React from "react";
import { ListaDirectorioData } from "../../admin/ListaDirectorio";

function Listas({ searchTerm }) {
    const ListaOrdenada = ListaDirectorioData.sort((a, b) => {
        if (a.texto < b.texto) {
          return -1;
        }
        if (a.texto > b.texto) {
          return 1;
        }
        return 0;
      });

    const FilteredList = ListaOrdenada.filter(element =>
        element.texto.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return(
        <ul className="MainList">
            {
                FilteredList.map((element) => {
                    if (element.tipo === 1) {
                        return <button className="ButtonList" onClick={() => {console.log(element.texto)}}><li key={element.id} className="elementList"><span className="iconList icon-user"></span><span className="text">{element.texto}</span></li></button>
                    } else {
                        return <button className="ButtonList" onClick={() => {console.log(element.texto)}}><li key={element.id} className="elementList"><span className="iconList icon-location-pin"></span><span className="text">{element.texto}</span></li></button>
                    }
                })
            }
        </ul>
    )
};

export default Listas