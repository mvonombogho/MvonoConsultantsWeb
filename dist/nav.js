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


// *********** fixed navbar **********
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height
    
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

// ********** smooth scroll **********

//select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link)=>{
    //prevent default
    link.addEventListener('click',(e)=>{
        e.preventDefault()

        //navigate to a specific spot
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)

        //calculating heights
        const navHeight = navBar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight

        if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 82){
            position = position + containerHeight
        }
        window.scrollTo({
            left: 0,
            top: position,
        })

        linksContainer.style.height = 0
    })
})