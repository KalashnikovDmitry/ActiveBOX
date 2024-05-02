const swiper = new Swiper(".swiper-testimonials", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewhell: true,
  keyboard: true,
  breakpoints: {
    1024: {
      direction: "horizontal",
    } ,
    320: { 
      direction: "vertical", 
    }
  },
});

//  let checkbox = document.querySelectorAll('input[type=checkbox]');
//   let op = document.querySelector("header-main-wrap");


//       checkbox.forEach((v) => {
//         if(v.checked) {
            
//           op.classList.add('active');

    
//         } else {
//           op.classList.remove('active');
//         }
//     });
     
  
    

