// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select the element you want to animate
    const box = document.querySelector('.box');

    // Create a ScrollTrigger animation
    gsap.to(box, {
        scrollTrigger: {
            trigger: box,
            start: "top 80%",  // When the top of the box reaches 80% of the viewport height
            end: "top 30%",    // When the top of the box reaches 30% of the viewport height
            scrub: true,       // Smoothly animate as you scroll
            markers: true      // Show start and end markers (for debugging)
        },
        x: 500,               // Animation properties
        rotation: 360,
        duration: 3
    });
});
