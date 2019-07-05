//js-tilt

$('.js-tilt').tilt({
    maxTilt: 2,
    easing: "cubic-bezier(.03,.98,.52,.99)",
})

$('.js-tilt-glare').tilt({
    glare: true,
    maxGlare: .3,
    maxTilt: 2,
    easing: "cubic-bezier(.03,.98,.52,.99)",
})

// particleground

particleground(document.getElementById('particle'), {
    dotColor: '#D0542A',
    lineColor: '#2B2B2B',
    minSpeedX: 0.01,
    maxSpeedX: 0.2,
    minSpeedY: 0.01,
    maxSpeedY: 0.2,
    directionX: 'center',
    directionY: 'center',
    density: 5500,
    particleRadius: 5,
    proximity: 80,
    parallaxMultiplier: 15,
});

// Scroll Magic

// init controller
// var controller = new ScrollMagic.Controller();

// lock navigation

// var scene00 = new ScrollMagic.Scene({
//     triggerElement: "nav",
//     triggerHook: 0
// })
//     .setPin("nav");
//     scene00.addTo(controller);