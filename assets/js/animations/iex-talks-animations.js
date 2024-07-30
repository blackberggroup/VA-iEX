// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select the images
    const image1 = document.querySelector('#talks-image-1');
    const image2 = document.querySelector('#talks-image-2');

    // Create a GSAP animation for image1
    gsap.to(image1, {
        y: 40,               // Move the image up by 100 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".iex-talks__image", // The element that triggers the animation
            start: "top 100%",  // Start the animation when the top of the trigger element reaches 90% of the viewport height
            end: "bottom top", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });

    // Create a GSAP animation for image2
    gsap.to(image2, {
        y: -60,               // Move the image up by 150 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".iex-talks__image", // The element that triggers the animation
            start: "top 100%",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
            end: "bottom top", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });
});