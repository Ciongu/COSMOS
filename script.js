import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

// -----------NAVIGATION COMPONENT-----------
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navItems.forEach((navItem) => {
    navItem.classList.toggle("active");
  });
});

navItems.forEach((navItem) =>
  navItem.addEventListener("click", function () {
    for (let item of navItems) {
      item.classList.toggle("active");
    }
    hamburger.classList.toggle("active");
  })
);

// -----------SLIDER COMPONENT-----------
const prevBtn = document.querySelector(".slider-button.left");
const nextBtn = document.querySelector(".slider-button.right");

const swiper = new Swiper(".slider-container", {
  slidesPerView: 1,
  loop: true,
  centerSlide: true,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
});

prevBtn.addEventListener("click", function () {
  swiper.slidePrev();
});

nextBtn.addEventListener("click", function () {
  swiper.slideNext();
});
