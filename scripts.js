// GSAP Animations
gsap.from('header', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
gsap.from('.content', { 
    duration: 1, 
    opacity: 0, 
    y: 50, 
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.content',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});
gsap.from('.timeline-item', { 
    duration: 1, 
    opacity: 0, 
    x: -100, 
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.timeline-item',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});
gsap.from('.project', { 
    duration: 1, 
    opacity: 0, 
    y: 50, 
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.project',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});
