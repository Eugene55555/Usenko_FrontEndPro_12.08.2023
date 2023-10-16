let currentSlide = 0;
const images = document.querySelectorAll('.slider img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlide(n) {
    images[currentSlide].style.display = 'none';
    currentSlide = (n + images.length) % images.length;
    images[currentSlide].style.display = 'block';
    
    if (currentSlide === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
    
    if (currentSlide === images.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

showSlide(currentSlide);