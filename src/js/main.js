//= ../../bower_components/jquery/dist/jquery.js
// ../../bower_components/modernizr/modernizr.js
//= ../../bower_components/foundation-sites/dist/foundation.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js
//= ../../bower_components/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.min.js
//= ../../bower_components/Likely/release/likely.js
//= vendor/jquery-ui.min.js

$(document).ready(function() {
    $(document).foundation();

    $('#map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#map_canvas_wrapper').on('click', function () {
        $('#map_canvas').removeClass('scrolloff'); // set the pointer events true on click
    });

    // you want to disable pointer events when the mouse leave the canvas area;

    $("#map_canvas").mouseleave(function () {
        $('#map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });

});

//= partials/vtabs.js
//= partials/faq.js
//= partials/courseSlider.js
//= partials/reviewSlider.js
//= partials/courseImageScroller.js