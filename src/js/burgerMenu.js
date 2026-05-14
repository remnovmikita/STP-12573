const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'close';
});


(() => {
  const anchors = burgerMenuEl.querySelectorAll('a[href*="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
      burgerMenuEl.dataset.visible = 'close';
    });
  });
})();
