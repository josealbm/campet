window.onload = function () {
    // $(function () {
    //     $('#circlemenu').incircle();
    // })

    $(function () {
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    // $(".circle").first().show("slow", function showNext() {
    //     // $(this).css("display", "inline-block");
    //     $(this).next(".circle").show("slow", showNext).css("display", "inline-block");
    // }).css("display", "inline-block")
};

$(document).ready(function() {
    (function() { 
       var elem = $('.circle').hide(); 
              var i = 0; 
              (function displayImages() { 
                     elem.eq(i++).fadeIn(200, displayImages).css("display", "inline-block"); 
              })();   
    })(); 
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

