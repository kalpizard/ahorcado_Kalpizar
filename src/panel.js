class Panel {
  constructor() {
    this.dictionary = ["house", "father", "computer", "trello", "javascript"];
    this.choiseword = [];
    this.lasLetter = "";
    this.VectAnswer = [];

    // import { join } from "path";

    // ['t','r','e','l','l','o']
    // ['_','_','_','_','_','_']
  }
  drawLines() {
    // const long = word.lenght

    const id = Math.floor(Math.random() * (this.dictionary.length - 0), 0);
    this.choiseword = Array.from(this.dictionary[id]);

    for (let index = 0; index < this.choiseword.length; index++) {
      console.log("_");
      this.VectAnswer.push("_");
    }
    return this.VectAnswer;
  }

  chooseword(word) {
    const selection = this.choiseWord.map((insert, index) => {
      if (insert == word) {
        this.VectAnswer[index] = word;
      }
      console.log(this.VectAnswer);
    });
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
// checkWord(letter){
// this.choiseWord.filter((word, idex ) => {

//     if(word == letter){
//         console.log(index);

//     }
// })
