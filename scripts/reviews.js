const findBlockByAlias = (alias) => {
return $(".reviews__item").filter((ndx, item) => {
  return $(item).attr("data-linked-elem") === alias;
});

};


$(".interactive-avatar__link").click(e => {
  e.preventDefault();

const $this = $(e.currentTarget);
const currentItem = $this.closest(".reviews__switcher-item");
const target = $this.attr("data-switcher");
const itemtoShow = findBlockByAlias(target);


itemtoShow.addClass("active").siblings().removeClass("active");
currentItem.addClass("active").siblings().removeClass("active");

});