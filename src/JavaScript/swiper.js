var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  },
  breakpoints: {
    '480': {
      slidesPerView: 1
    },
    '680': {
      slidesPerView: 2
    },
    '1200': {
      slidesPerView: 3
    },
  },
  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },
});