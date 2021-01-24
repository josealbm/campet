$(document).ready(function () {
    // $('body').css('background', 'url("/images/LOGOS-DIFERENTS-MIDES/PER-WEB-XARXES-SOCIALS/1600X1200px/positiu-negre-verd.png") no-repeat')
    $(function () {
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    $(function () {
        var elem = $('.circle').hide();
        var i = 0;
        (function displayImages() {
            elem.eq(i++).fadeIn(400, displayImages).css("display", "inline-block");
        })();
    });
    $(function () {
        $(document).tooltip();
    });

    // $(function(){
    //     $('.selectpicker').selectpicker();
    //     console.log("patata");
    // });
});


var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img[data-alt-src]').each(function () {
        new Image().src = $(this).data('alt-src');
    }).hover(sourceSwap, sourceSwap);
});

