 // JavaScript Document
$(document).ready(function () {
	// 1.动态创建span
	for(var i=0;i<$("#imgs li").length-2;i++)
	{
		var span=$("<span></span>");
		$(".sp").append(span);
		span.addClass("smal");
	}
	
	$(".sp span:eq(0)").addClass("current");
	// 2.获取按钮进行动画操作
	var index=1;
	// index的作用是用来显示按钮的。
	// 跟随按钮动画
	function showbutton(){
		for(var i=0;i<$(".sp span").length;i++){
			$(".sp span:eq("+i+")").removeClass("current");
		}
		$(".sp span:eq("+(index-1)+")").addClass("current");
		console.log($(".sp span").length);
	}
    //动画函数。
	function sanimate(sp){
		 if(index>6)
		{
			index=1;
		}else if(index<1)
		{
			index=6;
		}
		var offsetl=parseInt($("#imgs ul").css("left"));
		$("#imgs ul").animate({
			left: offsetl+sp
		});

	}
	$(".next").on("click",function(){
		index++;
		if(parseInt($("#imgs ul").css("left"))<-5976)
		{
            $("#imgs ul").css({left:-996});
		}
		sanimate(-996);
		
		showbutton();	
		
		
	});
	$(".prev").on("click",function(){
		index--;
		if(parseInt($("#imgs ul").css("left"))>-996)
		{
            $("#imgs ul").css({left:-5976});
		}
		sanimate(996);
		
		showbutton();  
	})
	function autoplay(){
		index++;
		if(parseInt($("#imgs ul").css("left"))<-5976)
		{

			$("#imgs ul").css({
				left: '-996px'
			});	
		}
		sanimate(-996);
		
		showbutton();	
	}
	var timer=setInterval(autoplay, 3000);
	$(".sp").find("span").mouseenter(function(){
		var tonew=$(this).index()+1;
		var sp1=-996*(tonew-index)
		sanimate(sp1);
		index=tonew;
		showbutton();
	})
	
     $("#imgs").mouseenter(function(){
		 clearInterval(timer);
		 })
	 $("#imgs").mouseleave(function(){
		 timer=setInterval(autoplay,3000);
		 })
	/*cake*/
	// 定义一个函数解决复用效果
	// 
	function enanimate(obj){
	obj.mouseenter(function(){
		
		obj.find('img').animate({
			width:350,
			height:230
			},400);})
	}
	function leaveanimate(obj){
		obj.mouseleave(function(){
		
		obj.find('img').animate({
			width:325,
			height:220
			},400);})
	}
	enanimate($(".ti1"));
	leaveanimate($(".ti1"));
	enanimate($(".ti2"));
	leaveanimate($(".ti2"));
	enanimate($(".ti3"));
	leaveanimate($(".ti3"));
	enanimate($(".ti4"));
	leaveanimate($(".ti4"));
	enanimate($(".ti5"));
	leaveanimate($(".ti5"));
	enanimate($(".ti6"));
	leaveanimate($(".ti6"));
})