// ====================
//
//
// PELIMINARYS
//
//
// ====================

var messages = ['Great job! You successfully demolished this building! We went ahead and rebuilt for the next part!',
    'We are gonna use Implosion this time! This involves explosions, we will mark where you should safely put dynamite.',
    'Once you place it in all the right spots, click on that GO button down there and watch the magic!'
]
$('#messages').chatBubble({
    messages: messages,
    typingSpeed: 40,
});

messageHide()

var dynamite = 0

function dyninc() {
    dynamite++
    console.log(dynamite)
    if (dynamite == 3) {
        TweenMax.to(".buttongo", 2, {
            'delay': '1',
            'opacity': '1'
        })
    }
}

// ====================
//
//
// CONTENT FADE-IN
//
//
// ====================

TweenMax.to(".d1", 1, {
    'delay': '.5',
    'opacity': '1'
})

TweenMax.to(".d2", 1, {
    'delay': '1',
    'opacity': '1'
})

TweenMax.to(".d3", 1, {
    'delay': '1.5',
    'opacity': '1'
})

// ====================
//
//
// DYNAMITE FADE IN
//
//
// ====================

$('.d1').click(function () {
    TweenMax.to('.dyn1', 1, {
        'opacity': '1'
    })
    audioElement2.play();
    dyninc()
    TweenMax.to(".d1", 1, {
        'delay': '.5',
        'opacity': '0'
    })
    $(this.target).addClass("hide");
})

$('.d2').click(function () {
    TweenMax.to('.dyn2', 1, {
        'opacity': '1'
    })
    audioElement2.play();
    dyninc()
    TweenMax.to(".d2", 1, {
        'delay': '.5',
        'opacity': '0'
    })
    $(this.target).addClass("hide");
})

$('.d3').click(function () {
    TweenMax.to('.dyn3', 1, {
        'opacity': '1'
    })
    audioElement2.play();
    dyninc()
    TweenMax.to(".d3", 1, {
        'delay': '.5',
        'opacity': '0'
    })
    $(this.target).addClass("hide");
})
// ====================
//
//
// SOUND CONTENT
//
//
// ====================

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '../sounds/boom.wav');

audioElement.addEventListener('ended', function () {
    this.pause();
}, false);

audioElement.addEventListener("canplay", function () {});

audioElement.addEventListener("timeupdate", function () {
    $("#currentTime").text("Current second:" + audioElement.currentTime);
});

var audioElement2 = document.createElement('audio');
audioElement2.setAttribute('src', '../sounds/anvil.wav');

audioElement2.addEventListener('ended', function () {
    this.pause();
}, false);

audioElement2.addEventListener("canplay", function () {});

audioElement2.addEventListener("timeupdate", function () {
    $("#currentTime").text("Current second:" + audioElement2.currentTime);
});

function soundActivate() {
    audioElement.play();
    console.log("Pickles")
}
// ====================
//
//
// EXPLOSIONS
//
//
// ====================
new TweenMax.from('body', .2, {
    opacity: 0,
    onComplete: function () {
        console.log("comp, a;lsdk fas;d a;sdfklj as; ")
    }

})

var kaboom = new TimelineLite({
    paused: true,
    repeat: 0,
    yoyo: false,
    onComplete: function () {
        new Audio('sounds/fall.wav').play();
    }
})


kaboom.from('.exp3', 1, {
        opacity: 0
    })
    .to('.dyn3', 0, {
        opacity: 0
    })
    .to('.exp3', 1.2, {
        opacity: 1,
        scale: 1.2,
        onComplete: soundActivate
    })
    .to('.exp3', .4, {
        opacity: 0
    })
    .to('.dyn2', 0, {
        opacity: 0
    })
    .from('.exp2', 0, {
        opacity: 0
    })
    .to('.exp2', .2, {
        opacity: 1,
        scale: 1.2,
        onComplete: soundActivate
    })
    .to('.exp2', 0.8, {
        opacity: 0
    })
    .to('.dyn1', 0, {
        opacity: 0
    })
    .from('.exp1', 0, {
        opacity: 0
    })
    .to('.exp1', .3, {
        opacity: 1,
        scale: 1.2,
        onComplete: soundActivate
    })
    .to('.exp1', 0.8, {
        opacity: 0
    })



function buildingfall() {
    TweenMax.from('.bar1', 0, {
        y: 0
    })
    TweenMax.to('.bar1', 5, {
        'delay': '3',
        y: 1000
    })
    TweenMax.from('.bar2', 0, {
        y: 0
    })
    TweenMax.to('.bar2', 5, {
        'delay': '3',
        y: 1000
    })
    TweenMax.from('.hbar1', 0, {
        y: 0
    })
    TweenMax.to('.hbar1', 5, {
        'delay': '3',
        y: 1000
    })
    TweenMax.from('.bar3', 0, {
        y: 0
    })
    TweenMax.to('.bar3', 5, {
        'delay': '3',
        y: 1000
    })
    TweenMax.from('.bar4', 0, {
        y: 0
    })
    TweenMax.to('.bar4', 5, {
        'delay': '3',
        y: 1000
    })
    TweenMax.from('.hbar2', 0, {
        y: 0
    })
    TweenMax.to('.hbar2', 5, {
        'delay': '3',
        y: 1000
    })
    TweenMax.from('.bar5', 0, {
        y: 0
    })
    TweenMax.to('.bar5', 5, {
        'delay': '3',
        y: 1000
    })
}
$('.buttongo').click(function () {
    console.log("test")
    kaboom.play(2)
    // bldfall.play()
    buildingfall()
    TweenMax.to(this, 2, {
        'delay': '6',
        'opacity': '0',
        onComplete: function () {
            loadNewSection('loaders/final.html', 'js/final.min.js')
        }
    })

})