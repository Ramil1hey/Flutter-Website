setInterval(function () {
  if (window.innerWidth < 475) {
    document.querySelector(".expressive_description__column2").style.display =
      "none";
  } else {
    document.querySelector(".expressive_description__column2").style.display =
      "flex";
  }
}, 3000);

const body = document.querySelector("body");
const barRow = document.querySelector("#barRow");
const adFlutter2 = document.querySelector("#adFlutter2");
const burgerBar = document.querySelector("#barBurger");
const leftBurgerBar = document.querySelector("#leftBurgerBar");
const searchIcon = document.querySelector('#searchIcon');
const inputSearch = document.querySelector('#inputSearch');

//vars
let flag = 0;

burgerBar.addEventListener("click", (e) => {
  // open burger bar
  leftBurgerBar.style.left = "0";
  leftBurgerBar.style.zIndex = "100";

  // cancel scroll content
  body.style.overflow = "hidden";

  body.style.backgroundColor = "#00000066";
  barRow.style.backgroundColor = "#00000066";
});

window.addEventListener("click", (e) => {
  if (leftBurgerBar.style.left == "0px") {
    if (e.target == body || e.target == adFlutter2 || e.target == barRow) {
      leftBurgerBar.style.left = "-1000px";
      body.style.overflow = "";

      body.style.backgroundColor = "#f8f9fa";
      barRow.style.backgroundColor = "#fff";
    }
  }
});

searchIcon.addEventListener('click', () => {
  inputSearch.classList.add('inputSearchActive');
  inputSearch.focus();
  flag = 1;

  setTimeout(() => flag = 3, 100);
})

body.addEventListener('click', e => {
  if (flag == 3) {
    if (e.target !== inputSearch) {
      inputSearch.classList.remove('inputSearchActive');
    }
  }
})