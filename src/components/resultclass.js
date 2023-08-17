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



//     reinicio(){
//    document.getElementById('verifica').textContent='you lose'

//    var button =document.createElement('button');
//     button.type= 'button'; 
//     button.innerHTML='Try Again'; 
//     button.className='try';
//      var container =document.getElementById('gameover'); 
//      container.appendChild(button); 
//      button.addEventListener("click",function (){ 
//         location.reload()
//     });


//     }