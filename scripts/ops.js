const sections = $("section");
const display = $(".wrapper__content");
const sideMenu = $(".fixed-menu")


const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
  return sectionEq * -100;

  if (isNaN(position)) {
    console.error("передано не верное значение в countSectionPosition");
    return 0;
  }

  return position;
};


const changeMenuThemeForSection = sectionEq => {
  const currentSection = sections.eq(sectionEq);
  const sideMenuTheme = currentSection.attr("data-sidemenu-theme")
  const hamMenuTheme = currentSection.attr("data-hammenu-theme");
  const hamMenuIcon = $(".overlay__icon");
  

  

  if (hamMenuTheme === "black") {
    hamMenuIcon.addClass("overlay__icon--black");

  } else {
    hamMenuIcon.removeClass("overlay__icon--black");
  }

  if (sideMenuTheme === "black") {
    sideMenu.addClass("fixed-menu--dark");
  } else {
    sideMenu.removeClass("fixed-menu--dark");
  }
}

const performTransition = sectionEq => {
  if (inScroll) return;

  const transitionOver = 1000;
  const mouseInertiaOver = 300;

    inScroll = true;

    const position = countSectionPosition(sectionEq);

    changeMenuThemeForSection(sectionEq);


    display.css({
      transform: `translateY(${position}%)`,
    });


  
  sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
  
  
  setTimeout(() => {
    inScroll = false;
    sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

  }, transitionOver + mouseInertiaOver);

  
};

const  ViewportScroller = () => {
const activeSection = sections.filter(".active");
const nextSection = activeSection.next();
const prevSection = activeSection.prev();


return {
  next() {
    if (nextSection.length) {
      performTransition(nextSection.index());
  }
},

prev() {
  if (prevSection.length) {
  performTransition(prevSection.index());
}

},
};
};

$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;
const scroller = ViewportScroller();

  if (deltaY > 0) {
scroller.next();
  }

  if (deltaY < 0 ) {
    scroller.prev();
  }
});

$(window).on("keydown", e => {
const tagName = e.target.tagName.toLowerCase();
const TypingInInputs = tagName == "input" || tagName == "textarea";
const scroller = ViewportScroller();

if (TypingInInputs) return;

  switch (e.keyCode) {
    case 38: 
    scroller.prev();
    break;

    case 40: 
    scroller.next();
    break;
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
     const scroller = ViewportScroller();
      let scrollDirection = "";
  
      if (direction === "up") scrollDirection = "next"; 
    
      if (direction === "down") scrollDirection = "prev"; 

      scroller[scrollDirection]();
    },
  
  });
    
}
