const totalPrice = document.querySelector(".total");
const card = document.querySelectorAll(".prod-card");
const hearts = document.querySelectorAll(".fa-heart");
const trash = document.querySelectorAll(".fa-trash-alt");
const plus = document.querySelectorAll(".fa-plus-circle");
const minus = document.querySelectorAll(".fa-minus-circle");
const quantity = document.querySelectorAll(".quantity");
let total = 0;
const singlePrice = [100, 20, 50];
hearts.forEach(function (v) {
  v.addEventListener("click", function () {
    /*
    const color = v.style.color;
    if (color == "red") {
      v.style.color = "black";
    } else {
      v.style.color = "red";
    }*/
    v.classList.toggle("red-bg");
  });
});
plus.forEach(function (v, i) {
  v.addEventListener("click", function () {
    quantity[i].innerHTML = parseInt(quantity[i].innerHTML) + 1;
    total = total + singlePrice[i];
    totalPrice.innerHTML = total;
  });
});
minus.forEach(function (v, i) {
  v.addEventListener("click", function () {
    if (quantity[i].innerHTML == 0) return;
    quantity[i].innerHTML = parseInt(quantity[i].innerHTML) - 1;
    total = total - singlePrice[i];
    totalPrice.innerHTML = total;
  });
});
console.log(card);
trash.forEach(function (v, i) {
  v.addEventListener("click", function () {
    card[i].style.display = "none";
    total = total - quantity[i].innerHTML * singlePrice[i];
    totalPrice.innerHTML = total;
  });
});
