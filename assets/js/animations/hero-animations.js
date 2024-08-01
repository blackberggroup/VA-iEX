// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

        document.querySelector('.iex-hero').classList.remove('loading');

        // Initialize GSAP timeline
        const tl = gsap.timeline();

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

    document.querySelector('#iex-hero').addEventListener('mouseenter', function(event) {
        // Add the mousemove event listener when the mouse enters the element
        document.addEventListener('mousemove', onMouseMove);
    });
    
    document.querySelector('#iex-hero').addEventListener('mouseleave', function() {
        // Remove the mousemove event listener when the mouse leaves the element
        document.removeEventListener('mousemove', onMouseMove);
    
        // Reset the element's rotation when the mouse leaves
        gsap.to('#iex-hero', {
            duration: 0.6,
            rotationY: 0,
            rotationX: 0,
            ease: 'power1.out'
        });
    });
    
    function onMouseMove(event) {
        var x = (event.clientX / window.innerWidth) - 0.5;
        var y = (event.clientY / window.innerHeight) - 0.5;
    
        gsap.to('#iex-hero', {
            duration: 0.6,
            rotationY: 5 * x,
            rotationX: 5 * y,
            ease: 'power1.out',
            transformPerspective: 300,
            transformOrigin: "center"
        });
    }
    
    
    
});
