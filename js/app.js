

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
        loop:true,
        nav:true,
        navText:navText,
        autoplayHoverPause:true
    })
})