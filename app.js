// ACCESSING ELEMENTS FROM JS (VARIABLES)

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "lavender",
  "coral",
  "crimson",
  "lime",
  "peach",
  "khaki",
  "sky blue",
  "violet",
  "periwinkle",
  "teal",
  "rgb(128,128,0)",
];

btn.addEventListener("click", function () {
  // get random number between 0 and 3 for accessing colors array eg. colors[2]
  const randomNumber = Math.floor(Math.random() * colors.length);
  //   console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
