const changeBg = () => {
  
  let header = document.getElementById('header');
  let scrollValue = window.scrollY;

  if(scrollValue > 563) {
    header.classList.add('transition-all');
    header.classList.add('bg-white');
    document.getElementById('header-mobile-image-white').classList.add('hidden')
    document.getElementById('header-mobile-image-black').classList.remove('hidden')
    document.getElementById('header-text').classList.add('text-black')

  } else {
    header.classList.remove('bg-white')
    document.getElementById('header-mobile-image-black').classList.add('hidden')
    document.getElementById('header-mobile-image-white').classList.remove('hidden')
    document.getElementById('header-text').classList.remove('text-black')

  };
}

window.addEventListener('scroll', changeBg);