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

//RIBBON
var header = document.getElementById("ribbon");
var prevScrollpos = window.pageYOffset;

header.style.boxShadow = "none";

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-80px";
  }
  if (currentScrollPos === 0) {
    header.style.boxShadow = "none";
    header.style.marginTop = "10px";
  } else {
    header.style.boxShadow = "0 4px 4px rgba(0, 0, 0, 0.4)";
    header.style.marginTop = "0";
    
  }
  prevScrollpos = currentScrollPos;
};