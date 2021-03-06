// ====================
//
//
// PELIMINARYS
//
//
// ====================

var messages = ['Great! Now its time to demolish a building!',
    'There are two spots on this building, here let me highlight those for you.',
    'Click on one and lets see what happens! Remember, location is important. You want to knock down the whole building!'
]
$('#messages').chatBubble({
    messages: messages,
    typingSpeed: 90,
});

messageHide()

// ====================
//
//
// CONTENT FADE-IN
//
//
// ====================

TweenMax.to(".c1", 1, {
    'delay': '4',
    'opacity': '1'
})

TweenMax.to(".c2", 1, {
    'delay': '5',
    'opacity': '1'
})

// ====================
//
//
// CIRCLE BUTTONS
//
//
// ====================

var $cir2 = $('.c1')
var $cir1 = $('.c2')

$cir1.click(function(){
    swingBall('100px', "one");
    $cir1.addClass("hide");
})
function swingBall(_shift, _circle){

    $('.wreckingBall').css({
        'opacity':'1',
    })
    var wrekTL = new TimelineMax();
    wrekTL.to(".wreckingBall", 2, {
        rotation: 75,
        ease:  Sine. easeInOut,
        onComplete:function(){
            $('.wreckingBall').css({
                'left':_shift,
            });
            if (_circle == "one"){
                c1bld.play();
            } else {
                c2bld.play();
            }
            
        }
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
        ease:  Sine. easeInOut
    })
    wrekTL.to(".wreckingBall", 2, {
        rotation: 0,
        ease:  Sine. easeInOut
    })
    wrekTL.play();
}

$cir2.click(function(){
    swingBall('500px', "two");
});


// ====================
//
//
// CIRCLE 1 ANIMATIONS
//
//
// ====================

var c1bld = new TimelineLite({
    paused: true,
    onComplete:inCorrect
})

c1bld.to('.bar2', .4, {
    delay:1.125,
    rotation: 90,
    ease: Sine.easeOut
})
.to('.bar2', .1, {
    rotation: 86,
})
.to('.bar2', .1, {
    rotation: 90,
})


// ====================
//
//
// CIRCLE 2 ANIMATIONS
//
//
// ====================


var c2bld = new TimelineLite({
    paused: true,
    repeat: 0,
    yoyo: false,
    onComplete:correct
})

c2bld.from('.bar3', 1, {
    rotation: 0
})
.to('.bar3', .5, {
    rotation: 80,
    y: 200
})

.from('.bar2', 0, {
    rotation: 0
})

.to('.bar2', .15, {
    rotation: 80,
    y: 200
})

.from('.hbar2', 0, {
    rotation: 0
})

.to('.hbar1', .25, {
    y: 400
})
.from('.bar3', 0, {
    rotation: 0,

})
.to('.bar3', .25, {
    rotation: 80,
    x: 300
})
.from('.bar4', .0, {
    rotation: 0
})

.to('.bar4', .25, {
    rotation: 90,
    y: 550
})

.from('.hbar2', .0, {
    rotation: 0
})

.to('.hbar2', .25, {
    rotation: 0,
    y: 800
})
.from('.bar5', 0, {
    rotation: 0
})
.to('.bar5', .25, {
    rotation: 90,
    y: 600
})

// ====================
//
//
// RESET
//
//
// ====================

function correct(){
    $('.c2').addClass("hide");
    $('.c1').addClass("hide");
    TweenMax.to(".buttongo", 2, {
        'delay': '3',
        'opacity': '1'
    })
}

function inCorrect(){
    $('.c2').addClass("hide");
    TweenMax.to(".buttonreset", 2, {
        'delay': '3',
        'opacity': '1'
    })
}



var $btnrst = $('.buttonreset')
$btnrst.click(function(){
    c1bld.reverse();
    $('.c2').addClass("hide");
    $('.buttonreset').addClass("hide");
})

$('.buttongo').click(function(){
    c2bld.reverse();
    TweenMax.to(".wreckingBall", 3, {
        'delay': '1',
        'opacity': '0'
    })

    TweenMax.to(this, 2, {
        'delay': '1',
        'opacity': '0',
        onComplete: function () {
            loadNewSection('loaders/4_2.html', 'js/4_2.min.js')
        }
    })
})