import { BodyParts } from "./BodyParts.js";
import { Keyboard } from "./Keyboard.js";

const App = new Keyboard();
const vectorLetras = App.createKeyboard();
const keyboard = document.getElementById("keyboard");

vectorLetras.map((key) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = key.letter;
  div.classList = "divLetras";

  div.appendChild(h3);
  keyboard.appendChild(div);
});

// const keyboard = document.getElementById('keyboard');

// vectorLetras.map(key => {

//     const div = document.createelement('div')
//     const div = document.createelement('div')

//     h3.texcontent = key.

// })
// console.log(App.createkeyboard());
