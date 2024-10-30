const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", () => {
    // Open the mobile menu
    document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    // Close the mobile menu
    document.body.classList.remove("show-mobile-menu");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
    // Check if the clicked element is outside the nav menu and the open button
    if (
        !navMenu.contains(event.target) && // Clicked outside the nav menu
        !menuOpenButton.contains(event.target) && // Clicked outside the open button
        document.body.classList.contains("show-mobile-menu") // Menu is open
    ) {
        document.body.classList.remove("show-mobile-menu"); // Close the menu
    }
});

const navLinks = document.querySelectorAll("a"); // Select all nav links

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

// hide navbar on scroll
// let lastScrollY = window.scrollY;
// const navbar = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > lastScrollY) {
    
//     navbar.classList.add("hide-navbar");
//   } else {
    
//     navbar.classList.remove("hide-navbar");
//   }
//   lastScrollY = window.scrollY;
// });



//swiper
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            900: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            718: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });
});



