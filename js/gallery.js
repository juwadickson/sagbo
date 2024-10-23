const wrapper = document.querySelector('.gallery-wrapper');
    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function glideSlides() {
        currentSlide = (currentSlide + 1) % totalSlides;
        wrapper.style.transform = `translateX(-${currentSlide * (100 / 3)}%)`;
    }

    setInterval(glideSlides, 3000); // Slide every 3 seconds

    // Pause on hover
    let interval = setInterval(glideSlides, 3000);
    const galleryContainer = document.querySelector('.gallery-container');
    
    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    galleryContainer.addEventListener('mouseleave', () => {
        interval = setInterval(glideSlides, 3000);
    });