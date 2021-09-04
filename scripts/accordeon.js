const openBtn = (item) => {
const container = item.closest(".team__item");
const content = container.find(".team__text");
const textContent = content.find(".team__text-content");
const reqHeight = textContent.height();


container.addClass("active");
content.height(reqHeight);

};



const closeEveryItem = (container) => {
  const items = container.find('.team__text');
const itemContainer = container.find(".team__item");

itemContainer.removeClass("active");
  items.height(0);

};




$('.team__title').click((e) => {
  const $this = $(e.currentTarget);
const container = $this.closest('.team__list');
const elContainer = $this.closest(".team__item");


if (elContainer.hasClass("active")) {
  closeEveryItem(container);
 
  $('.team-icon').show();
  $('.team-icon__up').hide();
}
else {
 
  closeEveryItem(container);
  openBtn($this);
  $('.team-icon').hide();
  $('.team-icon__up').show();
}

});

