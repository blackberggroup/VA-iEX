// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    gsap.from("#iex-talks-grid-row h3", {
        y: '110%',
        opacity: 0,
        rotationZ: '10',
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: "#iex-talks-grid-row h3", // The element that triggers the animation
            start: "top 5%",       // Start the animation when the top of the element is 66% down from the top of the viewport
            end: "+=100", 
            scrub: false,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });
    
        // Create a GSAP animation for image1
        gsap.to("#talks-image-1", {
            y: 100,               // Move the image up by 100 pixels
            ease: "none",          // No easing, linear animation
            scrollTrigger: {
                trigger: ".iex-talks__image", // The element that triggers the animation
                start: "top 90%",  // Start the animation when the top of the trigger element reaches 90% of the viewport height
                end: "1000px", // End the animation when the bottom of the trigger element reaches the top of the viewport
                scrub: true,       // Smoothly animate the progress based on the scroll position
                //markers: true      // Show markers for the start and end positions (useful for debugging)
            }
        });
    
        // Create a GSAP animation for image2
        gsap.to("#talks-image-2", {
            y: 75,               // Move the image up by 150 pixels
            ease: "none",          // No easing, linear animation
            scrollTrigger: {
                trigger: ".iex-talks__image", // The element that triggers the animation
                start: "top 90%",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
                end: "1000px", // End the animation when the bottom of the trigger element reaches the top of the viewport
                scrub: true,       // Smoothly animate the progress based on the scroll position
                //markers: true      // Show markers for the start and end positions (useful for debugging)
            }
        });
});
