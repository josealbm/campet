
$(function () {
    // $('body').css('background', 'url("/images/LOGOS-DIFERENTS-MIDES/PER-WEB-XARXES-SOCIALS/1600X1200px/positiu-negre-verd.png") no-repeat')
    $(function () {
        $("#header").load("./partials/header.html");
        $("#footer").load("./partials/footer.html");
    });

    $(function () {
        var elem = $('.circle').hide();
        var i = 0;
        (function displayImages() {
            elem.eq(i++).fadeIn(400, displayImages).css("display", "inline-block");
        })();
    });
    $(function () {
        $('.circle').tooltip();
    });
});

