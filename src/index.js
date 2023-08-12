// Este archivo deberá ser llamado desde el archivo index.html y se encontrará en la carpeta src antes creada
// Actividad

import { Keyboard } from "./Keyboard.js";
import clickBtn from "./events.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./BodyParts.js";

const App = new Keyboard(); //llamamos la clase
const Panels = new Panel(); //llamamos la clase
const Body = new BodyParts(); //llamamos la clase
let count = 1;
let counts = 0;
// let turnos = 7;

const vectorLetras = App.createKeyboard();
const vectorDeLineas = Panels.drawLines(); //guardams el vector con lineas

const keyboard = document.getElementById("keyboard");
const panel = document.getElementById("panel");

vectorDeLineas.map((pan) => {
  //recorremos linea por linea del vector pan
  console.log(pan);
  const line = document.createElement("h2");
  line.textContent = pan;
  line.className = "divespacios";
  panel.appendChild(line);
});

const img = document.getElementById("imgagenahorcado");

vectorLetras.map((key) => {
  //recorremos linea por linea
  const btn = document.createElement("button"); //constante para el boton
  btn.textContent = key.letter; //contenido del boton
  btn.className = "divLetras"; //clase

  btn.addEventListener("click", () => {
    Panels.chooseword(btn.textContent);
    panel.textContent = "";

    const verifica = Panels.checkwork(btn.textContent, counts);
    if (verifica) {
      // counts++;
    } else {
      img.src = Body.nextImage(count);
      count++;
      // turnos--;
      // if(turnos == 0){

      // }
    }

    vectorDeLineas.map((pan) => {
      //recorremos linea por linea del vector panel
      console.log(pan);
      const line = document.createElement("h2");
      line.textContent = pan;
      line.className = "divespacios";
      panel.appendChild(line);
    });
  }); //evento click

  keyboard.appendChild(btn); //boton dentro del keyboard
});
