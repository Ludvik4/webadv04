(function () {
    var container = $('.blog');
    var sidebar = container.find('.sidebar__list');
    if (sidebar.length === 0 )
        return;

    var edgeTop = sidebar.offset().top - 40;

    $(window).on('scroll', function () {
        if (edgeTop < $(window).scrollTop()) {
            sidebar.addClass('sidebar__list_fixed');
        } else {
            sidebar.removeClass('sidebar__list_fixed');
        }
    });
})();

(function () {
    var articleAll = $('.blog-article');
    var linksAll = $('.sidebar__link');
    if (articleAll.length === 0)
        return;
    showSection(window.location.hash, false);
    function showSection(section, isAnimate) {
        var target = section.replace('#', '');
        var reqSection = articleAll.filter('[data-id="' + target + '"]');
        var duration = 750;
        if (reqSection.length === 0)
            return;
        var reqSectionPos = reqSection.offset().top;
        if (isAnimate) {
            $('body, html').animate({
                scrollTop: reqSectionPos
            }, duration);
        } else {
            $('body, html').scrollTop(reqSectionPos);
        }
    }

    function checkSection() {
        articleAll.each(function (i, item) {
            var article = $(item);
            var topEdge = article.offset().top - 150;
            var bottomEdge = topEdge + article.height();
            var topScroll = $(window).scrollTop();
            if (topEdge < topScroll && bottomEdge > topScroll) {
                var currentId = article.data('id');
                var reqLink = linksAll.filter('[href="#' + currentId + '"]');
                reqLink.closest('.sidebar__item').addClass('active').siblings().removeClass('active');
                window.location.hash = currentId;
            }
        });
    }

    $(window).on('scroll', function () {
        checkSection();
    });
    $(document).on('click', '.sidebar__link', function (e) {
        e.preventDefault();
        var sidebar = $(this).closest('.sidebar_blog');
        if (sidebar.hasClass('active')) sidebar.removeClass('active');
        showSection($(this).attr('href'), true);
    });

    $(document).on('click', '.sidebar__btn', function (e) {
        e.preventDefault();
        var trigger = $(this);
        var sidebar = trigger.closest('.sidebar_blog');
        sidebar.toggleClass('active');
    });
})();