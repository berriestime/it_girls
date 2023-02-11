let i = 0;
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
let superHeroes;

document.addEventListener("DOMContentLoaded", () => {
  fetch("./superHeroes.json")
    .then((data) => data.json())
    .then((json) => {
      superHeroes = json;
      render();
      renderAdditionalInfo();
      renderStar(localStorage.getItem(superHeroes[i].superhero));
    });
});

function renderStar(num) {
  const stars = document.querySelectorAll(".stars");

  if (
    isFinite(localStorage.getItem(superHeroes[i].superhero)) &&
    localStorage.getItem(superHeroes[i].superhero) != num
  ) {
    for (let i = 0; i < 10; i++) {
      stars[i].classList.remove("starChecked");
    }
    for (let i = 0; i < num; i++) {
      stars[i].classList.add("starChecked");
    }
    localStorage.setItem(superHeroes[i].superhero, num);
  }

  localStorage.setItem(superHeroes[i].superhero, num);

  for (let i = 0; i < 10; i++) {
    const stars = document.querySelectorAll(".stars");
    stars[i].classList.remove("starChecked");
  }
  for (let i = 0; i < num; i++) {
    stars[i].classList.add("starChecked");
  }
  localStorage.setItem(superHeroes[i].superhero, num);
}

function renderAdditionalInfo() {
  let more = superHeroes[i].more;
  const btnMore = document.getElementById("more");
  btnMore.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(
      ".flex-container"
    ).innerHTML += `<span>${more}</span>`;
  });
}

function render() {
  let superhero = superHeroes[i].superhero;
  let universe = superHeroes[i].universe;
  let alterEgo = superHeroes[i].alterEgo;
  let occupation = superHeroes[i].occupation;
  let friends = superHeroes[i].friends;
  let superpowers = superHeroes[i].superpowers;
  let pathImg = superHeroes[i].pathImg;
  let container = document.querySelector(".flex-container");
  container.innerHTML = `<img class="item picture" src="${pathImg}" alt=""/>`;
  container.innerHTML += `<span>${superhero}</span>`;
  container.innerHTML += `<span class="info-main">Вселенная: ${universe}</span>`;
  container.innerHTML += `<span class="info-main">Альтер эго: ${alterEgo}</span>`;
  container.innerHTML += `<span class="info-main">Род деятельности: ${occupation}</span>`;
  container.innerHTML += `<span class="info-main">Друзья: ${friends}</span>`;
  container.innerHTML += `<span class="info-main">Суперсилы: ${superpowers}</span>`;
  container.innerHTML += `<button class="info-additional" id="more">Подробнее:</button>`;
}

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  i++;
  if (i > 9) {
    i = 0;
  }
  render();
  renderAdditionalInfo();
  renderStar(localStorage.getItem(superHeroes[i].superhero));
});

btnPrev.addEventListener("click", (e) => {
  e.preventDefault();
  i--;
  if (i < 0) {
    i = 9;
  }
  render();
  renderAdditionalInfo();
  renderStar(localStorage.getItem(superHeroes[i].superhero));
});
