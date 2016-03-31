$(document).ready(function () {

    var $blackHeadBlock = $('.black-head-block'),
        $whiteHeadBlock = $('.white-head-block'),
        blackHeadBlockHeight = $blackHeadBlock.height();

    $(document).scroll(function () {

        if (blackHeadBlockHeight - $(window).scrollTop() > 0) {
            $whiteHeadBlock.css('marginTop', -(blackHeadBlockHeight - $(window).scrollTop()) );
        } else {
            $whiteHeadBlock.css('marginTop', 0 );
        }




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

    $('.course-image-scroller-scroll-left').click(function(e) {
        e.preventDefault();
        var left = $courseImageScrollerImg.css('left');
        var step = $courseImageScroller.width() / 3;

        if (left == 'auto') {
            left = 0;
        } else {
            left = parseInt(left);
        }

        $courseImageScrollerImg.stop(1,1).animate({'left': left + step}, 200);

        setTimeout(function () {
            containerOffset = $courseImageScroller.offset();
            containerWidth = $courseImageScroller.width();
            imgOffset = $courseImageScrollerImg.offset();
            imgWidth = $courseImageScrollerImg.width();

            if (imgOffset.left - containerOffset.left > 0) {
                $courseImageScrollerImg.animate({'left': 0}, 200);
            }

        }, 200);

    });

    $('.course-image-scroller-scroll-right').click(function(e) {
        e.preventDefault();
        var left = $courseImageScrollerImg.css('left');
        var step = $courseImageScroller.width() / 3;

        if (left == 'auto') {
            left = 0;
        } else {
            left = parseInt(left);
        }

        $courseImageScrollerImg.stop(1,1).animate({'left': left - step}, 200);

        setTimeout(function () {
            containerOffset = $courseImageScroller.offset();
            containerWidth = $courseImageScroller.width();
            imgOffset = $courseImageScrollerImg.offset();
            imgWidth = $courseImageScrollerImg.width();

            if (imgOffset.left - containerOffset.left + imgWidth - containerWidth < 0) {
                $courseImageScrollerImg.stop(1,1).animate({'left': containerWidth - imgWidth}, 200);
            }

        }, 200);

    });


});