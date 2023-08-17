class Panel {
  constructor() {
    this.dictionary = [
      //ALMACENA IMAGENES
      "house",
      "father",
      "computer",
      "trello",
      "javascript",
      "hola",
    ];
    this.choiseword = []; //ALMACENA LA RANDOM WORD
    this.lasLetter = ""; //STREAM VACIO
    this.VectAnswer = []; //VECTOR
    // ['t','r','e','l','l','o']
    // ['_','_','_','_','_','_']
  }

//POKEMON
nombrePokemon(nombre){
  return  this.choiseword = Array.from(nombre); //ARRAY DE LETRAS(DE DICCIONARY[INDEX]);



}



  //LINES _ _ _ _ _
  drawLines() {
    //METODO DE LA CLASE PANEL

    // const id = Math.floor(Math.random() * (this.dictionary.length - 1)); //(NUMERO ALEATORIO * DE DICCIONARY )
    // this.choiseword = Array.from(this.dictionary[id]); //ARRAY DE LETRAS(DE DICCIONARY[INDEX]);
    // console.log(this.choiseword);

    for (let index = 0; index < this.choiseword.length; index++) {
      //(INICIO 0;  MENOR AL TAMAÑO DE PALABRA;  REPETICIONES)
      this.VectAnswer.push("_"); //SUSTITUYE LAS LETRAS DEL ARREGLO POR GUIONES BAJOS
    }
    return this.VectAnswer; //RESULTADO FINAL
  }

  //PINTA LA LETRA
  chooseword(word) {
    //FUNCION(PARAMETRO)
    this.choiseword.map((insert, index) => {
      //ARREGLO.METODO((VALOR ACTUAL,INDICE))
      if (insert == word.toLowerCase()) {
        //VALOR ACTUAL == VARIABLE.LETRAS MINUSCULAS
        this.VectAnswer[index] = word.toLowerCase(); //REVELA LA LETRA EN SU INDICE
      }
    });
  }

  //CHEQUEO DE LA PALABRA
  checkwork(letter, posi) {
    //FUNCION(LETRA, POSICION DE LETRA)
    for (let index = posi; index < this.choiseword.length; index++) {
      //(VALOR INICIAL ; TAMAÑO DE LA PALABRA; AUMENTA EN 1)
      if (this.choiseword[index] == letter.toLowerCase()) {
        //(CARACTER DE LA POSICION, LETRA MINUSCULA)
        return true; //LETRA ESTÁ EN LA PALABRA
      }
    }
  }

  //FUNCION GANÓ
  showifisWin() {
    let variable =
      JSON.stringify(this.choiseword) === JSON.stringify(this.VectAnswer);
    //PALABRA ELEGIDA == VECTOR DE RESPUESTA
    if (variable === true) {
      return true;
    } else {
      return false;
    }
  }
}

// choisePokemon(){

// }


export { Panel };
