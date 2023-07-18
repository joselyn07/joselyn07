let likes = document.getElementById("likes");
let nolike = document.getElementById("nolike");
let azul = document.getElementById("azul");
let escribe = document.getElementById("suscrip");
console.log(escribe);

let conta = 0;

console.log(likes, nolike, azul);

function like() {
  conta++;
  console.log(conta);
  azul.innerHTML = conta;
}

function dislike() {
  if (conta <= 0) {
  } else {
    conta--;
    console.log(conta);
    azul.innerHTML = conta;
  }
}

escribe.addEventListener("click", function (e) {
  if (e.target.textContent == "suscribirse") {
    escribe.textContent = "desuscribirse";
  } else if (e.target.textContent == "desuscribirse") {
    escribe.textContent = "suscribirse";
  }
});
