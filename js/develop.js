$(".palcebutton button:first-child").click(function () {
  var img = "ycy1";
  var text= "杨超越";
  var juti = "士大夫，玩儿，五二，三房dsafsdfasdfsdafsdafdfsadfasd";
  var jianjie = "sdafiahsdiafhoiashdfiohisdoajfhiosdajfsdioafjisadojfiosdajifjasoifo";
  var zan = 4565;
  var panduan = $(".nshow .showmaxmesg h4").text();
  if(panduan== ""){
    $(".fshow").css("display","none");
    $(".sshow").css("display","none");
    $(".nshow").css("display","block");
    $(".nshow img").attr("src","image/big"+img+".jpg");
    $(".nshow h4").text(text);
    $(".nshow .hidden-xs").append(juti);
    $(".nshow .hidden-xs").next().append(zan);
  }else{
    $(".sshow").css("display","none");
    $(".nshow").css("display","block");
  }
});

$(".palcebutton button:last-child").click(function () {
  var img = "baihu";
  var text= "杨超越123";
  var juti = "士大夫，玩儿，五二，三房dsafsdfasdfsdafsdafdfsadfasd";
  var jianjie = "sdafiahsdiafhoiashdfiohisdoajfhiosdajfsdioafjisadojfiosdajifjasoifo";
  var zan = 4565;
  var panduan = $(".sshow .showmaxmesg h4").text();
  if(panduan== ""){
    $(".fshow").css("display","none");
    $(".nshow").css("display","none");
    $(".sshow").css("display","block");
    $(".sshow img").attr("src","image/"+img+".jpg");
    $(".sshow h4").text(text);
    $(".sshow .hidden-xs").append(juti);
    $(".sshow .hidden-xs").next().append(zan);
  }else{
    $(".nshow").css("display","none");
    $(".sshow").css("display","block");
  }
});
