const contactElts = document.querySelectorAll(".card__contact--reveal");
const keyElts = document.querySelectorAll(".card__key--reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("card--active");
      entry.target.style.animationDuration = `${1 + i * 0.5}s`;
    }
  });
});

for (const element of contactElts) {
  observer.observe(element);
}

for (const element of keyElts) {
  observer.observe(element);
}