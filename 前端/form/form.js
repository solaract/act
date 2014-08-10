var getEle=function(id){
	return typeof id =="string"?document.getElementById(id):id;
}
function extend(obj, extension){
    for(var key in extension){
        if(extension.hasOwnProperty(key) && obj[key] == null){
            obj[key] = extension[key];
        }
    }
    return obj;
}
function cancelHandler(event){
    var event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.cancelBubble) event.cancelBubble = false;
    return false;
}
var checkDefault={
	userName:function(obj){
	    var reg = /[a-z0-9\-_A-Z]{5,12}/;
	    if(reg.test(obj.value)){
	        return true;
	    }
	    return false;
	},
	password:function(obj){
	    var str = obj.value;
	    return !(str.length === 0);
	},
	// Email:function(obj){
	//     var reg = /\w+@\w+\.\w+/;

	//     return reg.test(obj.value);
	// }	
}
function formCheck(userId,passId,EmailId,check){
	var allow=true;
	var i=0;	
	var check=Array.prototype.pop.call(arguments);//删除传入的对象参数,保存在变量check
	check=extend(checkDefault,check);//添加功能
	console.log(checkDefault);
	var len=arguments.length;
	for(var key in check){		
		if(!check[key](getEle(arguments[i]))){
			alert("Please fill "+key+" correct");
			return allow=false;
		}
		i++;
		if(i==len)break;		
	}
	// var user=getEle(userId);
	// var pass=getEle(passId);
	// var Email=getEle(EmailId);
	// userBool=check.userName(user);
	// passBool=check.password(pass);
	// EmailBool=check.Email(Email);
	// if(!userBool){
	// 	alert("请正确填写帐号");
	// 	allow=false;
	// }
	// else if(passBool){
	// 	alert("请正确填写密码");
	// 	allow=false;
	// }
	// else if(!EmailBool){
	// 	alert("请正确填写邮箱");
	// 	allow=false;
	// }
	return allow;
}

window.onload=function (){
	document.getElementById("form").addEventListener("submit",function(e){
		var click=formCheck(username,password,email,{Email:function(obj){
	    var reg = /\w+@\w+\.\w+/;

	    return reg.test(obj.value);
	}	});//传参
		if(!click) { // 如果有问题，就取消form事件提交
	       cancelHandler.call(null, event);
	    }
    	else alert("The form will be submit ！！！");
	});
};
