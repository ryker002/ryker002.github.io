// ###############
//
// NAV SCROLL SETUP
//
// ###############

$("nav").find("a").click(function (e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

// ###############
//
// SCROLL MAGIC INIT
//
// ###############

var controller = new ScrollMagic.Controller();
// ###############
//
// NAV CONTROLS
//
// ###############

var navScene = new ScrollMagic.Scene({
        triggerElement: 'nav',
        triggerHook: 0
    })

    .setPin("nav");
navScene.addTo(controller);

// ###############
//
// HEADER ANIMATIONS
//
// ###############

// ########
//
// NON CONTROLLED ANIMATIONS
//
// ########

var tlhead = new TimelineMax()

tlhead.add(TweenMax.from('.alaskaHead img', .8, {
    x: -600,
    ease: Expo.easeOut
}))

tlhead.add(
    TweenMax.from('.navCircle', .6, {
            delay: .25,
            y: -800,
            ease: Elastic.easeOut.config(1, 0.3)
        },
        TweenMax.from('.textHead', .6, {
            delay: .85,
            y: -900,
            ease: Elastic.easeOut.config(1, 0.3)
        }),
        TweenMax.from('.blueColors', .6, {
            delay: .85,
            x: -1200,
            opacity: 0,
            ease: Elastic.easeOut.config(1, 0.3)
        })))

tlhead.add(
    TweenMax.from('.descriptionHead', .8, {
        delay: 1,
        x: 1200,
        ease: Expo.easeOut
    }),
    TweenMax.from('.scrollDownInd', 1.2, {
        delay: 1.4,
        y: 600,
        opacity: 0,
        ease: Expo.easeOut
    }))

// ########
//
// CONTROLLED ANIMATIONS
//
// ########

var tlheadScroll = new TimelineMax()

tlheadScroll.add(
        TweenMax.to('.navCircle', 2, {
            scale: .15,
            'left': '-1.4%',
            opacity: 0
        }))
    .add(
        TweenMax.from('nav', 2, {
            opacity: 0,
        })
    )
    .add(
        TweenMax.to('.alaskaHead img', .2, {
            x: 600
        })
    )

var sceneHeader = new ScrollMagic.Scene({
        triggerElement: 'header',
        triggerHook: 0,
        duration: '300%'
    })
    .setTween(tlheadScroll)
    .setPin('header');
sceneHeader.addTo(controller);

// ###############
//
// SCENE 1 RELIGIOUS
//
// ###############


var tlrel = new TimelineMax()


tlrel.add(TweenMax.from('.s_01header', .5, {
    scale: 10,
    x: -1200,
    opacity: 0
}))
tlrel.add(TweenMax.from('.s_01t1', .8, {
    opacity: 0,
    ease: Expo.easeIn,
}))
.add(TweenMax.to('.s_01t1', .8, {
    x: 125,
    scale: 2.5,
    y: 200,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
.add(TweenMax.to('.s_01t1', .8, {
    scale: 1,
    x: 800,
    y: 50,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
tlrel.add(TweenMax.from('.s_01t2', .8, {
    opacity: 0,
    ease: Expo.easeIn,
}))
.add(TweenMax.to('.s_01t2', .8, {
    x: 125,
    scale: 2.5,
    y: 200,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
.add(TweenMax.to('.s_01t2', .8, {
    scale: 1,
    x: 800,
    y: 50,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
tlrel.add(TweenMax.from('.s_01t3', .8, {
    opacity: 0,
    ease: Expo.easeIn,
}))
.add(TweenMax.to('.s_01t3', .8, {
    x: 125,
    scale: 2.5,
    y: 200,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
.add(TweenMax.to('.s_01t3', .8, {
    scale: 1,
    x: 800,
    y: 50,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
tlrel.add(TweenMax.from('.s_01t4', .8, {
    opacity: 0,
    ease: Expo.easeIn,
}))
.add(TweenMax.to('.s_01t4', .8, {
    x: 125,
    scale: 2.5,
    y: 200,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
.add(TweenMax.to('.s_01t4', .8, {
    scale: 1,
    x: 800,
    y: 50,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
.add(TweenMax.from('.s_01img2', 1.5, {
    x: 1600,
    ease: SlowMo.ease.config( 0.7, 0.7, false)
}))
var scene01 = new ScrollMagic.Scene({
        triggerElement: "#s_01",
        triggerHook: 0,
        duration: '300%',
    })
    .setTween(tlrel)
    .setPin('#s_01')
scene01.addTo(controller)

// ###############
//
// SCENE 2 VAUDEVILLE
//
// ###############

var tlvaud = new TimelineMax()
tlvaud.add(TweenMax.to('.vvid', 3, {
    scale: 1.2,
}))
tlvaud.add(TweenMax.from('.s_02txtline01', .5, {
    x:2200,
    ease: Power2. easeOut,
}))
.add(TweenMax.to('.s_02txtline01', .5, {
    x:-800,
    y: -500,
    scale: .25,
    ease: Power2. easeOut,
}))
tlvaud.add(TweenMax.from('.s_02txtline02', .5, {
    x:2200,
    ease: Power2. easeOut,
}))
.add(TweenMax.to('.s_02txtline02', .5, {
    x:-800,
    y: -450,
    scale: .25,
    ease: Power2. easeOut,
}))
tlvaud.add(TweenMax.from('.s_02txtline03', .5, {
    x:2200,
    ease: Power2. easeOut,
}))
.add(TweenMax.to('.s_02txtline03', .5, {
    x:-800,
    y: -300,
    scale: .25,
    ease: Power2. easeOut,
}))

var scene02 = new ScrollMagic.Scene({
    triggerElement: "#s_02",
    triggerHook: 0,
    duration: '300%',
})
.setTween(tlvaud)
.setPin("#s_02")
scene02.addTo(controller)
// ###############
//
// SCENE 3 PROHIBITION
//
// ###############

var tlpro = new TimelineMax()

tlpro.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
    'background-color': '#000',
}))
.add(TweenMax.from('.s_03scene01img01', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene01img02', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene01img03', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene01txt', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.to('.s_03scene01', 1.5, {
    x:0,
    y:0,
}))
.add(TweenMax.to('.s_03scene01', 1.5, {
    rotation: 175,
    opacity: 0,
    x: -1600,
}))


.add(TweenMax.from('.s_03scene02img02', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene02txt', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.to('.s_03scene02', 1.5, {
    x:0,
    y:0,
}))
.add(TweenMax.to('.s_03scene02', 1.5, {
    rotation: 175,
    opacity: 0,
    x: -1600,
}))


.add(TweenMax.from('.s_03scene03img01', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene03txt', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.to('.s_03scene03', 1.5, {
    x:0,
    y:0,
}))
.add(TweenMax.to('.s_03scene03', 1.5, {
    rotation: 175,
    opacity: 0,
    x: -1600,
}))


.add(TweenMax.from('.s_03scene04img01', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene04txt', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.to('.s_03scene04', 1.5, {
    x:0,
    y:0,
}))
.add(TweenMax.to('.s_03scene04', 1.5, {
    rotation: 175,
    opacity: 0,
    x: -1600,
}))


.add(TweenMax.from('.s_03scene05img01', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene05img02', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.from('.s_03scene05txt', .5, {
    rotation: 175,
    opacity: 0,
    y: -1200,
    ease: Back. easeOut.config( 1.7)
}))
.add(TweenMax.to('.s_03scene05', 1.5, {
    x:0,
    y:0,
}))
.add(TweenMax.to('.s_03scene05', 1.5, {
    rotation: 175,
    opacity: 0,
    x: -1600,
}))


var scene03 = new ScrollMagic.Scene({
        triggerElement: "#s_03",
        triggerHook: 0,
        duration: "300%",
    })
    .setTween(tlpro)
    .setPin('#s_03')
scene03.addTo(controller)

// ###############
//
// SCENE 4 STONEWALL
//
// ###############

var tlstone = new TimelineMax()

tlstone.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
    'background-color': '#FFF',
    onComplete: function () {
        $('nav a p').css({
            "background-color": ""
        })
    }
}))
.add(TweenMax.from('.s_04txt01', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt02', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt03', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))

.add(TweenMax.from('.s_04txt04', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt05', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt06', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))

.add(TweenMax.from('.s_04txt07', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt08', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.to('.s_04txtblks01', 1.7, {
    x: 0,
}))
.add(TweenMax.to('.s_04txtblks01', 1.7, {
    x: -2500,
    ease: Expo. easeOut,
}))

.add(TweenMax.from('.s_04txt09', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt10', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt11', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))

.add(TweenMax.from('.s_04txt12', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt13', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt14', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))

.add(TweenMax.from('.s_04txt15', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt16', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.to('.s_04txtblks02', 1.7, {
    x: 0,
}))
.add(TweenMax.to('.s_04txtblks02', 1.7, {
    x: -2500,
    ease: Expo. easeOut,
}))

.add(TweenMax.from('.s_04txt17', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt18', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt19', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))

.add(TweenMax.from('.s_04txt20', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt21', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.from('.s_04txt22', .7, {
    x: 2500,
    ease: Expo. easeOut,
}))
.add(TweenMax.to('.s_04txtblks03', 1.7, {
    x: 0,
}))
.add(TweenMax.to('.s_04txtblks03', 1.7, {
    x: -2500,
    ease: Expo. easeOut,
}))

var scene04 = new ScrollMagic.Scene({
        triggerElement: "#s_04",
        triggerHook: 0,
        duration: "300%",
    })
    .setTween(tlstone)
    .setPin('#s_04')
scene04.addTo(controller)

// ###############
//
// SCENE 5 MOVIES
//
// ###############

var tlmovies = new TimelineMax()

tlmovies.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
    'background-color': '#EE1C25',
}))
.add(TweenMax.from('.s_05rockybg', 1, {
    opacity: 0,
    ease: Back. easeOut.config( 1.7),
    y: -2500,
}))
.add(TweenMax.from('.s_05rockytxt', 1, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: 2500,
}))
.add(TweenMax.to('.s_05rockytxt, .s_05rockybg', 3, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: -2500,
}))

.add(TweenMax.from('.s_05parisbg', 1, {
    opacity: 0,
    ease: Back. easeOut.config( 1.7),
    y: -2500,
}))
.add(TweenMax.from('.s_05txtblk01', 1, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: 2500,
}))
.add(TweenMax.to('.s_05txtblk01', 1, {
    x: 0,
    y: 0,
}))
.add(TweenMax.to('.s_05txtblk01', 1, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: -2500,
}))
.add(TweenMax.from('.s_05txtblk02', 1, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: 2500,
}))
.add(TweenMax.to('.s_05txtblk02', 1, {
    x: 0,
    y: 0,
}))
.add(TweenMax.to('.s_05txtblk02', 1, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: -2500,
}))
.add(TweenMax.from('.s_05txtblk03', 1, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: 2500,
}))
.add(TweenMax.to('.s_05txtblk03', 1, {
    x: 0,
    y: 0,
}))
.add(TweenMax.to('.s_05txtblk03', 1, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: -2500,
}))
.add(TweenMax.to('.s_05paristxt, .s_05parisbg', 3, {
    opacity: 0,
    ease:SteppedEase.config( 12 ),
    y: -2500,
}))


var scene05 = new ScrollMagic.Scene({
    triggerElement: "#s_05",
    triggerHook: 0,
    duration: "300%",
})
.setTween(tlmovies)
.setPin('#s_05')
scene05.addTo(controller)

// ###############
//
// SCENE 6 RUPAUL
//
// ###############

var tlru = new TimelineMax()

tlru.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
    'background-color': '#BF2323',
}))
tlru.add(TweenMax.from('.s_06rupaulimg', 1, {
    x: 2600,
    ease: Back. easeOut.config( 1.7)
}))
tlru.add(TweenMax.staggerFrom('.s_06txt1', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3. easeOut,
}))
tlru.add(TweenMax.staggerFrom('.s_06txt2', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3. easeOut,
}))
tlru.add(TweenMax.staggerFrom('.s_06txt3', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3. easeOut,
}))
tlru.add(TweenMax.staggerFrom('.s_06txt4', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3. easeOut,
}))
tlru.add(TweenMax.staggerFrom('.s_06txt5', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3. easeOut,
}))
tlru.add(TweenMax.staggerFrom('.s_06txt6', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3. easeOut,
}))
tlru.add(TweenMax.to('.s_06txt', 1, {
    x: 0,
    y: 0,
}))
tlru.add(TweenMax.to('.s_06txt', 1, {
    opacity: 0,
    y: 2600,
    ease: Power3. easeOut,
}))
tlru.add(TweenMax.from('.ruVid', 1, {
    x: 2600,
    ease: Back. easeOut.config( 1.7)
}))
tlru.add(TweenMax.to('.ruVid', 3, {
    scale: 1.2,
}))
tlru.add(TweenMax.to('.ruVid', 4, {
    scale: .5,
    x: -300,
    y: 100,
}))
tlru.add(TweenMax.from('.s_06theater', 4, {
    opacity: 0
}))
tlru.add(TweenMax.to('.s_06theatertxt', 2, {
    opacity: 1,
    'height':'75%',
}))
var scene06 = new ScrollMagic.Scene({
    triggerElement: "#s_06",
    triggerHook: 0,
    duration: "300%",
})
.setTween(tlru)
.setPin('#s_06')
scene06.addTo(controller)

// ###############
//
// SCENE 7 FOOTER
//
// ###############

var tlfoot = new TimelineMax()

tlfoot.add(TweenMax.to('.navCirs, .navLine, nav a p', .5, {
    'background-color': '#FFF',
    onComplete: function () {
        $('nav a p').css({
            "background-color": ""
        })
    }
}))
.add(TweenMax.from('#s_07 a', .5, {
    opacity: 0,
    y:-2000,
}))

var scene07 = new ScrollMagic.Scene({
    triggerElement: "#s_07",
    triggerHook: 0,
    duration: "300%",
})
.setTween(tlfoot)
.setPin('#s_07')
scene07.addTo(controller)