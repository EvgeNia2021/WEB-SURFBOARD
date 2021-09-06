/*const slider = $(".products").bxSlider({
pager:false,
controls:false,
});

$(".products-slider__arrow--prev").click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$(".products-slider__arrow--next").click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});*/


const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");



const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    itemsList.appendChild(itemsList.firstElementChild);
   
  } else { 
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
   
  }
};

right.addEventListener("click", (e) => {
 loop("right", e);

});

left.addEventListener("click", (e) => {
 loop("left", e);
 
 });

 /*var productsItem = document.querySelector(".products__item");

 left.addEventListener("click", addclass)
 function addclass() {
   if (menu.classList.contains("activeSlide")) {
     menu.classList.remove("activeSlide");
 
     
     
   } else {
     menu.classList.add("activeSlide");
   
   }
 
 
 };
 */
 