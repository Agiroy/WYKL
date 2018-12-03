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
   
   $(".po li").mouseover(function(){
   		if($(this).find(".xiala").length){
   			var index=$(this).index();
   			$(".po>li").eq(index).find(".xiala").css({"display":"block","z-index":9}).end().siblings().find(".xiala").css("display","none");
   		}
   }).mouseout(function(){
   		$(".xiala").css("display","none");
   })
   
	var list=document.getElementById("u");
//	console.log(list);
	list.onmouseover=function(e){
		var e =e || event;
		var target = e.target || e.srcElement;
		if( target.nodeName == "LI"){
			txt.value = target.children[0].innerText;
		}
	}
	
	var url = location.href;
	var str = url.split("=")[1];
	//console.log(str);
$(".qq").eq(0).html(str).css({"color":"gray","font-size":"12px"}).next(".qq").html("欢迎您").css({"color":"gray","font-size":"12px"});
