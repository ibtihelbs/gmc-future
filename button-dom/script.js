const btn = document.querySelector("button");
const body = document.querySelector("body");
btn.addEventListener("click", function () {
  body.style.backgroundColor = "#" + Math.floor(Math.random() * 1000000);
  btn.style.backgroundColor = "#" + Math.floor(Math.random() * 1000000);
});
