$(document).ready(function () {
  toggleImage();
});

// $(document).ready(function(){
//   $("#icon1").click(function(){
//       $(".text-1").toggle()
//   });
// });

// $(document).ready(function () {
//   $("#icon2").click(function () {
//     $(".text-2").toggle();
//   });
// });

// $(document).ready(function () {
//   $("#icon3").click(function () {
//     $(".text-3").toggle();
//   });
// });

function toggleImage() {
  $(".image-wrapper p").hide();
  $(".image-wrapper").click(function () {
    $(this).find("img").toggle(300);
    $(this).find("p").toggle(300);
  });
}
