document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.testimonial-slider');
    let isHovered = false;
    let currentIndex = 0;
    const items = document.querySelectorAll('.testimonial-item');
    const totalItems = items.length;

    // Set up automatic sliding
    function glideSlider() {
        if (!isHovered) {
            currentIndex++;
            if (currentIndex >= totalItems / 3) {
                currentIndex = 0; // Reset when all items are shown
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    // Interval to slide every 3 seconds
    let glideInterval = setInterval(glideSlider, 5000);

    // Pause sliding on hover
    slider.addEventListener('mouseover', function () {
        isHovered = true;
    });

    // Resume sliding on mouse out
    slider.addEventListener('mouseout', function () {
        isHovered = false;
    });
});
