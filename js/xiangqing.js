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

$dh.mouseover(function(){
	var index=$(this).index();
	//console.log(index);
	$(".erji").show();
	$odv.eq(index).css({"display":"block","z-index":9});
}).mouseout(function(){
	$(".erji").hide();
	$odv.hide();
	$(".daohang3").hide();
});
$odv.mouseover(function(){
	$(".erji").show();
	$(".daohang3").show();
	$(this).show();
	//console.log(1)
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
   $(".x li").on({
		"mouseover":function(){
			var index=$(this).index();
			$(".fdj img").eq(index).css("z-index",1).siblings().css("z-index",0);
			$(".fdj1 img").eq(index).css("display","block").siblings().css("display","none");
		},
		"mouseout":function(){
			$(".fdj1").css("display","none");
		}
	 })
	 $(".fdj").on({
	 	"mouseover":function(){
	 		$(".mask").css({"display":"block","zIndex":1000});
	 		$(".fdj1").css({"display":"block","z-index":3});
	 	},
	 	"mouseout":function(){
	 		$(".mask").css({"display":"none","zIndex":0});
	 		$(".fdj1").css({"display":"none","z-index":0});
	 	},
	 	"mousemove":function(e){
	 		var e=e||event;
	 		var x=e.pageX-$(".fdj").offset().left-$(".mask").outerWidth()/2,
	 			y=e.pageY-$(".fdj").offset().top-$(".mask").outerHeight()/2,
	 			maxl=$(".fdj").outerWidth()-$(".mask").outerWidth(),
	 			maxt=$(".fdj").outerHeight()-$(".mask").outerHeight();
	 			//console.log(x,y)
	 		if (x>maxl) {
	 			x=maxl;
	 		}else if (x<0) {
	 			x=0;
	 		}
	 		if (y>maxt) {
	 			y=maxt;
	 		}else if(y<0) {
	 			y=0;
	 		}
	 		//console.log(x,y)
	 		$(".mask").css({"left":x,"top":y});
	 		var x1=x*$(".fdj1 img").first().outerWidth()/$(".fdj").outerWidth(),
	 			y1=y*$(".fdj1 img").first().outerHeight()/$(".fdj").outerHeight();
	 		$(".fdj1 img").css({"left":-x1,"top":-y1});
	 	}
	 })

$(".j3").mouseover(function(){
	$(".j6").css({"display":"block","z-index":1});
})
$(".j6").mouseover(function(){
	$(".j6").css("display","block");
}).mouseout(function(){
	$(".j6").css("display","none");
})
$(".j5").mouseover(function(){
	$(".j6").css({"display":"block","z-index":1});
})

$(".c5 li").mouseenter(function(){
	var index=$(this).index();
	$(".c5 li").eq(index).css("border","2px solid red").siblings().css("border","none");
})

$(".c5 li").click(function(){
	var index=$(this).index();
	$(".c5 li").eq(index).addClass("aa").css("border","2px solid red").siblings().css("border","none").removeClass("aa");
	$(".fdj img").eq(index).css("z-index",1).siblings().css("z-index",0);
})
$(".c5").mouseleave(function(){
	$(".c5 li").css("border","none");
	$(this).find(".aa").css("border","2px solid red");
})

$(".c6 li").mouseover(function(){
	var index=$(this).index();
	$(".c6 li").eq(index).css("border","2px solid red").siblings().css("border","1px solid gray");
})
$(".c6").mouseout(function(){
	$(".c6 li").css("border","1px solid gray");
	$(this).find(".bb").css("border","2px solid red");
})
$(".c6 li").click(function(){
	var index=$(this).index();
	$(".c6 li").eq(index).addClass("bb").css("border","2px solid red").siblings().css("border","1px solid gray").removeClass("bb");
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
}).mouseout(function(){
	$(this).css("border-bottom","none");
})

$(".c9 li").eq(0).mouseover(function(){
	$(".c9 li").eq(0).css("background","#fff");
}).mouseout(function(){
	$(this).css("background","pink");
})

$(".c11 li").mouseenter(function(){
	var index=$(this).index();
	$(this).find("a").css("color","red");
	$(this).css("background","#f9f9f9");
}).mouseleave(function(){
	$(".c11 li a").css("color","black");
	$(this).css("background","white");
})
$(".c11 li").eq(2).mouseenter(function(){
	$(".c12").css("display","block");
}).mouseleave(function(){
	$(".c12").css("display","none");
})
$(".c11 li").eq(3).click(function(){
	$("html").stop().animate({scrollTop:0},1500)
})

var p=0
$(".c9 img").on("click",function(){
			var $img = $("<img>");
//			$fa = $(this).parent().parent().find("img")
			$img.attr("src","../img/z4.jpg");
			$("body").append($img);
			$img.css({
				"width":20,
				"height":20,
				"position":"absolute",
				"left":$(this).offset().left,
				"top":$(this).offset().top
			});

			// console.log($(".gwc").offset().left,$(".gwc").offset().top)
			startMove($img[0],{
				"left":parseInt($(".gouwu").offset().left),
				"top":$(".gouwu").offset().top
			},function(){
				$img.remove();
				if ($(".c7 input").eq(1).val()!=1) {
					$(".gouwu span").html(parseInt($(".c7 input").eq(1).val())+parseInt($(".gouwu span").html()));
				}else{
					$(".gouwu span").html(++p);
				}
			})
//			,function(){
//				
//				var flag = false;
//				var pid = $fa.parent().attr("pid");
//				var price = $fa.parent().attr("price");
//				var pname = $fa.parent().attr("pname");
//				var src = $fa.parent().attr("src")
//				var arr =[];
//				if (localStorage.prolist) {
//					var brr = JSON.parse(localStorage.prolist);
//					for(var i = 0 ; i < brr.length ; i++){				
//							if (brr[i].pid == pid) {
//								// console.log(brr[i].count);
//								brr[i].count++;
//								// console.log(brr[i].count);
//								flag = true;
//							}
//								arr.push(brr[i]);
//								// console.log(brr[i].count);
//					}
//					// console.log(arr);
//				}
//				// console.log(flag);
//			if (flag) {
//				var str = JSON.stringify(arr);
//				localStorage.prolist = str;
//				showcart();
//				return;
//			}else{
//				var json = {	
//								"pid" : pid,
//								"pname":pname,
//								"count": 1,
//								"price":price,
//								"src":src
//							}
//				arr.push(json);
//			}
//			var str = JSON.stringify(arr);
//			localStorage.prolist = str;
//			showcart();
//			}.bind(this))
		});
