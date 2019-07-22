// ====================
//
//
// PELIMINARYS
//
//
// ====================

var hazards = 0;

function hazardRemoval(){
    hazards ++
    console.log('Hazards:', hazards, '| 3')
    if (hazards == 3) {
        console.log("Level Complete")
        TweenMax.to(".buildingTest", 1, {
            'delay': '1',
            'opacity': '0', 
            onComplete:function(){
                loadNewSection("loaders/third.html", "js/third.min.js")
            }
        })
    }
}
var messages = ["Now that we've cleared the trash we need to check the area for hazardous materials.",
"These materials can be dangerous to workers and people within the vicinity of our construction site!",
"Normally we would hire a team to take care of this, but today we want you to clean it up. I just spotted some Asbestos on some of the construction beams!",
"Click the Abestos to get rid of it and we can move on to our next step!"
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

TweenMax.to(".buildingTest", 1, {
    'delay': '1',
    'opacity': '1'
})

TweenMax.to(".abestos", 1, {
    'delay': '2',
    'opacity': '1'
})

// ====================
//
//
// SOUND CONTENT
//
//
// ====================

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '../sounds/squish.wav');

audioElement.addEventListener('ended', function() {
    this.pause();
}, false);

audioElement.addEventListener("canplay",function(){
});

audioElement.addEventListener("timeupdate",function(){
    $("#currentTime").text("Current second:" + audioElement.currentTime);
});


$('.abestos').click(function() {
    audioElement.play();
});

// ====================
//
//
// ABESTOS REMOVAL
//
//
// ====================

$('.ab1').click(function () {
    $('.ab1').css({
        'opacity': '0',
        'transition': 'ease-out 2s',
        'width' : '50px'
    })

    hazardRemoval()
})

$('.ab2').click(function () {
    $('.ab2').css({
        'opacity': '0',
        'transition': 'ease-out 2s',
        'width' : '50px'
    })

    hazardRemoval()
})

$('.ab3').click(function () {
    $('.ab3').css({
        'opacity': '0',
        'transition': 'ease-out 2s',
        'width' : '50px'
    })

    hazardRemoval()
})