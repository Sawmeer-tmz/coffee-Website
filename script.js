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



let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling Down
    navbar.classList.add('navbar-hidden'); // Hide the navbar
  } else {
    // Scrolling Up
    navbar.classList.remove('navbar-hidden'); // Show the navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



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
                slidesPerView: 2,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
    });
});



