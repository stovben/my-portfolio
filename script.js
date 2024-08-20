document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const slides = images.querySelectorAll('.carousel-slide');
    const nextBtn = carousel.querySelector('.next');
    const prevBtn = carousel.querySelector('.prev');

    let index = 0;

    function showSlide(newIndex) {
        if (newIndex >= slides.length) {
            index = 0; // Loop to the start
        } else if (newIndex < 0) {
            index = slides.length - 1; // Loop to the end
        } else {
            index = newIndex;
        }
        images.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        showSlide(index + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(index - 1);
    });

    // Optional: Auto-slide
    setInterval(() => {
        showSlide(index + 1);
    }, 5000); // Change slide every 5 seconds
});
