$(document).ready(function () {

    var $blackHeadBlock = $('.black-head-block'),
        blackHeadBlockHeight = $blackHeadBlock.height();

    $(document).scroll(function () {

        $blackHeadBlock.css('height', blackHeadBlockHeight - ($(window).scrollTop() * 4) );

    });

    var $courseImageScroller = $('.course-image-scroller'),
        $courseImageScrollerImg = $courseImageScroller.find('img'),
        containerOffset,
        containerWidth,
        imgOffset,
        imgWidth;

    $courseImageScrollerImg.draggable({
        axis: "x",
        snap: ".course-image-scroller",
        stop: function() {

            containerOffset = $courseImageScroller.offset();
            containerWidth = $courseImageScroller.width();
            imgOffset = $courseImageScrollerImg.offset();
            imgWidth = $courseImageScrollerImg.width();

            if (imgOffset.left - containerOffset.left > 0) {
                $courseImageScrollerImg.animate({'left': 0}, 200);
            }

            if (imgOffset.left - containerOffset.left + imgWidth - containerWidth < 0) {
                $courseImageScrollerImg.animate({'left': containerWidth - imgWidth}, 200);
            }

        }
    });

    var scrollLock = function () {
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        var html = $('html');

        $courseImageScroller.data('scrolling', true);
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
    };

    var scrollUnLock = function () {
        var html = $('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    };

    /*$(document).scroll(function () {

        var offsetTop = $courseImageScroller.offset().top - 100;

        if ($(window).scrollTop() >= (offsetTop - 100) && $(window).scrollTop() <= (offsetTop + 100) ) {
            scrollLock();
        }

    });*/

});