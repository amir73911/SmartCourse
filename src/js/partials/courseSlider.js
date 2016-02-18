$(document).ready(function () {

    // Course Slider
    $('.course-slider-inner').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        onInitialized: courseSliderCallback,
        onChanged: courseSliderCallback,
        navContainer: $('.course-slider-navs')
    });

});

function courseSliderCallback(event) {
    var $container  = $('.'+event.target.classList[0]).parents('.course-slider'),
        $progress = $container.find('.course-slider-progress span'),
        $indexOf = $container.find('.course-slider-index'),
        items = event.item.count,
        item = event.item.index + 1,
        progressWidth = (item/items) * 100,
        indexOfText = item + ' из ' + items;

    $indexOf.html(indexOfText);
    $progress.css('width', progressWidth + '%');
}