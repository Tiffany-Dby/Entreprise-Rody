const burgerElt = document.querySelector(".burger");
const navElt = document.querySelector("header nav");

document.addEventListener("astro:page-load", () => {
  burgerElt.addEventListener("click", () => {
    burgerElt.classList.toggle("burger--open");

    navElt.classList.toggle("nav--open");
  });
});