$(".tab2 .nav li").hover(
  function () {
    if(!$(this).hasClass("title")){
      $(this).addClass("active");
      $(this).nextAll().removeClass("active");
      $(this).prevAll().removeClass("active");
    }
    var num = $(this).index(".chead li");
    if(num == 1){
      $(".place").css("display","block");
      $(".flower").css("display","none");
      $(".people").css("display","none");
      $(".food").css("display","none");
    }else {
      if(num == 2){
        $(".place").css("display","none");
        $(".flower").css("display","block");
        $(".people").css("display","none");
        $(".food").css("display","none");
      }else {
        if(num == 3){
          $(".place").css("display","none");
          $(".flower").css("display","none");
          $(".people").css("display","block");
          $(".food").css("display","none");
        }if(num == 4){
          $(".place").css("display","none");
          $(".flower").css("display","none");
          $(".people").css("display","none");
          $(".food").css("display","block");
        }else {
        }
      }
    }
},function () {
});

$(".glyphicon-thumbs-up").click(function () {
  if($(this).hasClass("already-zan")){
    $(this).css({"color":"#A8A8A8","font-weight":"normal"});
    $(this).next().css({"color":"#A8A8A8","font-weight":"normal"});
    var sum = $(this).next().text();
     sum = parseInt(sum) - 1;
    $(this).next().text(sum);
    $(this).removeClass("already-zan");
  }else {
    $(this).css({"color":"rgb(89, 228, 18, 0.55)","font-weight":"bold"});
    $(this).next().css({"color":"rgb(89, 228, 18, 0.55)","font-weight":"bold"});
    var sum = $(this).next().text();
     sum = parseInt(sum) + 1;
    $(this).next().text(sum);
    $(this).addClass("already-zan");
  }
  //获取点赞信息
  var zanname = $(this).parent().prev().children(":first").text();

  var number = $(this).next().text();
  var t_number = parseInt(number);
  var ren = $(this).parent().prev().children(":last").text();
	var xren = "";
	if(!$(this).hasClass("already-zan")){
    xren = ren.replace("我，","");
	}else{
		var xren = "我，" + ren ;
	}
  $(this).parent().prev().children(":last").text(xren);
  //获取点赞数
  // var sr = $(".place .row").children().eq(1).find(".showzan").text();
  // var string = "我，他";
  // var ni = "你";
  // if(string.indexOf(ni)!=-1){
  //
  // }
  // var x = $(".place .row").children().eq(0).find(".changezan").children(":first").css({"color":"rgb(89, 228, 18, 0.55)","font-weight":"bold"});
  // var xs = $(".place .row").children().eq(0).find(".showzan").css({"color":"rgb(89, 228, 18, 0.55)","font-weight":"bold"});

});
