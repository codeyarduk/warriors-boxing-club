const changeBg = () => {

  let header = document.getElementById('header');
  let scrollValue = window.scrollY;
  console.log(scrollValue);

  if(scrollValue > 75) {
    header.classList.add('transition-all');
    header.classList.add('bg-white');
    document.getElementById('header-mobile-image-white').classList.add('hidden')
    document.getElementById('header-mobile-image-black').classList.remove('hidden')
    document.getElementById('header-text').classList.add('text-warriorDarkBlueBg')
    document.getElementById('header-text').classList.remove('text-white')

  } else {
    header.classList.remove('bg-white')
    document.getElementById('header-mobile-image-black').classList.add('hidden')
    document.getElementById('header-mobile-image-white').classList.remove('hidden')
    document.getElementById('header-text').classList.remove('text-warriorDarkBlueBg')
    document.getElementById('header-text').classList.add('text-white')

  };
}

window.addEventListener('scroll', changeBg);

