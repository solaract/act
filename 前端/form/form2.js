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
// 通用表单验证插件。、。、只要用了就能验证
var checkPlug = (function(){

    function CallMe(userId,passId,EmailId,target,check){        
        var check=Array.prototype.pop.call(arguments);//删除传入的对象参数,保存在变量check
        var target=Array.prototype.pop.call(arguments);//删除传入的目标参数,保存在变量target
        this.target = getEle(target);
        this.check = extend(checkDefault,check);
        this.arguments=arguments;
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
        Email:function(obj){
            var reg = /\w+@\w+\.\w+/;

            return reg.test(obj.value);
        }    
    }
    CallMe.prototype.Run = function(){
        var check = this.check;
        var target=this.target;
        var arguments =this.arguments;
        var allow=true;
        var i=0;
        var len=arguments.length;
        for(var key in check){      
        if(!check[key](getEle(arguments[i]))){
                alert("Please fill "+key+" correct");
                return allow=false;
            }
            i++;
            if(i==len)break;        
        }
        return allow;
        // form.addEventListener('submit', function(e){
        // var RenPin = !(allow)||false;
        // if(!(allow)||RenPin) { // 如果有问题，就取消form事件提交
        //    cancelHandler.call(null, event);//还记得call函数怎么用的么
        // }
        // else alert("The form will be submit ！！！");
        // });
    };
    return CallMe;
})();
window.onload=function(){
    var click1=new checkPlug(username,password,email,form,{});
    document.getElementById("form").addEventListener("submit",function(e){
        var RenPin=!(click1.Run())||false;
        if(RenPin) { // 如果有问题，就取消form事件提交
           cancelHandler.call(null, event);//还记得call函数怎么用的么
        }
        else alert("The form will be submit ！！！");
    });
}