const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const button = document.querySelector("button");

window.onload = () => {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  changeGradient()
};
button.addEventListener("click", () => {
  color1.value = randomHex();
  color2.value = randomHex();
  changeGradient();
});
color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);

function changeGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = `background: ${body.style.background};`;
}

const randomHex = () => {
  let min = 0;
  let max = 16777215;
  let randNum = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  return "#" + randNum.toString(16)
};
