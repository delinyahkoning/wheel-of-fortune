const activity = document.getElementById("activity");
const duration = document.getElementById("duration");
const quote = document.getElementById("quote");

document.getElementById("spinButton").addEventListener("click", () => {

    activity.textContent = "Coming in Phase 2";
    duration.textContent = "-";
    quote.textContent = "The wheel isn't built yet.";

});
