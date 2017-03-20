$(function(){

	var d=1000;
	
	$('#menu span').each(function(){
		$(this).stop().animate({
			'top':'-122px'
		},d+=250);
	});
	$('#menu .aaa').each(function(){
		$(this).stop().animate({
			'top':'0px'
		},d+=250);
	});
	$('#menu .aaa').each(function(){
		$(this).stop().animate({
			'top':'0px'
		});
	});
	$('#menu > li').hover(function(){
		var $this = $(this);
		$('a',$this).addClass('hover');
		$('span',$this).stop().animate({'top':'0px'},300).css({'zIndex':'-1'});
	},function(){
		if(!$(this).hasClass("current"))
		{
		var $this = $(this);
		$('a',$this).removeClass('hover');
		$('span',$this).stop().animate({'top':'-122px'},800).css({'zIndex':'-1'});
		}
	});
	
});