var $list = $(".yuan li"),
	$img = $(".lunbo img"),
	$lf = $(".lunbo #wl"),
	$rg = $(".lunbo #wr"),
	$dh = $(".daohang3 li"),
	$odv = $(".fen");
var index = 0;
var timer = setInterval(autoPlay, 2000);

function autoPlay() {
	index++;
	if(index == $list.size()) {
		index = 0;
	}
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
}
$list.click(function() {
	clearInterval(timer);
	var index = $(this).index();
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
	timer = setInterval(autoPlay, 2000);
})
$lf.click(function() {
	clearInterval(timer);
	var index = $(".active").index();
	//console.log(index);	
	index++;
	if(index == $img.size()) {
		index = 0;
	}
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
	timer = setInterval(autoPlay, 2000);
});
$rg.click(function() {
	clearInterval(timer);
	var index = $(".active").index();
	//console.log(index);	
	index--;
	if(index == -1) {
		index = $img.size() - 1;
	}
	$list.eq(index).addClass("active").siblings().removeClass("active");
	$img.eq(index).fadeIn(2000).siblings().not("div").fadeOut(2000);
	timer = setInterval(autoPlay, 2000);
});
$dh.mouseover(function() {
	var index = $(this).index();
	//console.log(index);
	$odv.eq(index).css("display", "block");
}).mouseout(function() {
	$odv.hide();
	$(".daohang3").hide();
});
$odv.mouseover(function() {
	$(".daohang3").show();
	$(this).show();
	//console.log(1)
}).mouseout(function() {
	$odv.hide();
	$(".daohang3").hide();
})
$(".fenglei").mouseover(function() {
	//console.log(1)
	$(".daohang3").show();
}).mouseout(function() {
	$(".daohang3").hide();
})
$("#txt").keyup(function() {
	$("#u").css("display", "block");
})
$(document).click(function() {
	$("#u").css("display", "none");
})
$(".q4 li").mouseenter(function() {
	var index = $(this).index();
	//$(this).css("height",300);
	$(this).find("span").css({
		"overflow": "visible",
		"white-space": "normal"
	});
	$(this).css({
		"zIndex": 2,
		"borderColor": "red"
	})
}).mouseleave(function() {
	var index = $(this).index();
	//$(this).css("height",258);
	$(this).find("span").css({
		"text-overflow": "ellipsis",
		"white-space": "nowrap",
		"overflow": "hidden"

	});
})
$(".louti li").click(function() {
	var index = $(this).index();
	$("html").stop().animate({
		scrollTop: ($(".q4").eq(index - 1).offset().top)
	}, 1500)
})
$(".louti li").mouseover(function() {
	var index = $(this).index();
	//console.log(this)
	//console.log(index)
	$(".louti li").eq(index - 1).css({
		"background": "black",
		"opacity": 0.3
	}).siblings().css({
		"background": "#ff1e32",
		"opacity": 1
	});
})

$(window).scroll(function() {
	if($("html").scrollTop() >= $(".q1").offset().top && $("html").scrollTop() <= $(".q5").offset().top) {
		$(".louti").css("display", "block");
	} else {
		$(".louti").css("display", "none");
	}
	var index = 0;
	var arr = [];
	$(".q4").each(function(ind) {
		arr.push(Math.abs($(".q4").eq(ind).offset().top - $("html").scrollTop()));
	})
	var min = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] <= min) {
			index = i;
			min = arr[index];
		}
	}

	$(".louti li").eq(index).css({
		"background": "black",
		"opacity": 0.3
	}).siblings().css({
		"background": '#ff1e32',
		"opacity": 1
	})
	//console.log(index)
})
$(".louti .two").click(function() {
	$("html").stop().animate({
		scrollTop: 0
	}, 1500)
})
$(".gg li").mouseover(function() {
	var index = $(this).index();
	//console.log(index)
	$(".zz li").eq(index).css("display", "block").siblings().css("display", "none");
}).mouseout(function() {
	var index = $(this).index();
	$(".zz li").eq(index).css("display", "none");
})

var txt = document.getElementById("txt");
txt.onkeyup = function() {
	var str = txt.value;
	var scr = document.createElement("script");
	scr.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + str + "&cb=fn";
	document.body.appendChild(scr);
}

function fn(msg) {
	u.innerHTML = "";
	var item = msg.s;
	for(var i = 0; i < item.length; i++) {
		u.innerHTML += `
							<li>
								<a href='https://www.baidu.com/s?wd=${item[i]}'>
									${item[i]}
								</a>
							</li>
							`;
	}
}

$(".po li").mouseover(function() {
	if($(this).find(".xiala").length) {
		var index = $(this).index();
		$(".po>li").eq(index).find(".xiala").css({
			"display": "block",
			"z-index": 9
		}).end().siblings().find(".xiala").css("display", "none");
	}
}).mouseout(function() {
	$(".xiala").css("display", "none");
})

var list = document.getElementById("u");
//	console.log(list);
list.onmouseover = function(e) {
	var e = e || event;
	var target = e.target || e.srcElement;
	if(target.nodeName == "LI") {
		txt.value = target.children[0].innerText;
	}
}

$(".active li").click(function() {
	location.href = "http://127.0.0.1/WYKL/html/xiangqing.html";
})
console.log(localStorage.userName)
if(localStorage.userName) {
	var str = localStorage.userName;
	//console.log(str);
	$(".qq").eq(0).html(str).css({
		"color": "gray",
		"font-size": "12px"
	});
	$(".qq").eq(1).html("欢迎您").css({
		"color": "gray",
		"font-size": "12px"
	})
	$(".qq").eq(2).html("退出登录").css({
		"color": "gray",
		"fontSize": "12px"
	});
}

$(".qq").eq(2).click(function() {
	localStorage.clear();
	$(".qq").eq(0).html("登录").css({
		"color": "gray",
		"font-size": "12px"
	});
	$(".qq").eq(1).html("免费注册").css({
		"color": "gray",
		"font-size": "12px"
	});
	$(".qq").eq(2).html("手机考拉").css({
		"color": "gray",
		"font-size": "12px"
	});
})

$(".qq").eq(0).click(function(){
	if (localStorage.userName) {
		return false;
	}else{
		location.href="http://127.0.0.1/WYKL/html/login.html";
	}
})
$(".qq").eq(1).click(function(){
	if (localStorage.userName) {
		return false
	}else{
		location.href="http://127.0.0.1/WYKL/html/register.html";
	}
})