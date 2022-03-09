

$(document).ready(function () {
  $("image1").hover(
    function () {
      $(this).find(".img-title").fadeIn(300);
    },
    function () {
      $(this).find(".img-title").fadeOut(100);
    }
  );
});
