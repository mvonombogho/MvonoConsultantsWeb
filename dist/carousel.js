'use strict';
const clientLogos = [
    {
        id:1,
        img: '/dist/img/slide-1.png',
    },
    {
        id:2,
        img: '/dist/img/slide-2.png',
    },
    {
        id:3,
        img: '/dist/img/slide-3.png',
    },
    {
        id:4,
        img: '/dist/img/slide-4.png',
    },
    {
        id:5,
        img: '/dist/img/slide-5.png',
    },
    {
        id:6,
        img: '/dist/img/slide-6.png',
    },
    {
        id:7,
        img: '/dist/img/slide-7.png',
    },
    {
        id:8,
        img: '/dist/img/slide-8.png',
    },
    {
        id:9,
        img: '/dist/img/slide-9.png',
    },
    {
        id:10,
        img: '/dist/img/slide-10.png',
    },
    {
        id:11,
        img: '/dist/img/slide-11.png',
    },
    {
        id:12,
        img: '/dist/img/slide-12.png',
    },
    {
        id:13,
        img: '/dist/img/slide-13.png',
    },
    {
        id:14,
        img: '/dist/img/slide-14.png',
    },
    {
        id:15,
        img: '/dist/img/slide-15.png',
    },
    {
        id:16,
        img: '/dist/img/slide-16.png',
    },
    {
        id:17,
        img: '/dist/img/slide-17.png',
    },
    {
        id:18,
        img: '/dist/img/slide-18.png',
    },
]


const img = document.querySelector('.carousel_image')
const leftArrow = document.querySelector('.fa-arrow-left')
const rightArrow = document.querySelector('.fa-arrow-right')

//set starting item
let currentItem = 0

//load initial item
window.addEventListener('DOMContentLoaded',(showClientLogo(currentItem)))

//function to show clients' logos

function showClientLogo(client){
    const item = clientLogos[client]
    img.src = item.img
}

//show next client

rightArrow.addEventListener('click',()=>{
    currentItem++
    if(currentItem > clientLogos.length-1){
        currentItem = 0
    }
    showClientLogo(currentItem)
})

//show previous client

leftArrow.addEventListener('click',()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = clientLogos.length-1
    }
    showClientLogo(currentItem)
})