$(document).ready(function () {

    // Reviews Main Slider
    $('.reviews-slider-main').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        thumbs: true,
        thumbsPrerendered: true,
        thumbImage: true
    });

    // Peoples Slider
    $('.peoples-slider-inner').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        onInitialized: setDotsText
    });

    function setDotsText(event) {
        var $container = $(event.target),
            $items = $container.find('.item'),
            $dots = $container.find('.owl-dot');

        $items.each(function() {
            var $slide = $(this),
                eq = $slide.parents('.owl-item').index();

            if ($slide.data('slideName')) {
                $dots.eq(eq).html($slide.data('slideName'));
            }
        });
    }


    // Creators Slider
    $('.creators-slider').owlCarousel({
        items: 1,
        nav: false,
        autoHeight: true
    });
    $('.creators-slider .next-link').click(function() {
        $('.creators-slider').trigger('next.owl.carousel');
    })
});