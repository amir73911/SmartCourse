$(document).ready(function () {
    if (!$('.faq').length) return;

    // FAQ
    var $document = $(document),
        $faqContainer = $('.faq'),
        $faqQuestions = $faqContainer.find('.questions li'),
        $faqLinks = $faqContainer.find('.questions a'),
        $faqAnswers = $faqContainer.find('.answer'),
        $questionLinks = $faqQuestions.find('a'),
        answersArr = [],
        currentAnswer;

    $faqAnswers.each(function() {
      answersArr.push($(this));
    });

    $(document).on('scroll', function() {
      var topOffset = $document.scrollTop();

      currentAnswer = answersArr[0];

      $questionLinks.removeClass('active');

      for (var index in answersArr) {
        answersArr[index].removeClass('active');

        if (topOffset > (answersArr[index].offset().top - 40))
          currentAnswer = answersArr[index];
      }

      currentAnswer.addClass('active');
      $questionLinks.filter('[href="#' + currentAnswer.attr('id') + '"]').addClass('active');
    });

    $faqLinks.click(function (e) {
        e.preventDefault();

        var $link = $(this),
            target = $link.attr('href'),
            $targetAnswer = $(target);

        $('html, body').animate({
          scrollTop: $targetAnswer.offset().top - 20
        });
    });

});
