document.addEventListener("DOMContentLoaded", function () {
    const seasons = ["relic-recovery", "rover-ruckus", "skystone", "ultimate-goal", "freight-frenzy", "powerplay", "centerstage", "into-the-deep"];
    const seasonCards = document.querySelectorAll(".season-card");
    
    seasonCards.forEach(card => {
        card.addEventListener("click", function () {
            const seasonId = this.getAttribute("onclick").match(/'([^']+)'/)[1]; // Extract season ID from onclick attribute
            
            seasons.forEach(season => {
                const content = document.getElementById(season);
                if (content) {
                    content.style.display = (season === seasonId) ? "flex" : "none"; // Show only the clicked season
                }
            });
        });
    });
});
