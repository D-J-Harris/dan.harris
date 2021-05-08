const hamburger = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  console.log("hi");
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
}
