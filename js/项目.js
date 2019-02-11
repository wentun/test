// 轮播设置
$("#myCarousel").carousel({
		interval:1800,
});
//上下居中
// $(window).load(function(){
// 	$(".text").eq(0).css("margin-top",($(".auto").eq(0).height() - $(".text").eq(0).height())/2 + 'px');
// });

	// $('#screen').dialog({
	// 	modal:true;
	// })
$(document).ready(
	function(){//页面初始化
		goCenter();
		//滚动条滚动
		$(window).scroll(
			function(){
				goCenter();
			});
		});
	function goCenter(){
			var h = $(window).height();
			var w = $(window).width();
			var st = $(window).scrollTop();
			var sl = $(window).scrollLeft();
 			//遮罩层
			$("#screen").css("width", w+sl);
			$("#screen").css("height", h+st);
			//皮肤位置
			$("#skin").css("top", (h/13)+st);
			$("#skin").css("left", (w/27)+sl);
			//预览位置
			$(".picplace").css("top", (h/13)+st);
			$(".picplace").css("left", (w/27)+sl);
	}


//换肤弹框
function change(){

	$("#skin").css({"display":"block","margin-left":"28%","margin-top":"5%"});
	$("#screen").css("display","block");
	// $(document.body).css({//禁用滚动条
 //            "overflow-y": "hidden"
	// });
}
//关闭弹框
function guan(){
	$("#skin").css("display","none");
	$("#screen").css("display","none");
}
//换肤
$("dl").each(function(){
	$(this).click(function(){
		var child = $(this).attr("class");
		var url = "url(image/big"+child+".jpg)";
		$("body").css("background",url);
		$("body").css("background-repeat","no-repeat");
		$("#skin").css("display","none");
	 	$("#screen").css("display","none");
	});
})
//点击查看大图
$(".thumbnail img").each(function(){
	$(this).click(function(){
		$(".picplace").css({"display":"block","margin-left":"24%","margin-top":"5%"});
		var ptext = $(this).next().find("h4").text();
		$(".picplace p").text(ptext);
		$(".picplace p").append('<span class="glyphicon glyphicon-remove picclose"></span>');
		$(".picclose").click(function(){
			$(".picplace").css("display","none");
			$(".leftarrow").remove();
			$(".rightarrow").remove();
			 $(".picclose").remove();
		});
		var img = $(this).attr("src");
		var url = "url("+img+")";
		$(".picplace div").css("background",url);
		$(".picplace div").css("background-repeat","no-repeat");
	});
})
//登录弹窗
function showlogin(){
	$(".login").css({"display":"block","margin-left":"28%","margin-top":"5%"});
	$("#screen").css("display","block");
}
//关闭弹框
function closelogin(){
	$(".login").css("display","none");
	$("#screen").css("display","none");
}
//注册弹窗
function showregister(){
	$(".register").css({"display":"block","margin-left":"28%","margin-top":"5%"});
	$("#screen").css("display","block");
}
//关闭弹框
function closeregister(){
	$(".register").css("display","none");
	$("#screen").css("display","none");
}
//删除功能
function deleteuser(){
	var mesg = confirm("确定删除用户吗？");
	if(mesg == true){
		alert("删除成功")
	}else {
		alert(1);
	}
}
