console.log("Loading...");
new Audio('sounds/bg.mp3').play();

function loadNewSection(_page, _script) {
    console.log("Loading...");
    console.log(``, _page);
    $('.sec_fill .content-width').load(_page,
        function () {

            $.getScript(_script);
            console.log("Loading Complete", _page);
        }
    );
}

function messageHide() {
    $('.chatbubble').click(function () {
        TweenMax.to($(this), 1, {
            opacity: 0,
            onComplete: function () {
                $(this.target).addClass("hide");
                console.log("Messages Hidden")
            }
        });
    })
}

function test() {
    console.log('test', $)
}

$('.refreshButton').click(function () {

    location.reload(true);

});

$('img').attr('draggable', false);

 loadNewSection("loaders/intro.html", "js/intro.min.js");