
const button = document.getElementById('suggest-btn');
const text = document.querySelector("span");



// function redirect () {
//   window.location.href="film.html";
// }

function rest() {
  window.location.href = "film.html";
}

function transform () {
  button.style["transform"] = "rotate(45deg)";
  button.style["border-radius"] = "0";
}
let number = 0;
function grow () {
  number++;
  // text.style["content"]=" ";
  text.style["color"]="transparent";
  button.style["background"]="#fdcac6";
  let width = button.offsetWidth;
  let height = button.offsetHeight;
  str_height = height + "px";
  width-=130;
  str_width = width + "px";
  button.style["width"]=str_width;
  button.style["height"]=str_height;
  // text.innerHTML = " ";
  if (width > 50){
    requestAnimationFrame(grow);
  }
  if (width=50){
    setTimeout(transform, 300);
  }
  setTimeout(rest, 750);
}
button.addEventListener("click",grow);



// function toggleAnimation() {
//   number++;
//   if (number < 400) {
//     window.requestAnimationFrame(toggleAnimation);
//   }
// }



