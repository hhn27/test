var bannerSwiper = new Swiper(".bannerSwiper", {
  autoplay : {
    delay : 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

let imageIndex = 0;
const changeImage = () => {
    const image = document.getElementsByClassName("img-change");
    // console.log(image);
    const prevImage = document.querySelector(".img-change.active");
    prevImage.classList.add("prev");
    setTimeout(() => {
      prevImage.classList.remove("prev");
    }, 1000)
    prevImage.classList.remove("active")
    imageIndex++;
    if(imageIndex === image.length)
      imageIndex=0;
    image[imageIndex].classList.add("active");
}
setInterval(changeImage, 5000);

var swiper = new Swiper(".toursSwiper", {
    spaceBetween: 32,
    slidesPerView: 2.3,
    slidesPerGroup: 1,
    loop: true,
  });


  const prevSlide = () => {
    swiper.slidePrev(500, true);
  }
  const nextSlide = () => {
    swiper.slideNext(500, true);
  }

  const sliderHandler = () => {
    const slider = document.querySelector(".slider");
    const sliderChange = document.querySelector(".slider-absolute");
    const sliderItemText = document.getElementsByClassName("tab-slide-text-item")
    sliderChange.style.width = `${slider.offsetWidth/7}px`;
    swiper.on('slideChange', () => {
      const index = swiper.realIndex;
      console.log(index)
      if(index===0){
        sliderChange.style.transform = "translateX(0)";
      } 
      else
        sliderChange.style.transform = `translateX(${(slider.offsetWidth/7)*(index)}px)`;
      for( let i=0 ; i<sliderItemText.length; i++){
        if(i===index){
          sliderItemText[i].classList.add("active")
        }
        else{
          sliderItemText[i].classList.remove("active")
        }
      }
    })
  }
  window.addEventListener("resize", sliderHandler);
  window.addEventListener("DOMContentLoaded", sliderHandler);

  const popupMenu = document.querySelector(".popup-menu")
  const popupMenuOpenHandler = () => {
    popupMenu.style.transform = "translateX(0)";
    // popupMenu.style.visibility = "visible";
  }
  const popupMenuCloseHandler = () => {
    popupMenu.style.transform = "translateX(-100%)";
    // popupMenu.style.visibility = "hidden";
  }

  const headerMobile = document.querySelector(".header-mobile");
  let lastScroll = 0;
  const minScroll = 150;
  const navMobileScrollHandler = () => {
    console.log(headerMobile)
    const currentScroll = window.scrollY;
    console.log(currentScroll)
    if(lastScroll<currentScroll && lastScroll>minScroll){
      headerMobile.classList.add("fixed");
      headerMobile.classList.remove("shrink");
      console.log("1")
    }
    if(lastScroll>currentScroll && lastScroll>minScroll){
      headerMobile.classList.remove("fixed");
      headerMobile.classList.add("shrink");
    }
    if(lastScroll<minScroll){
      headerMobile.classList.remove("shrink");
    }
    lastScroll= currentScroll;
  }
  window.addEventListener("scroll", navMobileScrollHandler)
  
