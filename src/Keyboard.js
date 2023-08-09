class Keyboard {
  constructor() {
    this.keys = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","Ñ","O","P","Q","R","S","T","V","W","X","Y","Z",
    ];
    this.keys2 = this.keys.map((key, index) => {  //hace un mapeo de cada elemento del arreglo 
      return {
        id: index + 1, //parametro index
        letter: key,   //parametro key 
        state: false,  // estado default 
      };
    });
  }

  createKeyboard() {    //
    return this.keys2;
  }
}

export { Keyboard };






























//   }

//   drawKeyboard() {
//     this.keys.map((key) => {
//       console.log("[" + key + "]");
//     })
//   }

// shoeCorrect(letter) {
//     this.keys2.map(object =>{
//    if(object.letter == letter){
// object.state = true

//    }

//     });

// }

// }
// export {keyboard}

// // const App = new keyboard();
// // App.drawKeyboard(true);

// //console.log('[' + this.key + ']');

// console.log(App.shoeCorrect('A'));
// console.log(App.shoeCorrect('B'));




















// class Panel{
//     constructor(){
//         this.choiseword = ['c','o','c','i','n','a','r'];
//         this.lasLetter = '';
//         this.VectAnswer = [];

//     }
// }
// drawLines(word){
//     const long = word.lenght

//     for (let index = 0; index < long; index++){

//         console.log('_');
//     }

// }

// checkWord(letter){
// this.choiseWord.filter((word, idex ) => {

//     if(word == letter){
//         console.log(index);

//     }
// })

// }
