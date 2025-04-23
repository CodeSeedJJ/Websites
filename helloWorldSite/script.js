// Get the FLASHBANG button element
const flashbangBtn = document.getElementById('flashbangBtn');

// Add an event listener for the button click
flashbangBtn.addEventListener('click', function() {
    // Make the page go white
    document.body.style.transition = 'background-color 0.5s ease'; // Smooth transition for background change
    document.body.style.backgroundColor = 'white'; // Change background to white

    // After 1.5 seconds, return to the dark background
    setTimeout(function() {
        document.body.style.backgroundColor = '#000000'; // Change back to black
    }, 700); // 700ms = 0.7 seconds
});
