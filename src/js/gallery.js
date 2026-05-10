import Swiper from "swiper";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const swiper = new Swiper(".swiper-gallery", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".reviews-next-gallery",
    prevEl: ".reviews-prev-gallery",
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
