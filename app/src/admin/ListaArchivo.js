// En este archivo se ponen los datos de los archivos que se deseen enlistar en la sección "Archivo".
// Funciona como API. 
// La aplicación usará esta lista para dicha sección.

export const ListaArchivoData = [
    {
        id : 1,
        titulo : "Artículo de prueba",
        descripcion : "Primera prueba para la lista de archivos",
        recursos : [
            {
                id : 1,
                titulo : "Prueba en Word",
                fuente : "https://1drv.ms/w/s!AgQ68dqFN9EcbVsESKq27pr5NPA?e=P0bK3G"
            },
            {
                id : 2,
                titulo : "Prueba en PDF",
                fuente : "https://1drv.ms/b/s!AgQ68dqFN9Ecbu2ncpdamWtJMGw?e=BbbfWh"
            }
        ]
    }
];