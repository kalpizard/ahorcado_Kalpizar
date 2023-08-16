class BodyParts {
  //CLASS
  constructor() {
    //METODO DEL CONSTRUCTOR
    this.VectImages = [
      //CREA.PROPIEDAD

      "../assets/images/1.png", // image 1
      "../assets/images/2.png", // image 2
      "../assets/images/3.png", // image 3
      "../assets/images/4.png", // image 4
      "../assets/images/5.png", // image 5
      "../assets/images/6.png", // image 6
      "../assets/images/7.png", // image 7
    ];
  }

  nextImage(num) {
    //METODO(ARGUMENTO)
    return this.VectImages[num]; //RETURN RUTE
  }
}

export { BodyParts }; //EXPORTADO
