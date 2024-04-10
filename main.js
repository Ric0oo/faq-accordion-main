const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const answer = document.querySelector(".answer");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hided");
    minus[i].classList.toggle("hided");
    answer[i].classList.toggle("hided");
  });
}
