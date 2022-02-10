/*Menu bar sticky*/
window.addEventListener("scroll",function(){
  var header = this.document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})

/*Posouvání mezi sekcemi*/
$('nav a').on('click',function(e){
  if(this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 1200);
  }
})

/*swiper*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });


/*rozbaleni menu mobil*/

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0,3}s`;
  });
}

navSlide();