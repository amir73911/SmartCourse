$(document).ready(function () {

    // FAQ
    var $faqContainer = $('.faq'),
        $faqQuestions = $faqContainer.find('.questions li'),
        $faqLinks = $faqContainer.find('.questions a'),
        $faqAnswers = $faqContainer.find('.answer');

    $faqLinks.click(function (e) {
        e.preventDefault();
        var $link = $(this),
            target = $link.attr('href'),
            $targetAnswer = $(target);

        if ($targetAnswer.length) {
            $faqAnswers.removeClass('active');
            $targetAnswer.addClass('active');

            $faqQuestions.removeClass('active');
            $link.parents('li').addClass('active');
        }

    });

});