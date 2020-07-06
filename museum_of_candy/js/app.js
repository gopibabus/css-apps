$(function () {
    $(document).scroll(function () {
        var $nav = $("#main_navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});