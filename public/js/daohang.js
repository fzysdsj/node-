
        function $(id) {return document.getElementById(id);}
        function client(){
        if(window.innerWidth !=null) {
        	//IE9+和最新浏览器
          return {
          width: window.innerWidth,
          height: window.innerHeight
          }
        }
      else if(document.compatMode ==="CSS1Compat"){
      	//判断是否是怪异浏览器
        return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
        }
        }
        return {
        //怪异浏览器
        width: document.body.clientWidth,
        height: documet.body.clientHeight
        }
        }
       var rwjs=document.getElementsByClassName("rwjs");
       function z(){
       var cwidth2 = client().width;
       if(cwidth2<=992) {
  		for(var i=0;i<rwjs.length;i++){
  		rwjs[i].parentNode.style ="text-align:center;"; 
  	    }
        }
       if(cwidth2<=768) {
  	    $('loaction').style.display = "none";
  	    /*$('search').style = "margin-right:30%";*/
        }
       if(cwidth2>768) {
    	$('loaction').style.display = "block";
    	$('search').style = "margin-left:0";
        }
       if(cwidth2<300) {
        $('search').style.width = "80px";
        }
        if(cwidth2 >=650) {
        $('fzys').style.display = "block";
        } 
        if(cwidth2 <650) {
        $('fzys').style.display = "none";
        }          
        }
       z();
  
  
       window.onresize = function() {
      	var cwidth = client().width;	
  	    if(cwidth<=992) {
  		 for(var i=0;i<rwjs.length;i++){
  		 rwjs[i].parentNode.style ="text-align:center;"; 
  	    }
        }
        if(cwidth<768) {
  	     $('loaction').style.display = "none";
  	     $('search').style = "margin-right:30%;";
        }
        if(cwidth>=768) {
    	 $('loaction').style.display = "block";
    	 $('search').style = "margin-left:0;";
        }
        if(cwidth<300) {
         $('search').style.width = "80px";
        }
        if(cwidth >=650) {
        $('fzys').style.display = "block";
        }
         if(cwidth <650) {
        $('fzys').style.display = "none";
        }       
        }
