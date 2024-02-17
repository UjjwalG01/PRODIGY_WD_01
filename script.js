let button = document.querySelector("button"),
  mobileNav = document.querySelector(".nav-list"),
  section = document.querySelectorAll("section"),
  home = document.getElementById("home"),
  courses = document.getElementById("course"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

function toggle() {
  button.classList.toggle("clicked");
  mobileNav.classList.toggle("show");
}

function getRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("body").style.backgroundColor = randomColor;
}

function changeColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  home.style.backgroundColor = randomColor;
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  contact.style.backgroundColor = randomColor;
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  about.style.backgroundColor = randomColor;
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  courses.style.backgroundColor = randomColor;
}
