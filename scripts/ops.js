const sections = $("section");
const display = $(".wrapper__content");
const sideMenu = $(".fixed-menu")


const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
  return sectionEq * -100;
}

const performTransition = sectionEq => {
  if (inScroll === false) {
    inScroll = true;
    const position = countSectionPosition(sectionEq);

    const currentSection = sections.eq(sectionEq);
    const hamMenuTheme = currentSection.attr("data-hammenu-theme");
    const hamMenuIcon = $(".overlay__icon");
    

    if (hamMenuTheme === "black") {
      hamMenuIcon.addClass("overlay__icon--black");

    } else {
      hamMenuIcon.removeClass("overlay__icon--black");
    }


    display.css({
      transform: `translateY(${position}%)`,
    });


  
  sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
  
  
  setTimeout(() => {
    inScroll = false;
    sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

  }, 1300);

}
  
};

const  scrollViewport = direction => {
const activeSection = sections.filter(".active");
const nextSection = activeSection.next();
const prevSection = activeSection.prev();

if (direction === "next" && nextSection.length) {
performTransition(nextSection.index())
}
if (direction === "prev" && prevSection.length) {
  performTransition(prevSection.index())
}
}

$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
scrollViewport("next");
  }

  if (deltaY < 0 ) {
    scrollViewport("prev");
  }
});

$(window).on("keydown", e => {
const tagName = e.target.tagName.toLowerCase();
if (tagName !== "input" && tagName !== "textarea") {
  switch (e.keyCode) {
    case 38: 
    scrollViewport("prev");
    break;

    case 40: 
    scrollViewport("next");
    break;
}
  }
});

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click( e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);

  performTransition(reqSection.index());
});

if (isMobile) {
  $("body").swipe({
  
    swipe: function (event, direction) {
     event.preventDefault();
      //let scrollDirection = "";
  
      if (direction === "up") { scrollViewport("next"); 
    }
      if (direction === "down") { scrollViewport("prev");
    }
  
     
    },
  });
  
  
}
