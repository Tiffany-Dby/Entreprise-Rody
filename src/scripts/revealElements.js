document.addEventListener('astro:page-load', () => {
  const contactElts = document.querySelectorAll(".card__contact--reveal");
  const keyElts = document.querySelectorAll(".card__key--reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((element, i) => {
      if (element.isIntersecting) {
        element.target.classList.add("card--active");
        element.target.style.animationDuration = `${1 + i * 0.25}s`;
      }
    });
  });

  for (const element of contactElts) {
    observer.observe(element);
  }

  for (const element of keyElts) {
    observer.observe(element);
  }
});