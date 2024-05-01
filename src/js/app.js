const swiper = new Swiper(".swiper-testimonials", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewhell: true,
    keyboard: true,
    breakpoints: {
      1024: {
        direction: "horizontal",
      },
      320: {
        direction: "vertical",
      },
    }
  });