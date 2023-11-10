import React from "react";
import { Link } from "react-router-dom";

function Docs() {
    return(
        <ul>
            <li>
                <Link to="/uno">
                Tramite de Baja de Asignatura
                </Link>
            </li>
            <li>
                <Link to="/dos">
                Solicitud de Copia de Certificado de Bachillerato
                </Link>
            </li>
            <li>
                <Link to="/tres">
                Trámite de Asignatura Optativa (Interna)
                </Link>
            </li>
            <li>
                <Link to="/cuatro">
                Formatos de Entrega de Documentos (Inscripción)
                </Link>
            </li>
        </ul>
    )

};

export default Docs