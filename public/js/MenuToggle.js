export default function MenuToggle() {
  //grab menu button and nav list
  const menuButton = document.querySelector(".js-menu-button");
  const navList = document.querySelector(".js-nav-list");

  //onClick toggle 'is-active' class
  menuButton.addEventListener("click", function toggleIsActive() {
    menuButton.classList.toggle("is-active");
    navList.classList.toggle("is-open");
  });
}
