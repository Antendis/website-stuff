//Interactive
 
 //when specific hings come on screen, make them do fade up animation
 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
    });
 });

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//to top when refreshed
window.onload = function() {
    window.scrollTo(0, 0);
  };