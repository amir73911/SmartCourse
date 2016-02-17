$(document).ready(function () {

    // Vertical Tabs
    var $vtabsContainer = $('.vtabs'),
        $vtabLinksContainer = $vtabsContainer.find('.vtabs-links'),
        $vtabLinks = $vtabsContainer.find('.vtabs-links a'),
        $activeVtabLink = $vtabsContainer.find('.vtabs-links .active a'),
        $vtabsContent = $vtabsContainer.find('.vtabs-content'),
        $vtabs = $vtabsContent.find('.vtab');

    $vtabsContent.find($activeVtabLink.attr('href')).show();

    $vtabLinks.click(function (e) {
        e.preventDefault();

        var $link = $(this),
            target = $link.attr('href'),
            $targetTab = $(target);

        if ($targetTab.length) {

            $vtabs.hide();
            $targetTab.show();

            $vtabLinksContainer.find('li').removeClass('active');
            $link.parents('li').addClass('active');

        }

    });

});