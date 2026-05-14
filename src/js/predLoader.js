document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const images = document.querySelectorAll('img');
  let loadedCount = 0;

  document.body.dataset.scroll = "disabled";

  images.forEach(img => {
    img.addEventListener('load', checkImages);
    img.addEventListener('error', checkImages);
  });

  function checkImages() {
    loadedCount++;
    if (loadedCount === images.length) {
      loader.dataset.loader = "close";
      document.body.dataset.scroll = "enabled";
    }
  }

  setTimeout(() => {
    loader.dataset.loader = "close";
    document.body.dataset.scroll = "enabled";
  }, 500);
});
