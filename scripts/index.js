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
