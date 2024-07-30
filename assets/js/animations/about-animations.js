// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select the images
    const image1 = document.querySelector('#about-image-1');
    const image2 = document.querySelector('#about-image-2');

    // Create a GSAP animation for image1
    gsap.to(image1, {
        y: -100,               // Move the image up by 100 pixels
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
    gsap.to(image2, {
        y: -150,               // Move the image up by 150 pixels
        ease: "none",          // No easing, linear animation
        scrollTrigger: {
            trigger: ".iex-about__image", // The element that triggers the animation
            start: "top 90%",  // Start the animation when the top of the trigger element reaches 80% of the viewport height
            end: "bottom top", // End the animation when the bottom of the trigger element reaches the top of the viewport
            scrub: true,       // Smoothly animate the progress based on the scroll position
            //markers: true      // Show markers for the start and end positions (useful for debugging)
        }
    });
});