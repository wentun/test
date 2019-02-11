//加入购物车
$(".add").click(function addnum(){
  // 数值显示
  var howma = $(this).parent().parent().prev();
  if(howma.text() == ""){
    howma.text(1);
  }else {
    howma.text(parseInt(howma.text())+1);
  }
  //表格添加
  var meal = $(this).parent().prev().find("h4").text();
  var areameal = $(".buycar table tr td").map(function(){
    return $(this).text();
  }).get();
  //表格为空直接添加
  if(areameal == ""){
    $("table").append("<tr><td>"+ meal +"</td><td>1</td></tr>");
  }else{
    //得到当前表格数据
    var alreadydata = $(".buycar table tr td").map(function(){
      return $(this).text();
    }).get();
    var cun = true;
    //判断要加入菜单表格是否存在
     for(var i =0;i<alreadydata.length;i++){
       if(alreadydata.indexOf(meal) != -1){
         cun = true;
       }else {
         cun = false;
       }
     }
     if(cun == true){
       //修改已存在的信息
      var weizhi = (alreadydata.indexOf(meal))/2+2;
      var dangqian = $("table tr:nth-child("+weizhi+") td:nth-child(2)").text();
      $("table tr:nth-child("+weizhi+") td:nth-child(2)").text(parseInt(dangqian)+1);
    }else {
        $("table").append("<tr><td>"+ meal +"</td><td>1</td></tr>");
    }
  }
  shownumber();
});
//减少菜单
$(".minus").click(function minus(){
  var howma = $(this).parent().parent().prev();
  if(howma.text() == 1 || howma.text() == 0 ){
  howma.text("");
  }else {
    howma.text(parseInt(howma.text())-1);
  }
  var meal = $(this).parent().prev().find("h4").text();
  var areameal = $(".buycar table tr td").map(function(){
    return $(this).text();
  }).get();
  //如果表单为空
  if(areameal == ""){
  alert("物品不存在");
  }else{
    //得到当前表格数据
    var alreadydata = $(".buycar table tr td").map(function(){
      return $(this).text();
    }).get();
    var cun = true;
    //判断要加入菜单表格是否存在
     for(var i =0;i<alreadydata.length;i++){
       if(alreadydata.indexOf(meal) != -1){
         cun = true;
       }else {
         cun = false;
       }
     }
     if(cun == true){
       //修改已存在的信息
      var weizhi = (alreadydata.indexOf(meal))/2+2;
      var dangqian = $("table tr:nth-child("+weizhi+") td:nth-child(2)").text();
      if(dangqian>1){
        $("table tr:nth-child("+weizhi+") td:nth-child(2)").text(parseInt(dangqian)-1);
      }else {
        $("table tr:nth-child("+weizhi+") ").remove();
      }

    }else {
      //物品不存在
        alert("物品不存在");
    }
  }
  shownumber();
});

//购物车显示数量
function shownumber() {
  var num =  0;
  var numlengh = $("table tr");
  for(var i = 1 ;i <= numlengh.length ; i++){
    var zhi = $("table tr:nth-child("+i+") td:nth-child(2)").text();
    if(zhi != ""){
      num = num +  parseInt(zhi);
    }
  }
   $(".badge").text(num);
};

//显示购物车
$(".car button").click(function() {
  if(($(".buycar").css("display")) == "none"){
    $(".buycar").css("display","inline-block");
    $(".savesql").css("display","inline-block");
    $(".clearcar").css("display","inline-block");
  }else{
    $(".buycar").css("display","none");
    $(".savesql").css("display","none");
    $(".clearcar").css("display","none");
  }
});
