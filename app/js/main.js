const overlay = document.querySelector(".overlay");
const burgerLogo = document.querySelector(".burger-logo");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurger = document.querySelector(".burger-menu__btn");
const checkbox = document.querySelector("#checkbox");
const btnSubmit = document.querySelector(".form__button");

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const toggleOverlay = () => {
  overlay.classList.toggle("active");
};

const showOverlay = () => {
  overlay.classList.add("active");
};

const hideOverlay = () => {
  overlay.classList.remove("active");
};

const toggleBurgerMenu = () => {
  burgerMenu.classList.toggle("active");
  burgerLogo.classList.toggle("active");
  toggleOverlay();
  document.body.style.overflow = burgerMenu.classList.contains("active")
    ? "hidden"
    : "visible";
};

const handleBurgerLogoClick = () => {
  toggleBurgerMenu();
};

burgerLogo.addEventListener("click", handleBurgerLogoClick);
closeBurger.addEventListener("click", toggleBurgerMenu);

burgerMenu.addEventListener("click", (event) => {
  if (event.target.matches(".burger-menu__list-item-link")) {
    toggleBurgerMenu();
  }
});

function toggleAnswer(id) {
  const answer = document.getElementById("answer" + id);
  answer.classList.toggle("active");

  const svg = document.getElementById("svg" + id);
  svg.classList.toggle("active");
}

checkbox.addEventListener("change", () => {
  !checkbox.checked
    ? btnSubmit.setAttribute("disabled", true)
    : btnSubmit.removeAttribute("disabled");
});
