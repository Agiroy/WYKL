var $dh=$(".daohang3 li"),
	$odv=$(".fen");
var txt =document.getElementById("txt");
txt.onkeyup = function(){
		var  str = txt.value;
		var scr = document.createElement("script");
		scr.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+str+"&cb=fn";
		document.body.appendChild(scr);
	}
	function fn(msg){
		u.innerHTML = "";
		var item = msg.s;
		for(var i = 0 ; i < item.length ; i++ ){
			u.innerHTML +=`
							<li>
								<a href='https://www.baidu.com/s?wd=${item[i]}'>
									${item[i]}
								</a>
							</li>
							`;
		}
	}
	$("#txt").keyup(function(){
	$("#u").css("display","block");
})
$(document).click(function(){
	$("#u").css("display","none");
})

//$dh.mouseover(function(){
//	var index=$(this).index();
//	//console.log(index);
//	$odv.eq(index).css("display","block");
//}).mouseout(function(){
//	$odv.hide();
//	$(".daohang3").hide();
//});
//$odv.mouseover(function(){
//	$(".daohang3").show();
//	$(this).show();
//	//console.log(1)
//}).mouseout(function(){
//	$odv.hide();
//	$(".daohang3").hide();
//})
//$(".fenglei").mouseover(function(){
//	//console.log(1)
//	$(".daohang3").show();
//}).mouseout(function(){
//	$(".daohang3").hide();
//})
// $(".x li").on({
//		"mouseover":function(){
//			var index=$(this).index();
//			$(".fdj img").eq(index).css("z-index",1).siblings().css("z-index",0);
//			$(".fdj1 img").eq(index).css("display","block").siblings().css("display","none");
//		},
//		"mouseout":function(){
//			$(".fdj1").css("display","none");
//		}
//	 })
//	 $(".fdj").on({
//	 	"mouseover":function(){
//	 		$(".mask").css({"display":"block","zIndex":1000});
//	 		$(".fdj1").css("display","block");
//	 	},
//	 	"mouseout":function(){
//	 		$(".mask").css({"display":"none","zIndex":0});
//	 		$(".fdj1").css("display","none");
//	 	},
//	 	"mousemove":function(e){
//	 		var e=e||event;
//	 		var x=e.pageX-$(".fdj").offset().left-$(".mask").outerWidth()/2,
//	 			y=e.pageY-$(".fdj").offset().top-$(".mask").outerHeight()/2,
//	 			maxl=$(".fdj").outerWidth()-$(".mask").outerWidth(),
//	 			maxt=$(".fdj").outerHeight()-$(".mask").outerHeight();
//	 			console.log(x,y)
//	 		if (x>maxl) {
//	 			x=maxl;
//	 		}else if (x<0) {
//	 			x=0;
//	 		}
//	 		if (y>maxt) {
//	 			y=maxt;
//	 		}else if(y<0) {
//	 			y=0;
//	 		}
//	 		//console.log(x,y)
//	 		$(".mask").css({"left":x,"top":y});
//	 		var x1=x*$(".fdj1 img").first().outerWidth()/$(".fdj").outerWidth(),
//	 			y1=y*$(".fdj1 img").first().outerHeight()/$(".fdj").outerHeight();
//	 		$(".fdj1 img").css({"left":-x1,"top":-y1});
//	 	}
//	 })

$(".j3").mouseover(function(){
	$(".j6").css("display","block");
})
$(".j6").mouseover(function(){
	$(".j6").css("display","block");
}).mouseout(function(){
	$(".j6").css("display","none");
})
$(".j5").mouseover(function(){
	$(".j6").css("display","block");
})

$(".c5 li").mouseover(function(){
	var index=$(this).index();
	$(".c5 li").eq(index).css("border","2px solid red").siblings().css("border","none");
})

$(".c6 li").mouseover(function(){
	var index=$(this).index();
	$(".c6 li").eq(index).css("border","2px solid red").siblings().css("border","1px solid gray");
})

var i=1;
$(".c7 input").eq(2).click(function(){
	if (i==20) {
		$(".c7 input").eq(1).val(20);
		$(".c7 input").eq(2).css("background","gray");
		$(".c7 input").eq(0).css("background","#fff");
		return false;
	}
	$(".c7 input").eq(1).val(++i);
})
$(".c7 input").eq(0).click(function(){
	if (i==1) {
		$(".c7 input").eq(1).val(1);
		$(".c7 input").eq(2).css("background","#fff");
		$(".c7 input").eq(0).css("background","gray");
		return false;
	}
	$(".c7 input").eq(1).val(--i);
})

$(".c10 span").mouseover(function(){
	$(this).css("border-bottom","1px solid #000");
})

$(".c9 li").mouseover(function(){
	$(".c9 li").eq(0).css("background","#fff");
}).mouseout(function(){
	$(this).css("background","pink");
})
