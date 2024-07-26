// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
        duration: 1.2,       // The duration of the scrolling effect in seconds
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Easing function for a smooth effect
        smooth: true,        // Enable smooth scrolling
    });

    // Event listener for Lenis scroll events, logging the event for debugging
    lenis.on('scroll', (e) => {
        //console.log(e);
    });

    // Ensure ScrollTrigger updates on Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's raf (request animation frame) to the GSAP ticker
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000); // Convert time to milliseconds
    });

    // Disable GSAP's lag smoothing to ensure smooth animations
    gsap.ticker.lagSmoothing(0);

    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

});
