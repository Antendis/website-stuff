window.addEventListener('scroll', function() {
  let scrollPos = window.scrollY;
  let animationContainer = document.querySelector('.animation-container');
  let man = document.querySelector('.man');
  let football = document.querySelector('.football');
  
  man.style.transform = `translateX(${scrollPos/10}%) translateY(${scrollPos/20}%)`;
  football.style.transform = `translateX(${scrollPos/5}%) translateY(-${scrollPos/10}%)`;
});
