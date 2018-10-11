/*封装代码列表
1.获取时间（中国标准）
2.绑定事件兼容代码
3.解绑任意绑定事件的兼容代码
4.封装匀速动画的函数
5.获取浏览器向上卷曲和向左卷曲的距离
6.获取浏览器窗口的宽高
7.获取元素节点
8.获取元素的任意的属性的值 
9改变同个元素的多个属性动画函数+回调函数+opacity+z-zindex
*/
console.log("test");
//1.日期 封装函数
function getTime(){
	function pushZero(t){
		var result = t < 10 ? "0" + t : t;
		return result;
	}
	var d=new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	var hours = pushZero(d.getHours());
	var minutes = pushZero(d.getMinutes());
	var seconds = pushZero(d.getSeconds());
	var week=d.getDay();
	switch(week){
		case 1:week="一";
		break;
		case 2:week="二";
		break;
		case 3:week="三";
		break;
		case 4:week="四";
		break;
		case 5:week="五";
		break;
		case 6:week="六";
		break;
		case 0:week="天";
	};
	return {//运用对象的方法，可以随意的调用其中的随意一项
		year:year,
		month:month,
		date:date,
		hours:hours,
		minutes:minutes,
		seconds:seconds,
		week:week,
		time:year+"年"+month+"月"+date+"日"+hours+":"+minutes+":"+seconds+"星期"+week //完整时间
	}
};



//2.绑定事件兼容代码	ele要解绑的元素 type事件类型(字符串)  fn函数
function addEventListener(ele,type,fn){
	if (ele.addEventListener) {
		ele.addEventListener(type,fn,false);
	}else if (ele.attachEvent) {
		ele.attachEvent("on"+type,fn);
	}else{
		ele["on"+type] = fn;
	}
};

//3.解绑任意绑定事件的兼容代码  ele要解绑的元素 type事件类型  fn函数
function removerEventListener(ele,type,fn){
	if (ele.removeEventListener) {
		ele.removeEventListener(type,fn,false);
	}else if (ele.detachEventListener) {
		ele.detachEventListener("on" + type,fn);
	}else{
		ele["on"+type] = null;
	}
};


//4.封装匀速动画的函数  
function animation1(ele,target){
	var current = ele.offsetLeft;
	ele.style.left = target + "px";
	ele.style.transition = "all " + Math.abs(((target-current)/100))*0.1+"s linear";
}



//5.获取浏览器向上卷曲和向左卷曲的距离
function getScroll(){
	return {
		left:document.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
		top:document.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
	};
};

//6.获取浏览器窗口的宽高
function getScreen(){
	return {
		width:document.innerWidth || document.documentElement.clinetWidth || document.body.clientWidth || 0,
		height:document.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
	};
};

//7.获取元素节点 ele为元素的类名或id或标签名
function getNode(ele){
	if (ele[0] == ".") {
		return document.getElementsByClassName(ele.substr(1,ele.length-1));
	}else if(ele[0] == "#"){
		return document.getElementById(ele.substr(1,ele.length-1));
	}else{
		return document.getElementsByTagName(ele);
	}
};

//8.获取元素的任意的属性的值 ele 元素 attr元素属性（字符串）
function getStyle(ele,attr){
	return window.getComputedStyle(ele)[attr] ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr] || 0;//写个0防止报错
};


//9.改变同个元素的多个属性动画函数+回调函数+opacity+zIndex 
//ele元素，json的对象，fx回调函数（可加可不加）speed为定时器每次刷新时间，必填（一般为10就可以）
function animation(ele,json,fx){
	clearInterval(ele.timer);
	//给元素添加一个属性 为定时器
	var flag = true;
	ele.timer = setInterval(function(){
		for(var x in json){
			if (x == "opacity") {
				//隐藏部分代码有问题 
				// var current = getStyle(ele,x)*100;
				// var key = json[x]*100;
				// //每次移动的距离
				// var step = (json[x]*100 - current)/10; 
				// step = step>0?Math.ceil(step):Math.floor(step);
				// current += step;
				// ele.style[x] = current/100;	

				ele.style[x] = json[x];
			}else if (x == "zIndex") {
				ele.style[x] = json[x];
			}else{
				var current = parseInt(getStyle(ele,x));//将获取元素的属性转化为数字
				var key = json[x];
				//每次移动的距离
				var step = (key - current)/10; //每次移动的距离都不一样，就造成变速运动
				step = step>0?Math.ceil(step):Math.floor(step);//避免后面除不断，所以向上取整
				current += step;
				ele.style[x] = current + "px";			
			}
			if (current != key) {
				flag = false;
			}else{//最好是写一下flag=true的情况，不然有可能会出错
				flag = true;
			}
		};
		if (flag){
			clearInterval(ele.timer);
			if(fx) {//如果传入了回调函数，那么执行完毕就会执行回调函数
				fx();
			}
		}
		//console.log("目标位置"+key+"当前位置"+current+"每次移动"+step+"===="+flag);
	},15);
};