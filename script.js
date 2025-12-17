// Get all sound buttons
const soundButtons = document.querySelectorAll(".sound-button");

// Add click event listeners to all buttons
soundButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const soundFile = this.getAttribute("data-sound");
        playSound(soundFile);

        // Add a visual feedback effect
        const circle = this.querySelector(".button-circle");
        circle.style.transition = "all 0.05s ease";

        // Reset animation
        setTimeout(() => {
            circle.style.transition = "all 0.1s ease";
        }, 50);
    });
});

// Function to play sound
function playSound(soundFile) {
    // Create a new audio element
    const audio = new Audio(soundFile);

    // Handle error if file doesn't exist yet
    audio.addEventListener("error", function () {
        console.log(`Audio file not found: ${soundFile}`);
        console.log(
            "Placeholder sound would play here when audio files are added."
        );
    });

    // Play the audio
    audio.play().catch((error) => {
        console.log("Audio playback failed:", error);
    });
}

// Optional: Add keyboard support
document.addEventListener("keydown", function (event) {
    const keyMap = {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 5,
        7: 6,
        8: 7,
        9: 8,
    };

    if (keyMap.hasOwnProperty(event.key)) {
        const buttonIndex = keyMap[event.key];
        soundButtons[buttonIndex].click();
    }
});
