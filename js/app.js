

function act() {
    let menu = document.querySelector("#hamburger-menu");
    let navm = document.querySelector("#nav-menu");
    menu.classList.toggle("active");
    navm.classList.toggle("active");
}
$(document).ready(()=>{
    // $('#hamburger-menu').click(()=>{
    //     $('#hamburger-menu').toggleClass('active')
    //     $('#nav-menu').toggleClass('active')
    // })
    // setting owl carousel
    let navText =["<i class = 'bx bx-chevron-left'></i>",
    "<i class = 'bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel({
        items:1,
        dots:false,
        // loop: true, giúp trượt ngược được
        loop:true,
        nav:true,
        navText:navText,
        autoplay:true,
        autoplayHoverPause:true
    })
    $('#top-movies-slide').owlCarousel({
        items:2,
        dots:false,
        loop:true,
        autoplay:false,
        autoplayHoverPause:true,
        responsive:{
            500:{
                items:3
            },
            1280:{
                items:4
            },
            1600:{
                items:6
            }
        }
    })
    $('#movies-slide').owlCarousel({
        items:2,
        dots:false,
        nav:true,
        navText:navText,
        margin:15,
        responsive:{
            500:{
                items:3
            },
            1280:{
                items:4
            },
            1600:{
                items:6
            }
        }
    })
})