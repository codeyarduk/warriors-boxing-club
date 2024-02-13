const changeBg = () => {
  let header = document.getElementById('header');
  let scrollValue = window.scrollY;
  console.log(scrollValue);
  if(scrollValue > 400) {
    header.classList.add('transition-all');
    header.classList.add('bg-white');
  } else {
    header.classList.remove('bg-white')
  };
}

window.addEventListener('scroll', changeBg);