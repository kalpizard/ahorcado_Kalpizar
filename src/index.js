// Este archivo deberá ser llamado desde el archivo index.html y se encontrará en la carpeta src antes creada
// Actividad

import { Keyboard } from "./Keyboard.js";
import clickBtn from "./events.js";
import { Panel } from "./panel.js";
// import { resultclass } from "./resultclass.js";

const App = new Keyboard();
const Panels = new Panel();

const vectorLetras = App.createKeyboard();
const vectorDeLineas = Panels.drawLines();


const keyboard = document.getElementById("keyboard");
const panel = document.getElementById("panel");



// vectorDeLineas.map( pan => {
//   const div = document.createElement('div');
//   const h3 = document.createElement('h3');
//   h3.textContent = pan;
//   div.appendChild(h3);
//   panel.appendChild(div)


// })




vectorDeLineas.map((pan) => {
  console.log(pan);
  const line = document.createElement("h2");
  line.textContent = pan;
  line.className = "divespacios";
  panel.appendChild(line);
});


vectorLetras.map((key) => {
  const btn = document.createElement("button"); //constante para el boton
  btn.textContent = key.letter; //contenido del boton
  btn.className = "divLetras"; //clase

  btn.addEventListener("click", clickBtn); //evento click

  keyboard.appendChild(btn); //boton dentro del keyboard
});

// const keyboard = document.getElementById('keyboard');

// vectorLetras.map(key => {

//     const div = document.createelement('div')
//     const div = document.createelement('div')

//     h3.texcontent = key.

// })
// console.log(App.createkeyboard());
