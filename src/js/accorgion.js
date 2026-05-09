import accordion from "accordion";
import "accordion/src/accordion.css";

var el = document.querySelector(".accordion");
new Accordion(el, {
  onToggle: (fold, isOpen) => {
    const item = fold.el; 
    const icon = fold.el.querySelector("svg use");

     if (isOpen) {
      icon.setAttribute("href", "/img/sprite.svg#icon-icon-up");
    } else {
      icon.setAttribute("href", "/img/sprite.svg#icon-icon-down");
    }

    if (!isOpen) {
      item.style.backgroundColor = "";
      return;
    }
    if (item.classList.contains("first")) {
      item.style.backgroundColor = "#f7d62e"; 
    }
    if (item.classList.contains("second")) {
      item.style.backgroundColor = "#fd8ff0"; 
    }
    if (item.classList.contains("third")) {
      item.style.backgroundColor = "#74d2ee"; 
    }
    if (item.classList.contains("fourth")) {
      item.style.backgroundColor = "#a4c73a"; 
    }
    if (item.classList.contains("fifth")) {
      item.style.backgroundColor = "#fdab4f"; 
    }
  }
});
