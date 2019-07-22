$(document).ready(function () {
    console.log('Document is ready')
    $('nav a').click(function (event) {
        console.log('A nav item was clicked')
        event.preventDefault()

        let sectionScroll = $(this).attr('href')

        console.log(sectionScroll)

        let distanceToScroll = $(sectionScroll).offset().top

        console.log(distanceToScroll)

        $('html,body').animate({
            scrollTop: distanceToScroll
        }, 500)
    })

// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});




})