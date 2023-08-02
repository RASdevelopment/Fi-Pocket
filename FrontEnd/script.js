// VARIABLES PARA EL EFECTO CARRUSEL:

let current = 1;
let imagenes = new Array();
let numImages = 6;

//  CÓDIGO PARA GESTOS TÁCTILES DEL CARRUSEL

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

let zoneTouched = document.querySelector("main");

zoneTouched.addEventListener("touchstart", function (event) {
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
});

zoneTouched.addEventListener("touchend", function (event) {
  touchEndX = event.changedTouches[0].screenX;
  touchEndY = event.changedTouches[0].screenY;

  Swipping();
});

function Swipping() {
  // alert(touchEndX-touchStartX);

  if (
    touchEndX > touchStartX &&
    touchEndX !== touchStartX &&
    Math.abs(touchEndX - touchStartX) > 40
  ) {
    // alert("Swipe a la izquierda");
    if (current > 1) {
      current = current - 1;
    }
    // else {
    //     current = numImages - 1;
    // }

    $(".carrusel").animate(
      { left: -$("#pagina_" + current).position().left },
      350
    );

    DetectPag();

    return false;
  } else if (
    touchEndX < touchStartX &&
    touchEndX !== touchStartX &&
    Math.abs(touchEndX - touchStartX) > 40
  ) {
    // alert("Swipe a la derecha");
    if (numImages > current + 1) {
      current = current + 1;
    }
    // else {
    //     current = 1;
    // }

    $(".carrusel").animate(
      { left: -$("#pagina_" + current).position().left },
      350
    );

    DetectPag();

    return false;
  }
}

// CÓDIGO PARA LOS BOTONES DEL CARRUSEL / CAMBIAR DE PÁGINA

function CambiarPag(ev, id) {
  ev.preventDefault();
  console.log("Testing");
  console.log("#pagina_" + id);
  $(".carrusel").animate({ left: -$("#pagina_" + id).position().left }, 350);
  current = id;
  DetectPag();
}

// PARA CAMBIAR DE COLOR LOS BOTONES

let Botones = document.querySelectorAll(".BtnCambPag");

function DetectPag() {
  Botones.forEach((element) => {
    element.style.color = "rgb(163, 163, 163)";
  });
  switch (parseInt(current)) {
    case 1:
      Botones[0].style.color = "var(--Institucional2)";
      break;

    case 2:
      Botones[1].style.color = "var(--Institucional2)";
      break;

    case 3:
      Botones[2].style.color = "var(--Institucional2)";
      break;

    case 4:
      Botones[3].style.color = "var(--Institucional2)";
      break;

    case 5:
      Botones[4].style.color = "var(--Institucional2)";
      break;

    default:
      break;
  }
}

//Para cargar el directorio de personas

let ListaPersonas = [];
let ListaElemPersonas = [];
let array;

AlcanzarPersonas();

function IdentificarSelec(e) {
  e.preventDefault();

  switch (current) {
    case 3:
      array = ListaPersonas;
      break;

    case 4:
      array = ListaTramites;
      break;

    default:
      break;
  }

  IDSelect = array.filter(function (objeto) {
    return objeto.id === parseInt(e.currentTarget.id.slice(5));
  });

  alert("Seleccionado: " + IDSelect[0].nombre);
}

function CargarPersonas() {
  document.getElementById("ContenedorDirec").innerHTML = "";

  ListaPersonas.forEach((element) => {
    document.getElementById(
      "ContenedorDirec"
    ).innerHTML += `<button class="ElemLista" id="Elem_${element.id}" onclick="IdentificarSelec(event)">
       <div>
           <img src="${element.img}" alt="" srcset="">
           <span>${element.nombre}</span>
       </div>
   </button>`;
  });
}

function AlcanzarPersonas() {
  fetch("Elements/JSON/Directorio.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (ListaRecibida) {
      ListaPersonas = ListaRecibida;

      ListaPersonas.sort(function (a, b) {
        var nombreA = a.nombre.toLowerCase();
        var nombreB = b.nombre.toLowerCase();
        if (nombreA < nombreB) {
          return -1;
        }
        if (nombreA > nombreB) {
          return 1;
        }
        return 0;
      });
      CargarPersonas();
      console.log("Lista de personas alcanzada.");
    })
    .catch(function (error) {
      alert("(Extracción Fallida)");
      console.error("Fetch fallido");
    });
}

function MostrarBusqueda(e) {
  e.preventDefault();

  document.getElementById("Busqueda").classList.toggle("Oculto");
}

function Filtrar() {
  ListaFiltrada = ListaPersonas.filter(function (objeto) {
    return objeto.nombre
      .toLowerCase()
      .includes(document.getElementById("InputFiltro").value.toLowerCase());
  });

  document.getElementById("ContenedorDirec").innerHTML = "";

  ListaFiltrada.forEach((element) => {
    document.getElementById(
      "ContenedorDirec"
    ).innerHTML += `<button class="ElemLista" id="Elem_${element.id}" onclick="IdentificarSelec(event)">
            <div>
            <img src="${element.img}" alt="" srcset="">
            <span>${element.nombre}</span>
            </div>
            </button>`;
  });
}

// PARA LA SECCIÓN DE DOCUMENTOS

var ListaTramites = [];

AlcanzarTramites();

function AlcanzarTramites() {
  fetch("Elements/JSON/Documentacion.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (ListaRecibida2) {
      ListaTramites = ListaRecibida2;

      ListaTramites.sort(function (a, b) {
        var nombreA = a.nombre.toLowerCase();
        var nombreB = b.nombre.toLowerCase();
        if (nombreA < nombreB) {
          return -1;
        }
        if (nombreA > nombreB) {
          return 1;
        }
        return 0;
      });
      CargarTramites();
      console.log("Lista de trámites alcanzada.");
    })
    .catch(function (error) {
      alert("(Extracción Fallida: Trámites)");
      console.error("Fetch fallido: Trámites");
    });
}

function CargarTramites() {
  document.getElementById("ContenedorTramites").innerHTML = "";

  ListaTramites.forEach((element) => {
    document.getElementById(
      "ContenedorTramites"
    ).innerHTML += `<button class="ElemLista" id="Elem_${element.id}" onclick="IdentificarSelec(event)">
       <div>
           <span>${element.nombre}</span>
       </div>
   </button>`;
  });
}

$(".BtnCambPag").click(function (e) {
  e.preventDefault();
  let id = $(this).attr("id");
  CambiarPag(e, id);
  console.log(id);
});

onclick = "CambiarPag(event,1)";
style = "color: var(--Institucional2)";

  setTimeout(() => {
    document.getElementById("activated").classList.add("active");
  }, 500);