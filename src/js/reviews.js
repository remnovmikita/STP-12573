import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviewsSwiper = new Swiper(".reviews-swiper", {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 3,
    },
}
});
