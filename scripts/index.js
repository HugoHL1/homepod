// Animation HomePod
function Scroll(){
let imgHomePod = document.querySelector('.imgHomePod');
let ypos = window.pageYOffset;
let pAnimation =document.querySelector('.index_p_animation')
let index_container_animation = document.querySelector('.index_container_animation')
let index_imageHomePod = document.querySelector('.index_imageHomePod')


  if(ypos > 300){
    imgHomePod.classList.add("imgHomePod2")
  }
  if(ypos < 300){
    imgHomePod.classList.remove("imgHomePod2")
    imgHomePod.classList.remove("imgHomePod3")
    pAnimation.classList.add("index_p_animation")
    pAnimation.classList.remove("index_p_animation2")

  }
  if(ypos>400){
    imgHomePod.classList.add("imgHomePod3")
    pAnimation.classList.remove("index_p_animation")
    pAnimation.classList.add("index_p_animation2")
  }
  if(ypos<450){
  }
  if(ypos>460){
    // index_container_animation.classList.add("eza2")
    // imgHomePod.style.position = "sticky"
    // pAnimation.classList.remove("index_p_animation2")
    imgHomePod.style.position = "sticky"
    imgHomePod.style.top = "-70px"
    // pAnimation.classList.add("index_p_animation")
  }
  // if (ypos>650){
  // }
   // if(ypos>500){
  //   pAnimation.classList.add("aos-animate")
  // }
}
window.addEventListener("scroll",Scroll);





// Animation Carrousel
let posXCarrousel = 0
let carrousel = document.querySelector('div.index_carrousel')


setInterval(
  function(){
    posXCarrousel=posXCarrousel-1
    carrousel.style.left = posXCarrousel+"px"

    if(posXCarrousel < -4960){
      posXCarrousel=posXCarrousel+4960
      carrousel.style.left = posXCarrousel + "px"
    }

  }
  ,25
)
