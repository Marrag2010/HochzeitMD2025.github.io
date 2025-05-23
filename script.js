let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 4000); // Wechsel alle 4 Sekunden
}

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Automatisch schließen nach Linkklick auf Mobilgeräten
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("myTopnav");
  const links = nav.querySelectorAll("a:not(.icon)");

  links.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("responsive")) {
        nav.classList.remove("responsive");
      }
    });
  });
});
