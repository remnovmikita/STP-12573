const accordionItems = document.querySelectorAll("[data-acc]");

accordionItems.forEach(item => {
  const header = item.querySelector("[data-header]");

  header.addEventListener("click", () => {
    const isOpen = item.dataset.state === "open";

    item.dataset.state = isOpen ? "close" : "open";
  });
});
