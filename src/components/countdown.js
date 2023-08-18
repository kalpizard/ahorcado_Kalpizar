const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownElement = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownElement.innerHTML = `${minutes}:${seconds}`;

  console.log(seconds);

  time--;

  if(updateCountdown == 120)
  temprueba == "0:00"

}

// export{updateCountdown};
