const contPuntaje = document.querySelector(".contenedor-puntaje");
const tablero = document.querySelector(".tablero");
const boton15 = document.getElementById(15);
const boton30 = document.getElementById(30);
const seGano = document.querySelector(".contenedor-seGano");
const btnSeGano = document.querySelector(".seGano button");
const nosotrosBuenas = document.querySelector(".nosotros-buenas");
const ellosBuenas = document.querySelector(".ellos-buenas");
const tituloMalas = document.querySelector(".titulo-malas");
const tituloBuenas = document.querySelector(".titulo-buenas");
const btnAtras = document.querySelector('.btn-atras');

let seJuega15 = false;
let seJuega30 = false;

let puntosNosotros = 0;
let puntosEllos = 0;
let puntosCajaNosotros = 0;
let puntosCajaEllos = 0;
let ganador = false;
let entroBuenas = false;

btnAtras.addEventListener('click', ()=> {
  location.reload(); 
})

// determina si la partida se juega a 15 puntos o a 30

const cantidadDePuntos = () => {
  boton15.addEventListener("click", (e) => {
    contPuntaje.style.display = "none";
    tablero.style.display = "flex";
    btnAtras.style.display = 'inline';
    seJuega15 = true;
  });

  boton30.addEventListener("click", (e) => {
    contPuntaje.style.display = "none";
    tablero.style.display = "flex";
    seJuega30 = true;
    tituloMalas.style.color = "#575757";
    btnAtras.style.display = 'inline';
  });
};

// al hacer click en sumar punto se pinta la caja segun cuantos puntos va

const pintarCaja = (quien, puntos, nosotros) => {
  nosotros ? puntosCajaNosotros++ : puntosCajaEllos++;
  nosotros ? (puntosCaja = puntosCajaNosotros) : (puntosCaja = puntosCajaEllos);

  document.querySelectorAll(quien).forEach((caja) => {
    if (
      (caja.id == 1 && puntos >= 0) ||
      (caja.id == 2 && puntos > 5) ||
      (caja.id == 3 && puntos > 10) ||
      (caja.id == 4 && puntos > 15) ||
      (caja.id == 5 && puntos > 20) ||
      (caja.id == 6 && puntos > 25)
    ) {
      switch (puntosCaja) {
        case 1:
          caja.classList.add("border-top");
          break;
        case 2:
          caja.classList.add("border-right");
          break;
        case 3:
          caja.classList.add("border-bottom");
          break;
        case 4:
          caja.classList.add("border-left");
          break;
        case 5:
          caja.firstElementChild.classList.add("border-center");
          nosotros ? (puntosCajaNosotros = 0) : (puntosCajaEllos = 0);
          break;
      }
    }
  });
};

// se despinta la caja al hacer click en restar punto

const despintarCaja = (quien, puntos, nosotros) => {
  nosotros ? puntosCajaNosotros-- : puntosCajaEllos--;
  if (puntosCajaNosotros == -1) {
    puntosCajaNosotros = 4;
  }
  if (puntosCajaEllos == -1) {
    puntosCajaEllos = 4;
  }
  nosotros ? (puntosCaja = puntosCajaNosotros) : (puntosCaja = puntosCajaEllos);

  document.querySelectorAll(quien).forEach((caja) => {
    if (
      (caja.id == 1 && puntos < 5) ||
      (caja.id == 2 && puntos >= 5 && puntos < 10) ||
      (caja.id == 3 && puntos >= 10 && puntos < 15) ||
      (caja.id == 4 && puntos >= 15 && puntos < 20) ||
      (caja.id == 5 && puntos >= 20 && puntos < 25) ||
      (caja.id == 6 && puntos >= 25 && puntos < 30)
    ) {
      switch (puntosCaja + 1) {
        case 1:
          caja.classList.remove("border-top");
          break;
        case 2:
          caja.classList.remove("border-right");
          break;
        case 3:
          caja.classList.remove("border-bottom");
          break;
        case 4:
          caja.classList.remove("border-left");
          break;
        case 5:
          caja.firstElementChild.classList.remove("border-center");
          break;
      }
    }
  });
};

// se suman los puntos de nosotros

const sumarNosotros = () => {
  document.querySelector(".sumar-nosotros").addEventListener("click", (e) => {
    puntosNosotros++;
    ganar(puntosNosotros, true);
    pintarCaja(".nosotros .caja", puntosNosotros, true);
    tableroBuenas();
  });
};

//se restan los puntos de nosotros

const restarNosotros = () => {
  document.querySelector(".restar-nosotros").addEventListener("click", (e) => {
    if (puntosNosotros > 0) {
      puntosNosotros--;
      despintarCaja(".nosotros .caja", puntosNosotros, true);
    }
  });
};

// se suman los puntos de ellos

const sumarEllos = () => {
  document.querySelector(".sumar-ellos").addEventListener("click", (e) => {
    puntosEllos++;
    ganar(puntosEllos, false);
    pintarCaja(".ellos .caja", puntosEllos, false);
    tableroBuenas();
  });
};

// se restan los puntos de ellos

const restarEllos = () => {
  document.querySelector(".restar-ellos").addEventListener("click", (e) => {
    if (puntosEllos > 0) {
      puntosEllos--;
      despintarCaja(".ellos .caja", puntosEllos, false);
    }
  });
};

// determina si se gano la partida

const ganar = (puntos, nosotros) => {
  if (seJuega15) {
    if (puntos == 15) {
      const p = document.querySelector(".seGano p");
      ganador = true;
      seGano.style.display = "flex";
      p.innerHTML = `${nosotros ? "Ganamos nosotros" : "Ganaron ellos"} ${
        nosotros ? puntosNosotros : puntosEllos
      } a ${!nosotros ? puntosNosotros : puntosEllos}`;
      btnAtras.style.display = 'none';
    }
  }
  if (seJuega30) {
    if (puntos == 30) {
      const p = document.querySelector(".seGano p");
      ganador = true;
      seGano.style.display = "flex";
      p.innerHTML = `${nosotros ? "Ganamos nosotros" : "Ganaron ellos"} ${
        nosotros ? puntosNosotros : puntosEllos
      } a ${!nosotros ? puntosNosotros : puntosEllos}`;
      btnAtras.style.display = 'none';
    }
  }
};

const reiniciar = () => {
  btnSeGano.addEventListener("click", (e) => {
    location.reload();
  });
};

// si se juega a 30 puntos y se pasan los 15 puntos agrega el tablero de buenas

const tableroBuenas = () => {
  if (
    seJuega30 === true &&
    (puntosNosotros >= 15 || puntosEllos >= 15) &&
    entroBuenas === false
  ) {
    tituloBuenas.style.color = "#575757";
    entroBuenas = true;
    for (i = 4; i <= 6; i++) {
      console.log("entro");
      const caja = document.createElement("div");
      const div = document.createElement("div");
      caja.id = i;
      caja.classList.add("caja");
      caja.appendChild(div);
      nosotrosBuenas.appendChild(caja);
    }

    for (i = 4; i <= 6; i++) {
      console.log("entro");
      const caja = document.createElement("div");
      const div = document.createElement("div");
      caja.id = i;
      caja.classList.add("caja");
      caja.appendChild(div);
      ellosBuenas.appendChild(caja);
    }
  }
};

// funcion que ejecuta todo

const god = () => {
  cantidadDePuntos();
  sumarNosotros();
  restarNosotros();
  sumarEllos();
  restarEllos();
  reiniciar();
};

god();
