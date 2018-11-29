var $list=$(".yuan li"),
	$img=$(".lunbo img"),
	$lf=$(".lunbo #wl"),
	$rg=$(".lunbo #wr"),
	$dh=$(".daohang3 li"),
	$odv=$(".fen");
var index=0;
var timer=setInterval(autoPlay,2000);
function autoPlay(){
	index++;
	if (index==$list.size()) {
		index=0;
	}
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
}
$list.click(function(){
	clearInterval(timer);
	var index=$(this).index();
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
	timer=setInterval(autoPlay,2000);
})
$lf.click(function(){
	clearInterval(timer);
	var index=$(".active").index();
	//console.log(index);	
	index++;
	if (index==$img.size()) {
		index=0;
	}
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
	timer=setInterval(autoPlay,2000);
});
$rg.click(function(){
	clearInterval(timer);
	var index=$(".active").index();
	//console.log(index);	
	index--;
	if (index==-1) {
		index=$img.size()-1;
	}
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
	timer=setInterval(autoPlay,2000);
});
$dh.mouseover(function(){
	var index=$(this).index();
	//console.log(index);
	$odv.eq(index).css("display","block");
}).mouseout(function(){
	$odv.hide();
	$(".daohang3").hide();
}.bind(this));
$odv.mouseover(function(){
	$(".daohang3").show();
	$odv.show();
	//console.log(1)
	$dh.show();
}).mouseout(function(){
	$odv.hide();
	$(".daohang3").hide();
})
$(".fenglei").mouseover(function(){
	//console.log(1)
	$(".daohang3").show();
}).mouseout(function(){
	$(".daohang3").hide();
})
//$dh.mouseover(function(){
//	var index=$(this).index();
//	console.log(index);
//	$dh.eq(index).css({"background":"white","color" : "red"}).siblings().css({"background":"#ff2851","color":"white"});
//	$dh.eq(index).a.css("color","red").siblings().css("color","white");
//})
