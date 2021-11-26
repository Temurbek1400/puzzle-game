// ? SET UP TEST
const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll("img");
const NUMBER_OF_IMAGES = 16; // !THIS GAME IS DYNAMIC😎
let lastSelected = null;
let placingRender = [...Array(NUMBER_OF_IMAGES)]
   .map((undef, i) => i)
   .sort((a, b) => 0.5 - Math.random());
let steps = null;
render();
// ? FUNCTIONS

function logic(div) {
   div.addEventListener("click", () => {
      div.style.opacity = "0.6";
      if (!lastSelected) {
         lastSelected = div.dataset.place;
      } else {
         const currentSelected = div.dataset.place;
         placingRender.swap(+currentSelected, +lastSelected);
         render();
         lastSelected = null;
      }
   });
}
function render() {
   steps++;
   imagesContainer.innerHTML = "";
   let check = true;
   placingRender.forEach((i, j) => {
      const div = `
      <div data-place="${j}">
         <img src="./cutted image with imgonline.com/image_part_0${
            i === 0 ? "0" + (i + 1) : i < 9 ? "0" + (i + 1) : i + 1
         }.jpg">
      </div>   
   `;
      imagesContainer.insertAdjacentHTML("beforeend", div);
      if (i !== j) check = false;
   });
   if (check) {
      alert("You have won in " + steps + " steps");
   }
   imagesContainer.childNodes.forEach((div) => logic(div));
}
Array.prototype.swap = function (x, y) {
   var b = this[x];
   this[x] = this[y];
   this[y] = b;
   return this;
};
