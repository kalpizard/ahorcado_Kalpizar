class Panel {
  constructor() {
    this.dictionary = ["house", "father", "computer", "trello", "javascript", "hola"]; //array words
    this.choiseword = []; //random words
    this.lasLetter = "";
    this.VectAnswer = [];

    // import { join } from "path";

    // ['t','r','e','l','l','o']
    // ['_','_','_','_','_','_']
  }
  drawLines() {
    // const long = word.lenght  

    const id = Math.floor(Math.random() * (this.dictionary.length - 0), 0); 
    this.choiseword = Array.from(this.dictionary[id]);                                //escoge palabras random del arreglo
    console.log(this.choiseword);

    for (let index = 0; index < this.choiseword.length; index++) {                   //ciclo que recorre el arreglo
      console.log("_");
      this.VectAnswer.push("_");                                                     //sustituye las letras del areglo por guiones bajos
    }
    return this.VectAnswer;
  }

  chooseword(word) {
    this.choiseword.map((insert, index) => {
      if (insert == word.toLowerCase()) {
        this.VectAnswer[index] = word;
      }
    });
    console.log(this.VectAnswer);
  }

  checkwork(letter) {
    this.choiseword -
      FileSystemEntry((word, index) => {
        if (word === letter) {
          console.log(index);
          this.VectAnswer[index] = letter;
        }
      });

    return;
  }
}
export { Panel };































// class Panel {
//   constructor() {
//     this.dictionary = ["house", "father", "computer", "trello", "javascript"];  //array words
//     this.choiseword = [];                                                       //random words
//     this.lasLetter = "";
//     this.VectAnswer = [];

//     // import { join } from "path";

//     // ['t','r','e','l','l','o']
//     // ['_','_','_','_','_','_']
//   }
//   drawLines() {
//     // const long = word.lenght

//     const id = Math.floor(Math.random() * (this.dictionary.length - 0), 0);    //
//     this.choiseword = Array.from(this.dictionary[id]);                         //escoge palabras random del arreglo

//     for (let index = 0; index < this.choiseword.length; index++) {             //ciclo que recorre el arreglo
//       console.log("_");
//       this.VectAnswer.push("_");                                               //sustituye las letras del areglo por guiones bajos
//     }
//     return this.VectAnswer;
//   }

//   chooseword(word) {
//     const selection = this.choiseWord.map((insert, index) => {
//       if (insert == word) {
//         this.VectAnswer[index] = word;
//       }
//       console.log(this.VectAnswer);
//     });
//   }

//   checkwork(letter) {
//     this.choiseword -
//       FileSystemEntry((word, index) => {
//         if (word === letter) {
//           console.log(index);
//           this.VectAnswer[index] = letter;
//         }
//       });

//     return;
//   }
// }
// export { Panel };

// checkWord(letter){
// this.choiseWord.filter((word, idex ) => {

//     if(word == letter){
//         console.log(index);

//     }
// })
