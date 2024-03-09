// alert("some error  message is missing from the message table  ");

let currentSlide = 0;
    const sliders = document.querySelectorAll('.slider');

    function showSlide(n) {
        sliders[currentSlide].style.display = 'none';
        currentSlide = (n + sliders.length) % sliders.length;
        sliders[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    // Initially, show the first slide
    showSlide(currentSlide);

    // Automatically switch to the next slide every 3 seconds (3000 milliseconds)
    setInterval(nextSlide, 3000);


    // ===================================================================================

    const form = document.getElementById("form");
const slides = form.querySelectorAll(".slid");
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    slides.forEach((slide, i) => {
        if (i === currentIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// Initial display
showSlide(currentIndex);

// Automatic slideshow
setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 3000); // Change the interval as needed (in milliseconds)





// ==============================================================================

