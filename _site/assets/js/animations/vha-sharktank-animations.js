document.addEventListener('DOMContentLoaded', function() {

    gsap.from("#iex-shark-tank-grid-row h3", {
        y: '110%',
        opacity: 0,
        rotationZ: '10',
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: "#iex-shark-tank-grid-row", // The element that triggers the animation
            start: "top bottom+=100",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
            end: "+=100", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: false,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });

    // Create a GSAP animation for image1
    gsap.to("#shark-image-1", {
        y: 75,               // Move the image up by 100 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".iex-shark__image", // The element that triggers the animation
            start: "top 100%",  // Start the animation when the top of the trigger element reaches 90% of the viewport height
            end: "bottom top", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });

    // Create a GSAP animation for image2
    gsap.to('#shark-image-2', {
        y: 100,               // Move the image up by 150 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".iex-shark__image", // The element that triggers the animation
            start: "top 100%",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
            end: "bottom top", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });
});