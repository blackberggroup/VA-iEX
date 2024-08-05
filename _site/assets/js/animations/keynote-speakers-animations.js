// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select all keynote speaker elements
    const memberCards = document.querySelectorAll(".keynote-speaker");

    // Ensure memberCards is not empty
    if (memberCards.length > 0) {
        // Create a GSAP timeline for staggered animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#grid-row-keynote", // The element that triggers the animation
                start: "top 0%",  // Start the animation when the top of the trigger element reaches the bottom minus 800px
                end: "bottom top",    // End the animation when the top of the trigger element reaches 60% of the viewport height
                scrub: 1,          // Smoothly animate the progress based on the scroll position
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
                stagger: 0.2,       // Stagger the start of each animation by 0.15 seconds
            }
        );
    }

    // Ripple effect on button hover
    document.querySelector('.usa-accordion__button').addEventListener('mouseenter', function(e) {
        gsap.fromTo('.usa-accordion__button .ripples', {
            border: '2px solid #fff',
            left: e.offsetX,
            top: e.offsetY,
            height: 0,
            width: 0,
            opacity: 1,
        }, {
            border: '0px solid #fff',
            height: 60,
            width: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
});



function toggleButtonText() {
    var button = document.getElementById('toggleButton');
    if (button.innerText === "View All Speakers") {
        button.innerText = "See Less Speakers";
    } else {
        button.innerText = "View All Speakers";
    }
}
