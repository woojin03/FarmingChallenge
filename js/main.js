document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mainMenu = document.querySelector('.main-menu');

    hamburgerIcon.addEventListener('click', () => {
        mainMenu.classList.toggle('active'); 
    });

    const menuItems = mainMenu.querySelectorAll('li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mainMenu.classList.remove('active'); 
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlideIndex = 0;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }
  
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
        updateDots(currentSlideIndex);
    }
  
    setInterval(nextSlide, 2000);
  
    showSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
});