//IMPORTACION DE ARCHIVOS LOCALES
import { Result } from "./components/resultclass.js"; //NUEVO
import { Keyboard } from "./components/Keyboard.js";
import clickBtn from "./components/events.js";
import { Panel } from "./components/panel.js";
import { BodyParts } from "./components/BodyParts.js";
import { Pokemon } from "./api/index.js"; //POKEMON
// import { updateCountdown } from "./components/countdown.js";
//SE CREAN LAS INSTANCIAS
const pokemones = new Pokemon(); //POKEMON
const alerta = new Result(); //NUEVO
const App = new Keyboard(); //LLAMAMOS LA CLASE
const Panels = new Panel(); //LLAMAMOS LA CLASE
const Body = new BodyParts(); //LLAMAMOS LA CLASE
const vectorLetras = App.createKeyboard();
const vectorDeLineas = Panels.drawLines(); //GUARDAMOS EL VECTOR CON LNEAS
const keyboard = document.getElementById("keyboard");
const panel = document.getElementById("panel");
const pista = document.getElementById("pista"); //POKEMON NUEVO
//INICIALIZACION DE LAS VARIABLES
let count = 0; //1
let counts = 0; //0
let turnos = 6; //TURNOS
//POKEMON
async function recolecta() {
  const espera = await pokemones.obtenerDatosAwait();
  console.log(espera.name);
  console.log(Panels.nombrePokemon(espera.name));
  const div = document.createElement("div");
  const imgs = document.createElement("img");
  imgs.classList = "tamaño";
  imgs.id = "pokemonimg";
  imgs.src = espera.sprites["front_default"];
  pista.appendChild(imgs);
  const vectorDeLineas = Panels.drawLines(); //GUARDAMOS EL VECTOR CON LNEAS
  // recuperamos.appendChild(img)
  vectorDeLineas.map((pan) => {
    //RECORRE LINEA POR LINEA DEL VECTOR PAN
    const line = document.createElement("h2"); //CREA ELEMENTO H2
    line.textContent = pan; //MUESTRA LAS LINEAS
    line.className = "divespacios";
    panel.appendChild(line);
  });
  const img = document.getElementById("imgagenahorcado");
  const turn = document.getElementById("turnos");
  vectorLetras.map((key) => {
    //RECORRE EL VECTOR LETRAS
    const btn = document.createElement("button"); ////CONSTANTE PARA EL BOTON
    btn.textContent = key.letter; //contenido del boton
    btn.className = "divLetras"; //clase
    btn.addEventListener("click", () => {
      //EVENTO CLICK EN CADA BOTON
      Panels.chooseword(btn.textContent); //INSTANCIA PANEL.METODO CHOOSEWORD(CONTENIDO BTN)
      panel.textContent = ""; //EVITAR DUPLICACIONES

      const verifica = Panels.checkwork(btn.textContent, counts); //RESULTADO = INSTANCIA.METODO(CONTENIDO BTN, ARGUMENTO)
      const isWinOrisDefeat = Panels.showifisWin(); //METODO = INSTANCIA.ALMACENA

      if (verifica) {
        btn.classList = "letter Correcta"; //verdeeeeeee

        if (isWinOrisDefeat ) {
          //SI GANÓ EL JUEGO
          alert(alerta.showResult(isWinOrisDefeat)); //ALERTA DE VICTORIA DE INSTANCIA.METODO
        }
      } else {
        btn.classList = "letter Incorrecta";
        if (turnos == 0) {
          //NO MÁS INTENTOS
          // img.src = Body.nextImage(6); //RESULTADO = INSTANCIA.METODO
          turn.textContent = 0; //AL TERMINAR SE ESTABLECE EN 0
          //alert(alerta.showResult(verifica)); //ALERTA NO QUEDAN MAS TURNOS
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        } else {
          turn.textContent = turnos; //TURNOS RESTANTES
          turnos--; //REDUCE LO TURNOS
          // img.src = Body.nextImage(count);
          count++; //CONTADOR DE IMAGENES AUMENTA
        }
      }
      vectorDeLineas.map((pan) => {
        //RECORRE LINEA POR LINEA DEL VECTOR PANEL
        const line = document.createElement("h2"); //CREA ELEMENTO H2 Y LO ALMACENA EN LINE
        line.textContent = pan; //LINEA DE LETRAS POR ADIVINAR
        line.className = "divespacios"; //PARA CSS
        panel.appendChild(line); //ACTUALIZA EL PANEL
      });
    }); //evento click

    keyboard.appendChild(btn); //BOTON DENTRO DE KEYBOARD
  });
}

recolecta();

const botonpista = document.getElementById("botonpista");

botonpista.addEventListener("click", function () {
  const pokemon = document.getElementById("pokemonimg");
  console.log(pokemon);
  pokemon.classList = "showPokemon";
});


const reset = document.getElementById('reset');

reset.addEventListener('click', function() {
    location.reload();
});