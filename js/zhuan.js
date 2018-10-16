//翻转方法
function turn(elem) {
  var cls = elem.className;

  if (/photo-front photo-center/.test(cls)) {
    cls = cls.replace(/photo-front/,"photo-back");
  }else {
    cls = cls.replace(/photo-back/,"photo-front");
  }
  return elem.className = cls;
}



//随机生成位置
function localtion() {
  var num = $("#warp").children(".photo");
  // alert(num.length)
  // alert($("#warp").contents("div").eq(1));
  var wid = $(".warp").width();
  var hei = $(".warp").height();
  var pw =  $(".photo").width();
  var ph = $(".photo").height();
  var pcw = $(".photo-center").width();
  var leftmax = wid/2 - pw - pcw/2;
  var rightmin = wid/2 + pw/3;
  var maxwid = wid - $(".photo").width();
  var maxhei = hei - ph/2;

  for (var i = 0; i < num.length; i++) {
    if(num.eq(i).hasClass("photo-center")){
       }else{
        if(i%2==0){
          var x = randomNum(-(pw/2),leftmax);
          var y = randomNum(-(ph/2),maxhei);  
          var zhuan = randomNum(-60,60);
          var rn = randomNum(0,200);
          // alert(shuzi)
          num.eq(i).animate({"left":x+'px',"top":y+'px'},900);
          num.eq(i).css("transform","rotate("+zhuan+"deg)");
          num.eq(i).css("z-index",rn);
          
        }else{
          var x = randomNum(rightmin,(maxwid+pw/3));
          var y = randomNum(-(ph/2),maxhei);  
          var zhuan = randomNum(-60,60);
          var rn = randomNum(0,200);
          // alert(shuzi)
          num.eq(i).animate({"left":x+'px',"top":y+'px'},900);
          num.eq(i).css("transform","rotate("+zhuan+"deg)");
          num.eq(i).css("z-index",rn);
        }
    } 
  }

}

//生成随机数
function randomNum(minNum,maxNum){
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1);
      break;
    case 2:
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum);
      break;
    default:
      return 0;
      break;
  }
}

$(function give() {
  $(".photo").click(function () {
    $(this).removeAttr("style");
    $("#warp").children(".photo").removeClass("photo-center");
    $(this).addClass(" photo-center ");
    // setTimeout("localtion()",500);
    localtion();
  })
})
// function sure(nn) {
//   var n =  $("span").attr("name");
//   var d =  $("div[n]");
//   var num = $("#warp").children(".photo");

// }

// function give() {
//   var len = $(".controal").children();
//   for(var i=0;i<len.length;i++){
//     len.eq(i).append(sure(i));
//   }
// }
//  function RndNum(n){
//      var rnd="";
//      for(var i=0;i<n;i++)
//          rnd+=Math.floor(Math.random()*10);
//      return rnd;
//  }
// alert(RndNum(5));
// function g(selector) {
//   // body...
//   var method = selector.substr(0,1) == '.' ? 'getElementsByClassName':'getElementId';
//   return document[method](selector.substr(1));
// }
