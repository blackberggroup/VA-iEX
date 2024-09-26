// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    gsap.from("#iex-registration-grid-row h3", {
        y: '110%',
        opacity: 0,
        rotationZ: '10',
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: "#iex-registration-grid-row", // The element that triggers the animation
            start: "top bottom",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
            end: "+=100", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: false,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });
      
    // Initialize Splitting.js to split text into individual words or characters
    Splitting();

    // Select all elements with the class "word"
    const words = document.querySelectorAll("#iex-registration .word");

    // Create a timeline for the words animation tied to scroll
    const wordsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#iex-registration-grid-row", // The element that triggers the animation
            start: "top 50%",       // Start the animation when the top of the trigger element hits the bottom of the viewport
            end: "top 10%",                 // End the animation when the top of the trigger element hits 80% of the viewport height
            scrub: true,                    // Scrub only the word animation based on scroll position
            //markers: true,                // Show markers for the start and end positions (useful for debugging)
            once: true                      // Ensure the animation runs only once and does not reverse on scroll back
        }
    });

    // Animate the words (scrubbed by scroll)
    wordsTimeline.fromTo(words, 
        { opacity: 0.1 },  // Initial state: slightly visible
        {
            ease: "none",  // No easing, linear animation
            opacity: 1,    // End state: fully visible
            stagger: 0.05  // Stagger the animation by 0.05 seconds for each word
        }
    );
});