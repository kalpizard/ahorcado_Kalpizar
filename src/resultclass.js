class Result{

    constructor(){
        this.message = "volver a empezar";
    }

    showResult(valor){

        if(valor == true){
           return this.message = 'Victoria'

        } else {
          return this.message = 'Perdiste, Vuelve a intertarlo'
        }
    }
}

export { Result };