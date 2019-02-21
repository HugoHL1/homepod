// Animation HomePod
function Scroll(){
let imgHomePod = document.querySelector('.imgHomePod');
let ypos = window.pageYOffset;
let tAnimation = document.querySelector('.index_title_animation')
let pAnimation =document.querySelector('.index_p_animation')
let index_container_animation = document.querySelector('.index_container_animation')
let index_imageHomePod = document.querySelector('.index_imageHomePod')


// if ((ypos > 400) && (ypos > 0 )) {
//   imgHomePod.classList.add("imgHomePod4")
// }
// if ( ypos > 10)
  // if(ypos<500){
  //   imgHomePod.classList.remove("imgHomePod4")
  //
  // }

  // if(ypos < 330){
  //   imgHomePod.classList.remove("imgHomePod2")
  //   imgHomePod.classList.remove("imgHomePod3")
  //   // imgHomePod.classList.add("imgHomePod4")
  //   // pAnimation.classList.add("index_p_animation")
  //   pAnimation.classList.remove("index_p_animation2")
  // }
  // if (ypos<310) {
  //   imgHomePod.classList.add("imgHomePod4")
  //
  // }
  // if (ypos < 320){
  //   imgHomePod.classList.remove("imgHomePod4")
  // }

  if (ypos < 320){
    imgHomePod.classList.remove("imgHomePod2")
    pAnimation.classList.remove("index_p_animation2")
    tAnimation.classList.remove("index_title_animation2")
    imgHomePod.classList.add("imgHomePod4")
    // imgHomePod.classList.add("5")
  }
  if(ypos > 320){
    imgHomePod.classList.add("imgHomePod2")
    imgHomePod.classList.remove("imgHomePod4")
  }
  if(ypos> 320){
    // imgHomePod.classList.add("imgHomePod3")
    // pAnimation.classList.remove("index_p_animation")
    tAnimation.classList.add("index_title_animation2")
    pAnimation.classList.add("index_p_animation2")
  }
  if(ypos > 470){
    imgHomePod.style.position = "sticky"
    imgHomePod.style.top = "-70px"
    imgHomePod.style.zIndex ="100"
    imgHomePod.style.transitionTimingFunction= "ease"
  }
  // if(ypos<500){
  //   imgHomePod.classList.remove("imgHomePod3")
  // }


  // if(ypos<450){
  // }
  // if(ypos>460){
  //   // index_container_animation.classList.add("eza2")
  //   // imgHomePod.style.position = "sticky"
  //   // pAnimation.classList.remove("index_p_animation2")
  //   imgHomePod.style.position = "sticky"
  //   imgHomePod.style.top = "-70px"
  //   // pAnimation.classList.add("index_p_animation")
  // }
  // if (ypos>650){
  // }
   // if(ypos>500){
  //   pAnimation.classList.add("aos-animate")
  // }
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
