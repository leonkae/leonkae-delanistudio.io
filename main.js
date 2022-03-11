$(document).ready(function () {
  toggleImage();
});



function toggleImage() {
  $(".image-wrapper p").hide();
  $(".image-wrapper").click(function () {
    $(this).find("img").toggle(300);
    $(this).find("p").toggle(300);
  });
}
