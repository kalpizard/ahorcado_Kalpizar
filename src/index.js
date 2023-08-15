//IMPORTACION DE ARCHIVOS LOCALES
import { Result } from "./resultclass.js"; //NUEVO
import { Keyboard } from "./Keyboard.js";
import clickBtn from "./events.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./BodyParts.js";
//SE CREAN LAS INSTANCIAS
const alerta = new Result(); //NUEVO
const App = new Keyboard(); //LLAMAMOS LA CLASE
const Panels = new Panel(); //LLAMAMOS LA CLASE
const Body = new BodyParts(); //LLAMAMOS LA CLASE
const vectorLetras = App.createKeyboard();
const vectorDeLineas = Panels.drawLines(); //GUARDAMOS EL VECTOR CON LNEAS
const keyboard = document.getElementById("keyboard");
const panel = document.getElementById("panel");
//INICIALIZACION DE LAS VARIABLES
let count = 0; //1
let counts = 0; //0
let turnos = 6; //TURNOS

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
      //SI LA LETRA COINCIDE
      if (isWinOrisDefeat) {
        //SI GANÓ EL JUEGO
        alert(alerta.showResult(isWinOrisDefeat)); //ALERTA DE VICTORIA DE INSTANCIA.METODO
      }
    } else {
      if (turnos == 0) {
        //NO MÁS INTENTOS
        img.src = Body.nextImage(6); //RESULTADO = INSTANCIA.METODO
        turn.textContent = 0; //AL TERMINAR SE ESTABLECE EN 0
        alert(alerta.showResult(verifica)); //ALERTA NO QUEDAN MAS TURNOS
      } else {
        turn.textContent = turnos; //TURNOS RESTANTES
        turnos--; //REDUCE LO TURNOS
        img.src = Body.nextImage(count);
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
