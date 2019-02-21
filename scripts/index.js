// Animation HomePod
function Scroll(){
let imgHomePod = document.querySelector('.index_imgHomePod');
let ypos = window.pageYOffset;
let tAnimation = document.querySelector('.index_title_animation')
let pAnimation = document.querySelector('.index_p_animation')
let index_container_animation = document.querySelector('.index_container_animation')




  if (ypos < 320){
    imgHomePod.classList.remove("index_imgHomePod2")
    pAnimation.classList.remove("index_p_animation2")
    tAnimation.classList.remove("index_title_animation2")
    imgHomePod.classList.add("index_imgHomePod4")
  }
  if(ypos > 320){
    imgHomePod.classList.add("index_imgHomePod2")
    imgHomePod.classList.remove("index_imgHomePod4")
    tAnimation.classList.add("index_title_animation2")
    pAnimation.classList.add("index_p_animation2")
  }
}
window.addEventListener("scroll",Scroll);


// Animation Carrousel
let posXCarrousel = -440
let carrousel = document.querySelector('div.index_carrousel')


setInterval(
  function(){
    posXCarrousel=posXCarrousel-1
    carrousel.style.left = posXCarrousel+"px"

    if(posXCarrousel < -5100){
      posXCarrousel=posXCarrousel+4660
      carrousel.style.left = posXCarrousel + "px"
    }

  }
  ,20
)


// MENU hamburger

let menuMobile = document.querySelector('.header_nav')
let buttonHamburger = document.querySelector('.header_divhamburger img')



buttonHamburger.addEventListener('click',function(){
  if (menuMobile.classList.contains("header_nav_visible")) {
    menuMobile.classList.remove("header_nav_visible")
  } else {
    menuMobile.classList.add("header_nav_visible")
  }

})
