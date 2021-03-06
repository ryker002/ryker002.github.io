// ====================
//
//
// PELIMINARYS
//
//
// ====================

$('.intro_trashcan').click(function () {
    console.log($0.getBoundingClientRect())
})
var score = 0;

function trashCollection() {
    score++
    console.log('Score:', score, '| 4')
    if (score == 4) {
        console.log("Level Complete")
        TweenMax.to(".buildingTest", 1, {
            'delay': '1',
            'opacity': '0', 
            onComplete:function(){
                loadNewSection("loaders/second.html", "js/second.min.js")
            }
        })
        
    }
}

var messages = ['<h1>Heya!</h1> Welcome to the Construction Zone!', 
'Before we begin with the demolition of the building we need to remove the trash and facilities in the construction zone.',
'In order to get rid of the trash simply <strong>drag the items to the trashcan</strong> at the bottom right of our workzone!']
$('#messages').chatBubble({
    messages: messages,
    typingSpeed: 80,
    delay:1
});

messageHide()

// ====================
//
//
// CONTENT FADE-IN
//
//
// ====================

TweenMax.to(".buildingTest", 3, {
    'delay': '1',
    'opacity': '1'
})
TweenMax.to("._001", 1, {
    'delay': '1',
    'opacity': '1'
})
TweenMax.to("._002", 1, {
    'delay': '1',
    'opacity': '1'
})
TweenMax.to("._003", 1, {
    'delay': '1',
    'opacity': '1'
})
TweenMax.to("._004", 1, {
    'delay': '1',
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
    audioElement.setAttribute('src', '../sounds/Plop.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.pause();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
    $('.trash').click(function() {
        audioElement.play();
    });


// ====================
//
//
// DRAGGABLE CONTENT
//
//
// ====================

Draggable.create('._001', {
    bounds: ".sec_fill",
    onDragStart:function(){
       
    },
    onRelease: function () {
        
        // console.log('Potty: ', this,)
        if (this.hitTest(".intro_trashcan")) {
            audioElement.play();
            Draggable.get(this.target).disable()
            TweenLite.to(this.target, 0.25, {
                x: 1200,
                y: 10
            });
            $('._001').css({
                'opacity': '0',
                'transition': 'ease-out 2s'
            })
            trashCollection();
        }
    }
})

Draggable.create('._002', {
    bounds: ".sec_fill",
    onRelease: function () {
        // console.log('Balloon: ', this,)
        if (this.hitTest(".intro_trashcan")) {
            audioElement.play();
            Draggable.get(this.target).disable()
            TweenLite.to(this.target, 0.25, {
                x: 1259,
                y: 463
            });
            $('._002').css({
                'opacity': '0',
                'transition': 'ease-out 2s'
            })
            trashCollection();
        }
    }
})

Draggable.create('._003', {
    bounds: ".sec_fill",
    onRelease: function () {
        // console.log('Board: ', this,)
        if (this.hitTest(".intro_trashcan")) {
            audioElement.play();
            Draggable.get(this.target).disable()
            TweenLite.to(this.target, 0.25, {
                x: 804,
                y: -26
            });
            $('._003').css({
                'opacity': '0',
                'transition': 'ease-out 2s'
            })
            trashCollection();
        }
    }
})

Draggable.create('._004', {
    bounds: ".sec_fill",
    onRelease: function () {
        // console.log('Box: ', this,)
        if (this.hitTest(".intro_trashcan")) {
            audioElement.play();
            Draggable.get(this.target).disable()
            TweenLite.to(this.target, 0.25, {
                x: 979,
                y: 394
            });
            $('._004').css({
                'opacity': '0',
                'transition': 'ease-out 2s'
            })
            trashCollection();
        }
    }
})