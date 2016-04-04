$(document).ready(function () {
    var $headBlock = $('.choice-system'),
        $blackBgBlock = $headBlock.find('.black-bg'),
        $blackAttrsBlock = $blackBgBlock.find('.attributes-block'),
        $blackHeaderBlock = $blackBgBlock.find('header'),
        $learningProgramBlock = $('.learning-program'),
        $courseImageScroller = $('.course-image-scroller'),
        $whatYouGetBlock = $('.what-you-get'),
        $courseImage = $courseImageScroller.find('img'),
        $window = $(window),
        $document = $(document);

    var windowHeight = $window.height(),
        windowWidth = $window.width(),
        initialScrollVal = $('body').scrollTop(),
        mobileWidth = 320,
        learningProgramScrollStart = $learningProgramBlock.offset().top,
        learningProgramHeight = 804,
        pathOffset = 2800 - windowWidth, // 2800 - path image width
        learningProgramScrollEnd = learningProgramScrollStart + pathOffset;

    $(window).on('resize', function() {
      windowHeight = $window.height();
      windowWidth = $window.height();
    });

    $document.on('scroll.curtain', handleHeaderCurtainScroll);
    $document.on('scroll.path', handleHeaderPathScroll);
    $document.trigger('scroll');

    function handleHeaderCurtainScroll(e) {
      if (windowWidth <= mobileWidth) return;

      var scrollVal = $document.scrollTop(),
          BGPPropVal = 'center ' + scrollVal + 'px',
          MGTPropVal = scrollVal + 'px';
          BTPropVal = -scrollVal + 'px';

      $blackBgBlock.css('background-position', BGPPropVal);
      $blackAttrsBlock.css('bottom', BTPropVal)
      $blackHeaderBlock.css('margin-top', MGTPropVal)

      if (scrollVal >= windowHeight * 1.1) {
        $headBlock.removeClass('fixed');
      } else {
        $headBlock.addClass('fixed');
      }
    }

    function handleHeaderPathScroll(e) {
      var scrollVal = $document.scrollTop(),
          pathScroll = learningProgramScrollStart - scrollVal;

      if (scrollVal >= learningProgramScrollStart && scrollVal < learningProgramScrollEnd) {
        $learningProgramBlock.addClass('fixed');
        $courseImageScroller.css('margin-left', pathScroll + 'px');
      } else {
        $learningProgramBlock.removeClass('fixed');
      }

      if (scrollVal >= learningProgramScrollEnd) {
        $learningProgramBlock.addClass('scroll-finished');
        $learningProgramBlock.css('padding-top', pathOffset + 'px');
        $whatYouGetBlock.css('padding-top', 0);
      } else {
        $learningProgramBlock.removeClass('scroll-finished');
        $learningProgramBlock.css('padding-top', 0);
        $whatYouGetBlock.css('padding-top', (pathOffset + learningProgramHeight) + 'px');
      }
    }

    // $courseImageScrollerImg.draggable({
    //     axis: "x",
    //     snap: ".course-image-scroller",
    //     stop: function() {
    //
    //         containerOffset = $courseImageScroller.offset();
    //         containerWidth = $courseImageScroller.width();
    //         imgOffset = $courseImageScrollerImg.offset();
    //         imgWidth = $courseImageScrollerImg.width();
    //
    //         if (imgOffset.left - containerOffset.left > 0) {
    //             $courseImageScrollerImg.animate({'left': 0}, 200);
    //         }
    //
    //         if (imgOffset.left - containerOffset.left + imgWidth - containerWidth < 0) {
    //             $courseImageScrollerImg.animate({'left': containerWidth - imgWidth}, 200);
    //         }
    //
    //     }
    // });

    // $('.course-image-scroller-scroll-left').click(function(e) {
    //     e.preventDefault();
    //     var left = $courseImageScrollerImg.css('left');
    //     var step = $courseImageScroller.width() / 3;
    //
    //     if (left == 'auto') {
    //         left = 0;
    //     } else {
    //         left = parseInt(left);
    //     }
    //
    //     $courseImageScrollerImg.stop(1,1).animate({'left': left + step}, 200);
    //
    //     setTimeout(function () {
    //         containerOffset = $courseImageScroller.offset();
    //         containerWidth = $courseImageScroller.width();
    //         imgOffset = $courseImageScrollerImg.offset();
    //         imgWidth = $courseImageScrollerImg.width();
    //
    //         if (imgOffset.left - containerOffset.left > 0) {
    //             $courseImageScrollerImg.animate({'left': 0}, 200);
    //         }
    //
    //     }, 200);
    //
    // });

    // $('.course-image-scroller-scroll-right').click(function(e) {
    //     e.preventDefault();
    //     var left = $courseImageScrollerImg.css('left');
    //     var step = $courseImageScroller.width() / 3;
    //
    //     if (left == 'auto') {
    //         left = 0;
    //     } else {
    //         left = parseInt(left);
    //     }
    //
    //     $courseImageScrollerImg.stop(1,1).animate({'left': left - step}, 200);
    //
    //     setTimeout(function () {
    //         containerOffset = $courseImageScroller.offset();
    //         containerWidth = $courseImageScroller.width();
    //         imgOffset = $courseImageScrollerImg.offset();
    //         imgWidth = $courseImageScrollerImg.width();
    //
    //         if (imgOffset.left - containerOffset.left + imgWidth - containerWidth < 0) {
    //             $courseImageScrollerImg.stop(1,1).animate({'left': containerWidth - imgWidth}, 200);
    //         }
    //
    //     }, 200);
    //
    // });


});
