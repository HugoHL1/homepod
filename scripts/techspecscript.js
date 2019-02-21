function Scroll(){
let ypos = window.pageYOffset
let leftBoxtitleOne = document.querySelector("#techspec_boxtitle_animl")
let leftBoxparaOne = document.querySelector("#techspec_desc_animl")
let leftBoxtitleTwo = document.querySelector("#techspec_boxtitle_animr")
let leftBoxparaTwo = document.querySelector("#techspec_desc_animr")
  if(ypos> 0){
    leftBoxtitleOne.style.opacity = "0"
    leftBoxparaOne.style.opacity = "0"
    leftBoxtitleTwo.style.opacity = "0"
    leftBoxparaTwo.style.opacity = "0"
}
  if (ypos > 200){
    leftBoxtitleOne.style.opacity = "1"
    leftBoxparaOne.style.opacity = "1"
    leftBoxtitleOne.classList.add("techspec_boxtitle_effectl")
    leftBoxparaOne.classList.add("techspec_desc_effectl")
  }
  if(ypos > 800){
    leftBoxtitleTwo.style.opacity = "1"
    leftBoxparaTwo.style.opacity = "1"
    leftBoxtitleTwo.classList.add('techspec_boxtitle_effectr')
    leftBoxparaTwo.classList.add('techspec_desc_effectr')
   }
}
window.addEventListener("scroll",Scroll)

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
