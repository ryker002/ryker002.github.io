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
    density: 15000,
    particleRadius: 5,
    proximity: 80,
    parallaxMultiplier: 15,
    curvedLines: true,
});

// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  

  // Animation Scroll

  new WOW().init();

  // Blue Gallery

function galleryObject(name) {
  document.getElementById(name).onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
}
