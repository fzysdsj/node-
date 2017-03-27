window.onload = function() {
	function $(id) {return document.getElementById(id);}
	var count =26;
	var speed =1000;
	setTimeout(goIndexPage,speed);
	function goIndexPage() {
		count--;
         $('back').innerHTML="<a href='/index'>"+count+"秒后跳转回首页";
		if(count<=0) {
			window.location.href="/index";
		}
		else {
			setTimeout(goIndexPage,speed);
		}
	}
}