const menuBtn = document.querySelector(".nav-s");
const spMenu = document.querySelector(".s-menu");
menuBtn.addEventListener("click", function () {
  spMenu.classList.toggle("open");
  menuBtn.classList.toggle("open");
});
