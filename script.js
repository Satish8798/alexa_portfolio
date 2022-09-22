/* Menu show X hidden */
const navMenu = document.getElementById("navMenu"),
      navToggle = document.getElementById("navToggle"),
      navClose = document.getElementById("navClose");

/* Menu Show */
/* validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/* Menu Hidden */
/* validate if constant exists */

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}