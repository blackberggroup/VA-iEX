// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

        document.querySelector('.iex-hero').classList.remove('loading');

        // Initialize GSAP timeline
        const tl = gsap.timeline({
            onComplete: function() {
                // Add the event listeners once the timeline animation is complete
                addInteractionListeners();
            }
        });

        tl.to('.x-logo', {duration: .3, scale:1, opacity: 1, ease: 'power4.out'});
        tl.to('.e-logo', {duration: .3, scale:1, opacity: 1, ease: 'power4.out'});
        tl.to('.i-logo', {duration: .3, scaleY:1, opacity: 1, ease: 'power4.out'});

        tl.add(() => {

            gsap.to(['.image-left'], {
                duration: 1.5,
                x: '0%',
                opacity: 1,
                ease: 'power4.out',
                stagger: 0.2 
            },);  

            gsap.to(['.image-right'], {
                duration: 1.5,
                x: '0%',
                opacity: 1,
                ease: 'power4.out',
                stagger: 0.2 
            },);  

            gsap.to(['.bar-gradient'], {
                duration: 1.5, 
                scaleX: 1, 
                opacity: 1,
                ease: 'power4.out'
            },);  

            gsap.to('#iex-hero h1', {
                duration: .75,
                opacity: 1,
                delay: .75,
                y: 0, 
                ease: 'power2.out'
            });

            gsap.to('#iex-hero h2', {
                duration: .75, 
                opacity: 1,
                delay: 1,
                y: 0,
                ease: 'power2.out'
            });
        });

        tl.add(() => {
            gsap.to('#iex-hero h1', {
                duration: 1,  
                opacity: 1,
                y: 0, 
                ease: 'power2.out' 
            });

            gsap.to('#iex-hero h2', {
                duration: 1,  
                opacity: 1,
                delay: .25,
                y: 0, 
                ease: 'power2.out' 
            });
    });
    
    function onMouseMove(event) {
        var x = (event.clientX / window.innerWidth) - 0.5;
        var y = (event.clientY / window.innerHeight) - 0.5;
    
        gsap.to('#iex-hero .grid-container', {
            duration: 0.6,
            rotationY: 5 * x,
            rotationX: 5 * y,
            ease: 'power1.out',
            transformPerspective: 300,
            transformOrigin: "center"
        });
    }    

    function addInteractionListeners() {

        document.querySelector('#iex-hero .grid-container').addEventListener('mouseenter', function(event) {
            document.addEventListener('mousemove', onMouseMove);
        });

        document.querySelector('#iex-hero .grid-container').addEventListener('mouseleave', function() {
            document.removeEventListener('mousemove', onMouseMove);

            // Reset the element's rotation when the mouse leaves
            gsap.to('#iex-hero .grid-container', {
                duration: 0.6,
                rotationY: 0,
                rotationX: 0,
                ease: 'power1.out'
            });
        });
    }

       // Function to hide, reset, and reanimate all elements on window resize
       function hideResetReanimate() {
            // Hide and reset all elements immediately
            gsap.set('.bar-left-top', {
                x: '-96%', // Reset position for images
            });
            gsap.set('.bar-left-bottom', {
                x: '-100%', // Reset position for images
            });
            gsap.set('.bar-right-top', {
                x: '96%', // Reset position for images
            });
            gsap.set('.bar-right-bottom', {
                x: '100%', // Reset position for bars
            });
        }

    // Debounce function to delay execution until after resize ends
    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    // Handle window resize with debounce
    const handleResize = debounce(function() {
        hideResetReanimate();
    }, 100); // 250ms delay after resize ends

    window.addEventListener('resize', handleResize);

    document.querySelector('.button-register').addEventListener('mouseenter', function(e) {
        gsap.fromTo('.button-register .ripples', {
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
        })
    })

});
