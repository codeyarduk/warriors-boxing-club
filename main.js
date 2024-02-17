/*_   _                _           
| | | | ___  __ _  __| | ___ _ __ 
| |_| |/ _ \/ _` |/ _` |/ _ \ '__|
|  _  |  __/ (_| | (_| |  __/ |   
|_| |_|\___|\__,_|\__,_|\___|_|   
                                  
 ____             _                                   _               
| __ )  __ _  ___| | ____ _ _ __ ___  _   _ _ __   __| |   ___  _ __  
|  _ \ / _` |/ __| |/ / _` | '__/ _ \| | | | '_ \ / _` |  / _ \| '_ \ 
| |_) | (_| | (__|   < (_| | | | (_) | |_| | | | | (_| | | (_) | | | |
|____/ \__,_|\___|_|\_\__, |_|  \___/ \__,_|_| |_|\__,_|  \___/|_| |_|
                      |___/                                           
 ____                 _ _ 
/ ___|  ___ _ __ ___ | | |
\___ \ / __| '__/ _ \| | |
 ___) | (__| | | (_) | | |
|____/ \___|_|  \___/|_|_|
*/
/*
const changeBg = () => {
  let header = document.getElementById("header");
  let scrollValue = window.scrollY;
  console.log(scrollValue);

  if (scrollValue > 75) {
    header.classList.add("transition-all");
    header.classList.add("bg-white");
    document
      .getElementById("header-mobile-image-white")
      .classList.add("hidden");
    document
      .getElementById("header-mobile-image-black")
      .classList.remove("hidden");
    document
      .getElementById("header-text")
      .classList.add("text-warriorDarkBlueBg");
    document.getElementById("header-text").classList.remove("text-white");
  } else {
    header.classList.remove("bg-white");
    document
      .getElementById("header-mobile-image-black")
      .classList.add("hidden");
    document
      .getElementById("header-mobile-image-white")
      .classList.remove("hidden");
    document
      .getElementById("header-text")
      .classList.remove("text-warriorDarkBlueBg");
    document.getElementById("header-text").classList.add("text-white");
  }
};

window.addEventListener("scroll", changeBg);
*/
/*
    _          _                 _   _                 
   / \   _ __ (_)_ __ ___   __ _| |_(_) ___  _ __  ___ 
  / _ \ | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \/ __|
 / ___ \| | | | | | | | | | (_| | |_| | (_) | | | \__ \
/_/   \_\_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|___/
                                                       
*/

// Header dropdown animation
var tl = gsap.timeline({ paused: true });

// Logic for applying animation
function openNav() {
  animateOpenNav();
  var navBtnWht = document.getElementById("header-mobile-image-white");
  var navBtnBlk = document.getElementById("header-mobile-image-black");
  var navBtn = document.getElementById("navbtn");
  var link = document.querySelectorAll(".menu-link");
  navBtn.onclick = function () {
    // Toggle reversed to it's opposite value
    tl.reversed(!tl.reversed());
    // Use the toggle method in the classList API
  };
  link.forEach((link) => {
    link.addEventListener("click", () => {
      tl.reversed(!tl.reversed());
    });
  });
}

// The animation
function animateOpenNav() {
  var mobileNav = document.getElementById("dropdown");
  var blackBurger = document.getElementById("header-mobile-image-white");
  var whiteBurger = document.getElementById("header-mobile-image-black");
  var headerText = document.getElementById("header-text");
  tl.to(mobileNav, {
    duration: 1,
    ease: "power3.out",
    y: 0,
  })
    .to(".menu-link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: {
        // wrap advanced options in an object
        each: 0.2,
        ease: "power1.in",
      },
    })
    // Animate the transition between the hamburger icons
    .to(
      blackBurger,
      {
        opacity: 0,
      },
      "<",
    )
    .to(
      whiteBurger,
      {
        opacity: 1,
      },
      "<",
    )
    .to(
      headerText,
      {
        color: "black",
      },
      "<",
    )
    .reverse(); // Finally reverse the timeline. reversed() is true
}

// init
openNav();
