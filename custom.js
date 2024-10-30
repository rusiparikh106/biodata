const galleryRow = document.querySelector('.gallery-row');

function scrollLeft() {
    galleryRow.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    galleryRow.scrollBy({ left: 300, behavior: 'smooth' });
}

// Initialize AOS with optional settings
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: false,     // Animation occurs only once
});
