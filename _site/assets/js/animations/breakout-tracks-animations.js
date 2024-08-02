// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize Splitting.js to split text into individual words or characters
    Splitting();

    // Select all elements with the class "word"
    const words = document.querySelectorAll(".word");

    // Create a timeline for the words animation tied to scroll
    const wordsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#breakout-tracks-row", // The element that triggers the animation
            start: "top bottom",       // Start the animation when the top of the trigger element hits the bottom of the viewport
            end: "top 50%",                 // End the animation when the top of the trigger element hits 80% of the viewport height
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

    // Create a separate timeline for the topics animation
    const topicsTimeline = gsap.timeline({
        paused: true  // Start paused, will play after words animation completes
    });

    // Animate the topics (not tied to scroll)
    topicsTimeline.fromTo('.topic', 
        { scale: 0.85, opacity: 0 },  // Initial state: scaled down and fully transparent
        {
            scale: 1,                // End state: original size
            opacity: 1,              // End state: fully visible
            ease: 'Power1.easeOut',   // Easing function for a smooth effect
            stagger: 0.25            // Stagger the start of each animation by 0.15 seconds
        }
    );

    // Trigger the topics animation after the words animation completes
    ScrollTrigger.create({
        trigger: "#breakout-tracks-row",
        start: "top 80%",           // Adjust the start point as needed
        onEnter: () => topicsTimeline.play(), // Play the topics animation when the words animation completes
        once: true                   // Ensure it only happens once
    });

    // Create a GSAP animation for image2
    gsap.to(".parallax-content img", {
        y: 100,               // Move the image up by 150 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".parallax-content", // The element that triggers the animation
            start: "top 65%",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
            end: "bottom top+=200", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });

});
