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

.hero {
    position: relative;
    height: 100vh;
    background: url('images/team-photo.jpg') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
}

.hero-content {
    position: relative;
    z-index: 1;
    font-family: 'Orbitron', sans-serif;
}
