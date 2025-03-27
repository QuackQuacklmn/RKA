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

<script>
document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropbtn");
    let dropdownMenu = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
</script>


