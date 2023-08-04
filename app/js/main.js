const overlay = document.querySelector(".overlay");
const burgerLogo = document.querySelector(".burger-logo");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurger = document.querySelector(".burger-menu__btn");
const btnSubmit = document.querySelector(".form__button");
const form = document.querySelector("#form");
const checkbox = document.querySelector("#checkbox");

$(".responsive").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const toggleOverlay = () => {
  overlay.classList.toggle("active");
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

const handleBurgerMenuItemClick = () => {
  toggleBurgerMenu();
};

const burgerMenuItems = document.querySelectorAll(".burger-menu__list-item");
burgerMenuItems.forEach((item) => {
  item.addEventListener("click", handleBurgerMenuItemClick);
});

burgerLogo.addEventListener("click", handleBurgerLogoClick);
closeBurger.addEventListener("click", toggleBurgerMenu);

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

const submitForm = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const tel = formData.get("tel");

  try {
    const response = await fetch("https://demo9652966.mockable.io", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(name)}&tel=${encodeURIComponent(tel)}`,
    });

    if (response.ok) {
      alert("Форма успешно отправлена!");
    } else {
      alert("There was an error submitting the form.");
    }
  } catch (error) {
    console.error(error);
    alert("There was an error submitting the form.");
  }
};

form.addEventListener("submit", submitForm);
