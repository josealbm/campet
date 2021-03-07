$(document).ready(function () {
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

       
//     $(function() {
//         $('#switch-lang').bootstrapToggle({
//           on: 'Català',
//           off: 'Castellano'
//         });
//       })
   
});


// var sourceSwap = function () {
//     var $this = $(this);
//     var newSource = $this.data('alt-src');
//     $this.data('alt-src', $this.attr('src'));
//     $this.attr('src', newSource);
// }

// $(function () {
//     $('img[data-alt-src]').each(function () {
//         new Image().src = $(this).data('alt-src');
//     }).hover(sourceSwap, sourceSwap);
// });
$('.switch-lang').change(function(){
if ($(this).prop('checked')){
    $(".cat").show()
    $(".es").hide()
    console.log('patata')
}else{
    $(".es").show()
    $(".cat").hide()
}
})