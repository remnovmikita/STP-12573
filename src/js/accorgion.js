import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css"
const el = document.querySelector(".accordion");

new Accordion(el, {
  duration: 400,
  showMultiple: true,
  onToggle: (fold, isOpen) => {
    console.log("Fold:", fold);
    console.log("Is open:", isOpen);
  }
});
