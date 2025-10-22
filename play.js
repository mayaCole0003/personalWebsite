document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const imgCount = images.children.length;
  let index = 0;

  // Auto-play
  setInterval(() => {
    index = (index + 1) % imgCount;
    images.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);

  // Manual controls
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  prev.addEventListener('click', () => {
    index = (index - 1 + imgCount) % imgCount;
    images.style.transform = `translateX(-${index * 100}%)`;
  });

  next.addEventListener('click', () => {
    index = (index + 1) % imgCount;
    images.style.transform = `translateX(-${index * 100}%)`;
  });
});
