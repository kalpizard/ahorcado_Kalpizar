// const { buffer } = require("stream/consumers");

// Crea en la carpeta src una Clase BodyParts.

// Esta clase deberá tener  como propiedad un arreglo de
//  imagenes(Las imagenes que ya agregaste en uno de los 
//   tiquetes anteriores).
// Además deberá tener una función encargada de actualizar 
// la imagen según los intentos que vayan quedando.

class BodyParts { //BodyParts class
  constructor() {  //BodyParts constructor 
    this.VectImages = [
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
    return this.VectImages[num];
  }
}

export { BodyParts };































// const photos = document.getElementById('');
// Console.log();
// const newBodyParts = new BodyParts();

// const img = document.createElement('');
// img.classList = ''
// let conta = 0; 



// const photos = document.getElementById('photos');

// const newBodyParts = new BodyParts();

// const button = document.createElement('button');
// button.textContent = 'siguiente';
// const img = document.createElement('img');

// photos.appendChild(button);
// let conta = 0;

// button.addEventListener('click', function(){

//     img.src = newBodyParts.nexImage();
//     photos.appendChild(img)
//     conta++;

// })