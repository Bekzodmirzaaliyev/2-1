let color = document.querySelector("#color");
let body = document.querySelector("body");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("ASD");
  console.log(color.value);
});
color.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(e);
  body.style.background = color.value;
});
