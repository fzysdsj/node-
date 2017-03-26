window.onload = function(){
            function $(id){ return document.getElementById(id);}
            $("seepassword").onmouseout= function() {
              //显示密码     
                $("signupPassword").type="password";
             
             }
            $("seepassword").onmouseover= function() {
              //隐藏密码     
                $("signupPassword").type="text";
             
             }
            $("signupName").onblur = function(){   // 离开焦点判断
                // alert($("txt").value);
                 //alert(this.value);
                 var s=0;
                 $("submit").disabled = true;                    
                for(var i=0;i<this.value.length;i++) {
                
                    if(isNaN(this.value.charAt(i)))
                    {
                      s=s+1;
                    }
                    var j=s;
                }         
                if(this.value == "")
                {
                    $("result").className ="wrong";
                    $("result").innerHTML = "用户名不能为空";
                }
                else if(this.value.length<6||this.value.length>12)
                {
                    $("result").className = "wrong";
                    $("result").innerHTML = "请输入6~12位用户名";
                }
                else if(!isNaN(this.value))  // 判断是不是全为数字
                {
                    $("result").className ="wrong";
                    $("result").innerHTML = "用户名不能全为数字";
                }
                else if(j==this.value.length)  // 判断是不是全为字母
                {
                    $("result").className ="wrong";
                    $("result").innerHTML = "用户名不能全为字母";
                }                
                else
                {
                    $("result").className ="right";
                    $("result").innerHTML = "输入正确";

                }
            }
 $("signupPassword").onblur = function(){   // 离开焦点判断
                // alert($("txt").value);
                 //alert(this.value);
                $("submit").disabled = true;
                var s=0;                    
                for(var i=0;i<this.value.length;i++) {
                if(isNaN(this.value.charAt(i)))
                {
                      s=s+1;
                    }
                 var j=s;
                }         
                if(this.value == "")
                {
                    $("result1").className ="wrong";
                    $("result1").innerHTML = "密码不能为空";
                }
                else if(!isNaN(this.value))  // 判断不是数字
                {
                    $("result1").className ="wrong";
                    $("result1").innerHTML = "密码不能全是数字";
                    $("submit").disabled = true;
                }
                else if(j==this.value.length)  // 判断不是数字
                {
                    $("result1").className ="wrong";
                    $("result1").innerHTML = "密码不能全是字母";
                }
                else if(this.value.length >12 || this.value.length<6)
                {
                    $("result1").className ="wrong";
                    $("result1").innerHTML = "请输入6~12位密码";
                }
                else
                {
                    $("result1").className ="right";
                    $("result1").innerHTML = "输入正确";
                    $("submit").disabled = false;
                }
            }
       
        }
