
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

var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');

  btn.addEventListener('click',function (e) {
      e.preventDefault();
      card.classList.add('active');
  });

  closeBtn.forEach(function (element, index) {
     console.log(element);
      element.addEventListener('click',function (e) {
          e.preventDefault();
          card.classList.remove('active');
      });
  });
