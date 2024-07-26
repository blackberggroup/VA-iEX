// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select all keynote speaker elements
    const memberCards = document.querySelectorAll(".keynote-speaker");

    // Create a GSAP timeline for staggered animations
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#iex-keynote-speakers", // The element that triggers the animation
            start: "top 70%",  // Start the animation when the top of the trigger element reaches 60% of the viewport height
            end: "top 20%",    // End the animation when the top of the trigger element reaches 20% of the viewport height
            scrub: 1,          // Smoothly animate the progress based on the scroll position
            //markers: true,     // Show markers for the start and end positions (useful for debugging)
            once: true         // Ensure the animation runs only once and does not reverse on scroll back
        }
    });

    // Add animations to the timeline with stagger
    tl.fromTo(memberCards, 
        { y: 60, opacity: 0 },  // Initial state: positioned 60px down and fully transparent
        {
            y: 0,                // End state: original position
            opacity: 1,          // End state: fully visible
            ease: 'Power1.easeOut', // Easing function for a smooth effect
            stagger: 0.15,       // Stagger the start of each animation by 0.15 seconds
        }
    );
});
