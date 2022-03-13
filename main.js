$(document).ready(function () {
  toggleImage();
  portfolioHover();
});

function toggleImage() {
  $(".image-wrapper p").hide();
  $(".image-wrapper").click(function () {
    $(this).find("img").slideToggle();
    $(this).find("p").slideToggle();
  });
}

function portfolioHover() {
  $(".overlay-text").hide();
  $(".portfolio-box").hover(function () {
    $(this).find("h3").toggle();
  });
}

let form = document.getElementsByClassName(".form")
FormData.addEventListener("submit",ValidateForm);

function FormValidate(event){
  event.preventDefault();
  let name = document.get


}





