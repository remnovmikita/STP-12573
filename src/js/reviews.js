import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviewsSwiper = new Swiper(".reviews-swiper", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  loop:true,
  navigation: {
    nextEl: "[data-reviews-next]",
    prevEl: "[data-reviews-prev]",
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
