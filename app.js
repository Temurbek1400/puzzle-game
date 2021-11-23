// ? SET UP TEST
const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll("img");

// let placingRender = [3, 2, 1, 0, 4, 5, 6, 7, 8];
let placingRender = [0, 1, 2, 3, 4, 5, 6, 7, 8].sort((a, b) => 0.5 - Math.random());
let lastSelected = null;
render();
// ? FUNCTIONS

function logic(div) {
   div.addEventListener("click", () => {
      div.style.opacity = "0.6";
      if (!lastSelected) {
         // div.style.opacity = "0.6";
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
   imagesContainer.innerHTML = "";
   placingRender.forEach((i, j) => {
      const div = `
      <div data-place="${j}">
         <img src="./cutted image with imgonline.com/image_part_00${
            i + 1
         }.jpg"">
      </div>   
   `;
      imagesContainer.insertAdjacentHTML("beforeend", div);
   });
   const imagesDiv = document.querySelectorAll(".images > div");
   imagesDiv.forEach((div) => logic(div));
}

Array.prototype.swap = function (x, y) {
   var b = this[x];
   this[x] = this[y];
   this[y] = b;
   return this;
};
