function checkWidth() {
  return window.innerWidth < 680;
}
function toggleNav() {
  if (checkWidth()) {
    var navList = document.getElementById("nav-list");
    var header = document.getElementById("header");
    var icon = document.getElementById("nav-toggle");

    if (navList.style.display === "flex") {
      navList.style.display = "none";
      icon.style.left = "0%";
      icon.style.top = "30%";
      icon.style.transform = "rotate(0deg)";
      icon.style.backgroundColor="#2c2c2e";
      header.classList.remove("expanded");
    } else {
      navList.style.display = "flex";
      icon.style.left = "0%";
      icon.style.top = "85%";
      icon.style.transform = "rotate(180deg)";
      icon.style.backgroundColor="#2c2c2e";
      header.classList.add("expanded");
    }
  }
}
