const openBtn = (item) => {
const container = item.closest(".team__item");
const content = container.find(".team__text");
const textContent = content.find(".team__text-content");
const reqHeight = textContent.height();
const icon = item.find(".team__icon")


container.addClass("active");
content.height(reqHeight);
icon.addClass("active-icon");

};



const closeEveryItem = (container) => {
  const items = container.find('.team__text');
const itemContainer = container.find(".team__item");

itemContainer.removeClass("active");
  items.height(0);

};

const rotateEveryIcon = (container) => {
const items = container.find('.team__text');
const icons = container.find(".team__icon");

icons.removeClass("active-icon");
  

};


$('.team__title').click((e) => {
  const $this = $(e.currentTarget);
const container = $this.closest('.team__list');
const elContainer = $this.closest(".team__item");




if (elContainer.hasClass("active")) {
  closeEveryItem(container);
  rotateEveryIcon(container);
 
}
else {
 
  closeEveryItem(container);
  rotateEveryIcon(container);
  openBtn($this);
  
}




});

