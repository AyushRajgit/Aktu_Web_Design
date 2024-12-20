document.addEventListener("DOMContentLoaded", function () {

    const diceFace1 = Math.floor(Math.random() * 6) + 1;
    const diceFace2 = Math.floor(Math.random() * 6) + 1;
  
    document.querySelector(".img1").src = `./img/dice${diceFace1}.png`;
    document.querySelector(".img2").src = `./img/dice${diceFace2}.png`;
  
    const winnerText = document.querySelector(".Container h1");
    if (diceFace1 > diceFace2) {
      winnerText.innerText = "🎉 Player 1 Wins!";
      document.querySelector(".Faces .faces .win").src = `./img/dice${diceFace1}.png`;
    } else if (diceFace1 < diceFace2) {
      winnerText.innerText = "🎉 Player 2 Wins!";
      document.querySelector(".Faces .faces .win").src = `./img/dice${diceFace2}.png`;
    } else {
      winnerText.innerText = "🤝 It's a Draw!";
    }
  
  });