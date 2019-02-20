function Scroll(){
let leftBoxtitleOne = window.querySelector("techspec_desc_animl")
let leftBoxparaOne = window.querySelector("techspec_desc_animl")
let leftBoxtitleTwo = window.querySelector("techspec_boxtitle_animr")
let leftBoxparaTwo = window.querySelector("techspec_desc_animr")
let ypos = window.pageYOffset
  if(ypos > 300){
     leftBoxtitleOne.classList.add("techspec_boxtitle_effectl")
     leftBoxparaOne.classList.add("techspec_desc_effectl")
  }
  // if(ypos < 500){
  //
  // }
  // if(ypos>800){
  //
  // }
  // if(ypos<1050){
  //
  // }
  // if(ypos>460){
  //
  // }
}
window.addEventListener("scroll",Scroll)
