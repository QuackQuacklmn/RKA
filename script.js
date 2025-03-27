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



