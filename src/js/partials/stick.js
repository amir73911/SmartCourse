$(document).ready(function () {

    // Sticky Tabs
    var $container = $('.stick-container');

    $container.each(function() {
        var $that = $(this),
            $obj = $that.find('.stick-object'),
            $anchor = $that.find('.stick-anchor'),
            objHeight,
            anchorHeight,
            objTop,
            offset;

        $(window).on('scroll', function () {
            objTop = $anchor.offset().top;
            offset = objTop - $(window).scrollTop();
            anchorHeight = $anchor.height();
            objHeight = $obj.height();


            if (offset <= 0) {
                $obj.css('marginTop', -offset);
            } else {
                $obj.css('marginTop', 0);
            }

            if (anchorHeight - (Math.abs(offset) + objHeight) < 0) {
                $obj.css('marginTop', anchorHeight - objHeight);
            }
        });

    });

});