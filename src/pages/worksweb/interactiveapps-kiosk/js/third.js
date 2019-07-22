// ====================
//
//
// PELIMINARYS
//
//
// ====================

var messages = ["Phew, the sites officially ready for demolition.",
    "Demolition is the way we destory a building without using explosions!",
    "Lets move onto our next section where we can actually use it!"
]
$('#messages').chatBubble({
    messages: messages,
    typingSpeed: 40,
});

messageHide()

// ====================
//
//
// CONTENT FADE-IN
//
//
// ====================

TweenMax.to(".bld", 1, {
    'opacity': '1'
})

// TweenMax.to(".wreckingball", 0, {
// ,
//     onComplete:function(){
//         $(this.target).removeClass("hide")
//     }
// })

// ====================
//
//
// WRECKING-BALL SWING-IN
//
//
// ====================

var wrekTL = new TimelineMax({
    onComplete:function(){
        loadNewSection('loaders/4_1.html', 'js/4_1.min.js');
    }
});

// wrekTL.from(".wreckingBall", 5, {
//     rotation: 0
// })
wrekTL.to(".wreckingBall", 2, {
    rotation: 75,
    ease:  Sine. easeInOut
})

wrekTL.to(".wreckingBall", 2, {
    rotation: -75,
    ease:  Sine. easeInOut
})

wrekTL.to(".wreckingBall", 2, {
    rotation: 35,
    ease:  Sine. easeInOut
})

wrekTL.to(".wreckingBall", 2, {
    rotation: -35,
    ease:  Sine. easeInOut
});
wrekTL.to(".wreckingBall", 2, {
    rotation: 15,
    opacity:0,
    ease:  Sine. easeInOut
})

wrekTL.play();
// TweenMax.to('.wreckingball', 3, {
//   
//     'opacity':'0',
//     onComplete:function(){
//         $('.wreckingball').addClass("hide")
//         loadNewSection('loaders/4_1.html', 'js/4_1.min.js')
//     }
// })d

