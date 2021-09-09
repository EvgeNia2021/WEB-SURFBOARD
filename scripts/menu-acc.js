const measureWidth = () => {
  return 524;
}

const openItem = item => {
  const hiddenContent = item.find(".products-menu__content");
  const reqWidth = measureWidth();

  hiddenContent.width(reqWidth);
}

$(".products-menu__title").on("click", e => {
e.preventDefault();

const $this = $(e.currentTarget);
const item = $this.closest(".products-menu__item");

openItem(item);

});