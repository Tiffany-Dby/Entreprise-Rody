const burgerElt = document.querySelector(".burger");
const navElt = document.querySelector("header nav");
const linksElts = navElt.querySelectorAll("a");

const checkActive = () => {
  const currentPath = window.location.pathname;

  linksElts.forEach((link) => {
    const linkHref = link.getAttribute("href");

    currentPath === linkHref
      ? link.classList.add("active")
      : link.classList.remove("active");
  });
};

const toggleNav = () => {
  burgerElt.addEventListener("click", () => {
    burgerElt.classList.toggle("burger--open");
    navElt.classList.toggle("nav--open");
  });
}

document.addEventListener("astro:page-load", () => {
  toggleNav();
  checkActive();
});