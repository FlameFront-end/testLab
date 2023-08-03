const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
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


function toggleAnswer(id) {
  const answer = document.getElementById("answer" + id);
  answer.classList.toggle("active");

  const svg = document.getElementById("svg" + id);
  svg.classList.toggle("active");
}
