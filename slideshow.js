const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => {
    slide.classList.remove("active");

    const text = slide.querySelector(".highlight-anim");
    if (text) text.classList.remove("show");
  });

  const currentSlide = slides[i];
  currentSlide.classList.add("active");

  const text = currentSlide.querySelector(".highlight-anim");
  if (text){
    setTimeout(() => {
        text.classList.add("show")
    }, 0);
     
    };
}

// show first slide immediately
showSlide(index);

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 10000);