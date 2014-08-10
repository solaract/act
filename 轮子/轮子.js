//获取
var getEle=function(id){
	return typeof id =="string"?document.getElementById(id):id;
}
//添加事件
var addFun=function(id,eve,fun,cap){
	var cap=cap||false;
	var ele=getEle(id);
	if(window.attachEvent)
		ele[fun]=ele.attachEvent(eve,fun);
	else
		ele.addEventListener(eve,fun,cap);
}

//修改属性
var EleAttr=function(id,Attname,value){
	var ele=getEle(id);
	for (var i = 0; i<ele.attributes.length; i++) {
		var attrName=ele.attributes[i].nodeName;
		if(attrName==Attname&&typeof(value)=='string'){  
			ele.attributes[i].nodeValue=value;           
			return ele.attributes[i].nodeValue;
		}
		else if(attrName==Attname)return ele.attributes[i].nodeValue;
	};
}
//扩展
function extend(obj, extension){
    for(var key in extension){
        if(extension.hasOwnProperty(key) && obj[key] == null){
            obj[key] = extension[key];
        }
    }
    return obj;
}
//取消默认事件
function cancelHandler(event){
    var event = event || window.event;
    if(event.preventDefault) event.preventDefault();
    if(event.cancelBubble) event.cancelBubble = false;
    return false;
}