class Result{

    constructor(){
        this.message = "volver a empezar";
    }

    showResult(valor){

        if(valor == true){
           return this.message = 'Victoria'

        } else {
          return this.message = 'perdiste'
        }
    }


}

const App = new Result();
appendFile.showResult(true);




export { BodyParts };