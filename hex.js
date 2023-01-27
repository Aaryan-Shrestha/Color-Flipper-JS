// METHOD FIRST::::::::::::::::::::::::::::::::::::::::::::::

// const hexColors = [
//   "#ff0000",
//   "#ffa500",
//   "#ffff00",
//   "#00ff00",
//   "#0000ff",
//   "#800080",
//   "#ffc0cb",
//   "$a52a2a",
//   "#000000",
//   "#f5f5dc",
//   "#800000",
//   "#808000",
//   "#ffdab9",
//   "#ee82ee",
//   "#ccccff",
//   "#7fff00",
//   "#fff0f5",
// ];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumberIndex = Math.floor(Math.random() * hexColors.length);

//   document.body.style.backgroundColor = hexColors[randomNumberIndex];
//   color.textContent = hexColors[randomNumberIndex];
// });

// METHOD SECOND::::::::::::::::::::::::::::::::::::::::::::::
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    // hexColor += hex[0]; // HARDCODED VALUE
    // hexColor += Math.floor(Math.random() * 7);
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
