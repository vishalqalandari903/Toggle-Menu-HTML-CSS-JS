let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let list = document.querySelectorAll("li");
let indicator = document.querySelector(".indicator");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  toggle.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.remove("active");
      indicator.style.visibility = "hidden";
      indicator.style.opacity = "0";
    });
  });
  menu.classList.toggle("active");

  function activeLink() {
    indicator.style.visibility = "visible";
    indicator.style.opacity = "1";
    list.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  }
  list.forEach((item) => {
    item.addEventListener("click", activeLink);
  });
  //   list.forEach((item) => {

  //     item.addEventListener("click", function () {
  //       this.classList.add("active");
  //     });
  //   });
});
