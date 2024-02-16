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

/*
    _          _                 _   _                 
   / \   _ __ (_)_ __ ___   __ _| |_(_) ___  _ __  ___ 
  / _ \ | '_ \| | '_ ` _ \ / _` | __| |/ _ \| '_ \/ __|
 / ___ \| | | | | | | | | | (_| | |_| | (_) | | | \__ \
/_/   \_\_| |_|_|_| |_| |_|\__,_|\__|_|\___/|_| |_|___/
                                                       
*/
