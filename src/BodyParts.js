// const { buffer } = require("stream/consumers");

class BodyParts {
  constructor() {
    this.VectImages = [
      "../assets/images/1.png",
      "../assets/images/2.png",
      "../assets/images/3.png",
      "../assets/images/4.png",
      "../assets/images/5.png",
      "../assets/images/6.png",
      "../assets/images/7.png",
    ];
  }

  nextImage(num) {
    return this.VectImages[num];
  }
}

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

export { BodyParts };
