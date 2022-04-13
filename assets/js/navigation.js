const openNavMenu = document.getElementById("mobile-nav-btn");
const navMenuItems = document.getElementsByClassName("nav-items")[0];
var open = false;

openNavMenu.addEventListener("click", () => {
  if (open === false) {
    navMenuItems.style.display = "flex";
    open = true;
  } else {
    navMenuItems.style.display = "none";
    open = false;
  }
});
