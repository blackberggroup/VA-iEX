// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Create a GSAP animation for image1
    gsap.to("#about-image-1", {
        y: 100,               // Move the image up by 100 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".iex-about__image", // The element that triggers the animation
            start: "top 90%",  // Start the animation when the top of the trigger element reaches 90% of the viewport height
            end: "bottom top", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });

    // Create a GSAP animation for image2
    gsap.to("#about-image-2", {
        y: 75,               // Move the image up by 150 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".iex-about__image", // The element that triggers the animation
            start: "top 90%",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
            end: "bottom top", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });

    // Initialize Splitting.js to split text into individual words or characters
    Splitting();

    // Select all elements with the class "word"
    const words = document.querySelectorAll("#iex-about .word");

    // Create a timeline for the words animation tied to scroll
    const wordsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#iex-about-grid-row", // The element that triggers the animation
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