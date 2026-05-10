const accordionItems = document.querySelectorAll(".main-acc");

accordionItems.forEach(item => {
  const header = item.querySelector(".upper-case");

  header.addEventListener("click", () => {

  // accordionItems.forEach(acc => {
  //     if (acc !== item) {
  //       acc.classList.remove("open");
  //     }
  //   });

    item.classList.toggle("open");
  });
});