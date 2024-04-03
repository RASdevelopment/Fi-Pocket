import React, {useState} from "react";
import ModalArchive from "../Modal/ModalArchive";
import { ListaArchivoData } from "../../admin/ListaArchivo";

function Listas({ searchTerm }) {
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

    const ListaOrdenada = ListaArchivoData.sort((a, b) => {
        if (a.titulo < b.titulo) {
          return -1;
        }
        if (a.titulo > b.titulo) {
          return 1;
        }
        return 0;
      });

    const FilteredList = ListaOrdenada.filter(element =>
        element.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return(
        <ul className="MainList">
            {
                FilteredList.map((element) => {
                    return <button className="ButtonList" onClick={() => {AbrirModal(element)}}><li key={element.id} className="elementList"><span className="iconList icon-file"></span><span className="text">{element.titulo}</span></li></button>
                })
            }
            {IsModalOpen && <ModalArchive CerrarModal={CerrarModal} ElementList={ElementSended} IsClosing={IsClosing}/>}
        </ul>
    )
};

export default Listas