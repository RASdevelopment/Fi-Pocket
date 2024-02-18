import React, { useEffect, useState } from "react";

export function Saludo() {
    const [saludoHora, mostrar] = useState("");

    useEffect(() => {
        function obtenerSaludo() {
            const hora = new Date().getHours();
            let saludoHora;
            
            if (hora >= 5 && hora < 12) {
                saludoHora = "¡Hola, buenos días!";
            } else if (hora >= 12 && hora < 18) {
                saludoHora = "¡Hola, buenas tardes!";
            } else {
                saludoHora = "¡Hola, buenas noches!";
            }

            mostrar(saludoHora);

        }

        obtenerSaludo();

    }, []);

    return (
        <h2 id="saludoMostrar">
            {saludoHora}
        </h2>
    );

}


const parrafos = [
    "Persiste en el aprendizaje constante y busca oportunidades para aplicar tus conocimientos en proyectos reales.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito. - Albert Schweitzer",
    "La disciplina te lleva donde la motivación no alcanza.",
    "La educación es el camino hacia el éxito en el futuro. El futuro pertenece a aquellos que se preparan para él hoy. - Malcolm X",
    "Con esfuerzo y preseverancia podrás alcanzar tus metas.",
    "La educación es el movimiento de la oscuridad a la luz. - Allan Bloom",
    "La educación es la llave maestra que abre las puertas a todas las oportunidades. - Ellen G. White",
    "Cambia tus pensamientos y cambiarás tu mundo.",
    "Si no persigues lo que quieres, nunca lo tendrás. Si no vas hacia adelante, siempre estarás en el mismo lugar."
]
export function Aleatorio() {
    const [actual, mostrar]= useState("");
    useEffect(() => {
        mostrarParrafo();
    },[]);
    const mostrarParrafo = () => {
        const list = Math.floor(Math.random() * parrafos.length);
        mostrar(parrafos[list]);
    };
    return (
        <p className="advice">{actual}</p>
    );
}




