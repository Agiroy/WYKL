<?php
	header("Access-Control-Allow-Origin:*");
	include "public.php";
	$status=$_GET["status"];
	if($status=="login"){
		$uname=$_GET["uname"];
		$upwd=$_GET["upwd"];
		$sql="SELECT * FROM `pro` WHERE pname='$uname'";
		$row=mysql_query( $sql );
		$arr=mysql_fetch_array($row);
		if($arr){
			if($upwd==$arr["pwd"]){
				echo 1;//登陆成功
			}else{
				echo 2; //密码错误
			}
		}else{
			echo 0; //用户名错误
		}
	}
	if($status=="register"){
		$uname=$_POST["uname"];
		$upwd=$_POST["upwd"];
		$sql="INSERT INTO `pro`(`pname`, `pwd`) VALUES ('$uname','$upwd')";
		$res = mysql_query($sql);
		if($res){
			echo"<script>alert('注册成功');location.href='http://127.0.0.1/WYKL/html/login.html'; </script>";
		}else{
			echo"<script>alert('注册失败');location.href='http://127.0.0.1/WYKL/html/register.html'; </script>";
		}
	}
	if($status=="yz"){
		$uname=$_GET["uname"];
//		echo $uname;
		$sql="SELECT * FROM `pro` WHERE pname='$uname'";
		$row=mysql_query( $sql );
		$arr=mysql_fetch_array($row);
		if($arr){
			echo 1;//用户名存在
		}else{
			echo 0; //注册成功
		}
	}
?>