
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[currentIndex].style.display = "block";
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", prevSlide);

showSlide(currentIndex);

setInterval(nextSlide, 2000);
