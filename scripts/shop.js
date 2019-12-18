// MENU hamburger

let menuMobile = document.querySelector('.header_nav')
let buttonHamburger = document.querySelector('.header_divhamburger img')



buttonHamburger.addEventListener('click',function(){
  if (menuMobile.classList.contains("header_nav_visible")) {
    menuMobile.classList.remove("header_nav_visible")
  } else {
    menuMobile.classList.add("header_nav_hidden")
  }

})
