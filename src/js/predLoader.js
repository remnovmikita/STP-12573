document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const images = document.querySelectorAll('img');
  let loadedCount = 0;

  images.forEach(img => {
    img.addEventListener('load', checkImages);
    img.addEventListener('error', checkImages);
  });
  document.body.classList.add('no-scroll');
  function checkImages() {
    loadedCount++;
    if (loadedCount === images.length) {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    }
  }

  
  setTimeout(() => {
     document.body.classList.remove('no-scroll');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
  }, 500);
});
