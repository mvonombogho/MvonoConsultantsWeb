'use strict';

// const primaryNavigation = document.querySelector('.primary-navigation')
// const mobileToggle = document.querySelector('.mobile-nav-toggle')
// mobileToggle.addEventListener('click',()=>{
//     const visibility = primaryNavigation.getAttribute('data-visible')
    
//     if(visibility === "false"){
//         primaryNavigation.setAttribute("data-visible",true)
//         mobileToggle.setAttribute("aria-expanded",true)
//     }else{
//         primaryNavigation.setAttribute("data-visible",false)
//         mobileToggle.setAttribute("aria-expanded",false)
//     }
// })


// fixed navbar
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().navHeight
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav')
    }else{
        navBar.classList.remove('fixed-nav')
    }
    
    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})