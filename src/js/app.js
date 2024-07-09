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

const check = document.querySelectorAll('input[type=checkbox]');
const sub = document.querySelectorAll('.header-main-wrap');

check.forEach(closeDiv);


function closeDiv(item) {
  item.addEventListener('click', function() {

    let curentCheck = item;
    let divId = curentCheck.getAttribute('data-div');
    let active_div = document.querySelector(divId);

    if (curentCheck.classList.contains('active')) {
      check.forEach(function(item) {
          item.classList.add('active');
      });

      sub.forEach(function(item){
          item.classList.add('active');
      });

      curentCheck.classList.remove('active');
      active_div.classList.remove('active');
  }
  });
}
//  let checkbox = document.querySelectorAll('input[type=checkbox]');
//   let op = document.querySelector("header-main-wrap");


//       checkbox.forEach((v) => {
//         if(v.checked) {
            
//           op.classList.add('active');

    
//         } else {
//           op.classList.remove('active');
//         }
//     });
     
  
    

