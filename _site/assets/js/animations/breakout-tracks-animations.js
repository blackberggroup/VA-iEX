// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize Splitting.js to split text into individual words or characters
    Splitting();

    // Select all elements with the class "word"
    const words = document.querySelectorAll(".word");

    // Create a GSAP animation that fades in the words
    gsap.fromTo(words, 
        { opacity: 0.1 },  // Initial state: slightly visible
        {
            ease: "none",  // No easing, linear animation
            opacity: 1,    // End state: fully visible
            stagger: 0.05, // Stagger the animation by 0.05 seconds for each word
            scrollTrigger: {
                trigger: "#breakout-tracks h2", // The element that triggers the animation
                start: "top bottom+=200",       // Start the animation when the top of the trigger element hits the bottom of the viewport
                end: "top 80%",                 // End the animation when the top of the trigger element hits 80% of the viewport height
                scrub: true,                    // Smoothly animate the progress based on the scroll position
                //markers: true,                // Show markers for the start and end positions (useful for debugging)
                once: true                      // Ensure the animation runs only once and does not reverse on scroll back
            }
        }
    );

});