let headerBtn = document.querySelector(".header__button");
let elBody = document.querySelector(".body-js")
let headerOverlay = document.querySelector(".overlay ");


headerBtn.addEventListener("click" , function(){
    headerBtn.closest("header").classList.toggle("shownav");
    headerOverlay.classList.toggle("shownav");
})




$('.said__wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
      ]
  });
