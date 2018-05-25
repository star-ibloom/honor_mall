function detegation(child,callback){
	//1.必须是合法元素集合;
	//2.必须在绑定事件的元素的子集;
	var child = [].slice.call(child);
	return function(e){
		var evt = e || widnow.event;
		var target = evt.target || evt.srcElement;
		// alert(1);
		if(child.indexOf(target) != -1){
			//执行事件处理函数;
			callback.call(target,e);
		}
	}
}
function setCookie(name,value,options){
	//options => 可选参数; 非必填;
	/*{
		expires:选填
		path:选填
	}
	*/
	if(!name || !value){
		return 0; //必选参数为空,没法继续设置cookie;
	}
	var cookieString ; //最终拼接的字符串;
	cookieString = name+"="+value;
	if(!(options instanceof Object)){
		//如果配置参数没有传递，咱们代码不用继续执行，利用现有字符串设置cookie即可。
		document.cookie = cookieString;
		return 0;
	}
	if(typeof options.expires == "number"){
		var d = new Date();
		d.setDate(d.getDate() + options.expires);
		cookieString += ";expires="+d;
	}
	if(typeof options.path == "string"){
		cookieString += ";path="+options.path;
	}
	document.cookie = cookieString;
}
function removeCookie(name,options){
	var obj = {
		expires:-1
	}
	options.path ? obj.path = options.path : "";
	setCookie(name," ",obj)
}
function getCookie(name){
	var cookieString = document.cookie;
	var cookieArray = cookieString.split("; ");
	for(var i = 0 ; i < cookieArray.length ; i++){
		var item = cookieArray[i].split("=");
		if(item[0] == name){
			return item[1];
		}
	}
}
function createEle(tagName) {
    return document.createElement(tagName);
}