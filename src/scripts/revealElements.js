const reveal = () => {
  const contactElts = document.querySelectorAll(".card__contact--reveal");
  const keyElts = document.querySelectorAll(".card__key--reveal");

  const setActive = (elts, addDuration) => {
    elts.forEach((e, i) => {
      const windowHeight = window.innerHeight;
      const eltTop = e.getBoundingClientRect().top;
      const eltVisible = 100;

      if (eltTop < windowHeight - eltVisible) {
        e.classList.add("card--active");
        e.style.animationDuration = `${1 + i * addDuration}s`;
      }
    });
  }

  setActive(contactElts, 0.25);
  setActive(keyElts, 0.25);
};

window.addEventListener("scroll", reveal);