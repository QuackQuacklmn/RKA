document.addEventListener("DOMContentLoaded", function () {
    const seasons = ["Relic Recovery", "Rover Ruckus","Skystone", "Ultimate_Goal", "Freight_Frenzy","Powerplay", "Centerstage", "Into_The_Deep"]; // Add all seasons
    seasons.forEach(season => {
        const button = document.getElementById(`toggle-${season}`);
        const content = document.getElementById(`content-${season}`);
        
        if (button && content) {
            button.addEventListener("click", function () {
                content.style.display = (content.style.display === "none") ? "block" : "none";
            });
        }
    });
});

// Select all images in the gallery
const images = document.querySelectorAll(".photogallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

// Open Lightbox when an image is clicked
images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImage.src = image.src; // Set lightbox image source
    });
});

// Close Lightbox when clicking anywhere outside the image
lightbox.addEventListener("click", (event) => {
    if (event.target !== lightboxImage) { // Only close if clicking outside image
        lightbox.classList.remove("active");
    }
});


