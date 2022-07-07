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


// ********** close links ***********
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click',(e)=>{
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
})