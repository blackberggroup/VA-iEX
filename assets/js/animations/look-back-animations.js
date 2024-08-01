gsap.registerPlugin(ScrollTrigger);

gsap.to(".look-back-animation", {
    scrollTrigger: {
        trigger: ".look-back-animation",
        toggleActions: "restart none none none"
    },
    y: -50,
    duration: 3
});