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
      setTextDarkBlue.play();
    });
  });
}

// The animation

function animateOpenNav() {
  var mobileNav = document.getElementById("dropdown");
  var whiteBurger = document.getElementById("white-burger");
  var blackBurger = document.getElementById("black-burger");
  var openBurger = document.getElementById("open-burger");
  var headerText = document.getElementById("header-text");
  var headerTextDesk = document.getElementById("header-text-desktop");
  //Bring the white dropdown onto screen
  tl.to(mobileNav, {
    duration: 0.3,
    ease: "power3.out",
    y: 0,
    // Stop scrolling when dropdown is open, this fixes bugs with the white header change
    onStart: () =>
      document.querySelector(".scroll-smooth").classList.add("overflow-hidden"),
    onReverseComplete: () =>
      document
        .querySelector(".scroll-smooth")
        .classList.remove("overflow-hidden"),
  });
  // Animate the transition between the hamburger icons
  tl.to(
    openBurger,
    {
      opacity: 1,
    },
    "<",
  );
  tl.to(
    [whiteBurger, blackBurger],
    {
      opacity: 0,
    },
    "<",
  );
  tl.to(
    [headerText, headerTextDesk],
    {
      color: "#0B1F3B",
    },
    "<",
  );
  // Animate the menu links fading in
  tl.to(
    ".menu-link",
    {
      opacity: 1,
      y: 0,
      delay: 0.2,
      stagger: {
        // wrap advanced options in an object
        each: 0.07,
        ease: "power1.in",
      },
    },
    "<",
  ).reverse(); // Finally reverse the timeline. reversed() is true
}

// init
openNav();

// Changing header background from dark to light on scroll.
gsap.registerPlugin(ScrollTrigger);

var header = document.getElementById("header");
var whiteBurger = document.getElementById("white-burger");
var blackBurger = document.getElementById("black-burger");
var headerText = document.getElementById("header-text");
var headerTextDesk = document.getElementById("header-text-desktop");
var headerLink = document.getElementById("header-links");
var scrollWhite = gsap.timeline();
scrollWhite.to(header, {
  scrollTrigger: {
    trigger: ".change-white", // start animation when ".change-white" div enters the viewport
    start: "top 74px",
    end: "top 74px",
    scrub: true,
  },
  backgroundColor: "white",
});
scrollWhite.to([headerText, headerTextDesk, headerLink], {
  scrollTrigger: {
    trigger: ".change-white", // start animation when ".change-white" div enters the viewport
    start: "top 74px",
    end: "top 74px",
    scrub: true,
  },
  color: "#0B1F3B",
});
scrollWhite.to(whiteBurger, {
  scrollTrigger: {
    trigger: ".change-white", // start animation when ".change-white" div enters the viewport
    start: "top 74px",
    end: "top 74px",
    scrub: true,
  },
  opacity: 0,
});

scrollWhite.to(blackBurger, {
  scrollTrigger: {
    trigger: ".change-white", // start animation when ".change-white" div enters the viewport
    start: "top 74px",
    end: "top 74px",
    scrub: true,
  },
  opacity: 1,
});
// Added animation for when menu is clicked at the top of the screen
var setTextDarkBlue = gsap.timeline({ paused: true });

setTextDarkBlue.to([headerText, headerTextDesk], 
  {
    color: "#0B1F3B",
    delay: 1
  },
  "<",
  );

setTextDarkBlue.to(whiteBurger, 
  {
    opacity: 0,

  },
  "<",
  );

setTextDarkBlue.to(blackBurger, 
  {
    opacity: 1,

  },
  "<",
  );

