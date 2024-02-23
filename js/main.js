const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// search 라는 클래스의 하위요소에 클릭하면 포커스 기능을 추가함
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector(".badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

const noticeSwiper = new Swiper(".notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

const promotionSwiper = new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const togglePromotion = document.querySelector(".promo-container");

let togglePromotionHanddler = false;

togglePromotion.addEventListener("click", function () {
  togglePromotionHanddler = !togglePromotionHanddler;
  if (togglePromotionHanddler) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

function randomMoveObject(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObeject(selector, delay, size) {
  gsap.to(selector, randomMoveObject(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: randomMoveObject(0, delay),
  });
}
floatingObeject(".floating1", 1, 15);
floatingObeject(".floating2", 0.5, 15);
floatingObeject(".floating3", 1.5, 20);
