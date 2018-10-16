// 轮播设置
$("#myCarousel").carousel({
		interval:900,	
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
$(".thumbnail").each(function(){
	$(this).click(function(){
		$(".picplace").css({"display":"block","margin-left":"28%","margin-top":"5%"});
		// $("#screen").css("display","block");
		var ptext = $(this).find("h4").text();
		$(".picplace p").text(ptext);
		
		$(".picplace p").append('<span class="glyphicon glyphicon-remove picclose"></span>');
		$(".picclose").click(function(){
			$(".picplace").css("display","none");
			// $("#screen").css("display","none");
			$(".leftarrow").remove();
			$(".rightarrow").remove();
			 $(".picclose").remove();
		})
		// var par = new Array();
		// var par = $(this).parent().nextAll().find("img").attr("src");
		
		var img = $(this).children().attr("src");
		var url = "url("+img+")";
		$(".picplace div").css("background",url);
		$(".picplace div").css("background-repeat","no-repeat");
		
		// $(".picplace div").append('<span class="glyphicon glyphicon-chevron-left leftarrow" data-slide="prev"></span>');
		// $(".picplace div").append('<span class="glyphicon glyphicon-chevron-right rightarrow" data-slide="next"></span>');
		//左右查看
		// $(".rightarrow"). click(function(){
		// 	// var par = $(this).parent().next().find("img").attr("src");
		// 	// var sd = par;
		// 	alert(par);
		// });
	});
})


