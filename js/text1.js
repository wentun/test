function showy() {
  $(".showy").css("display","none");
  $(".hiddeny").css("display","inline-block");
}
function hiddeny() {
  $(".showy").css("display","inline-block");
  $(".hiddeny").css("display","none");
}

$(".col-md-6").hover(
  function () {
    $(this).find(".hui").css("display","block");
    $(this).find(".hui").animate({top:"0px",opacity:"0.85"},700);
    console.log(2);
  },
  function () {
    $(this).find(".hui").css("display","none");
  }
);
$(".col-md-3").hover(
  function () {
    $(this).find(".hui").css("display","block");
    $(this).find(".hui").animate({top:"0px",opacity:"0.85"},700);
    console.log(2);
  },
  function () {
    $(this).find(".hui").css("display","none");
  }
);
