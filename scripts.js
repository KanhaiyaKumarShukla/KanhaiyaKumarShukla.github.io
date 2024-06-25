// GSAP Animations
gsap.from('header', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
gsap.from('.section', {
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});
