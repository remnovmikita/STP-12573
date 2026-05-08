import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
console.log("Аккардеон работает");

const el = document.querySelector(".accordion");
console.log(el);

new Accordion(el, {
  duration: 400,
  showMultiple: true,
  onToggle: (fold, isOpen) => {
    alert("onToggle вызван!"); // должно всплыть при клике
  }
});
