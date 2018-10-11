// console.log("a");
//滚动广告部分
var slidershow_p = document.querySelector(".slidershow-p");
var slidershow_p_list = slidershow_p.getElementsByTagName('li');
var slidershow_p_top = document.querySelector(".top");
var slidershow_p_bottom = document.querySelector(".bottom");

var slidershow_p_c = 0;
var slidershow_p_timer;

//变速动画函数
function animation(ele,target){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var curren = ele.offsetTop;
		var step = (target - curren) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		curren += step;
		ele.style.top = curren +"px";
		if (curren == target) {
			clearInterval(ele.timer);
		}
	},50)
}

//上下轮播
function slidershow_p_fn(){
	if (slidershow_p_c >= slidershow_p_list.length-1) {
		slidershow_p_c = 0;
		slidershow_p.style.top = "0px";
	}
	slidershow_p_c++
	animation(slidershow_p, -50*slidershow_p_c);
}
slidershow_p_timer = setInterval(slidershow_p_fn,2000);


slidershow_p_top.onmouseover = function(){
	clearInterval(slidershow_p_timer);
	slidershow_p_top.onclick = function(){
		if (slidershow_p_c >= slidershow_p_list.length-1) {
			slidershow_p_c = 0;
			slidershow_p.style.top = "0px";
		}
		slidershow_p_c++;
		animation(slidershow_p, -50*slidershow_p_c);
		
	}	
}

slidershow_p_bottom.onmouseover = function(){
	clearInterval(slidershow_p_timer);
	slidershow_p_bottom.onclick = function(){
		if (slidershow_p_c <= 0) {
			slidershow_p_c = slidershow_p_list.length-1;
			slidershow_p.style.top = -(slidershow_p_list.length-1)*50 + "px";
		}
		slidershow_p_c--;
		animation(slidershow_p, -50*slidershow_p_c);
	}	
}

slidershow_p_top.onmouseout = function(){
	slidershow_p_timer = setInterval(slidershow_p_fn,2000);
}

slidershow_p_bottom.onmouseout = function(){
	slidershow_p_timer = setInterval(slidershow_p_fn,2000);
}

for(i = 0;i < slidershow_p_list.length;i++){
	slidershow_p_list[i].onmouseover = function(){
		clearInterval(slidershow_p_timer);
	}

	slidershow_p_list[i].onmouseout = function(){
		slidershow_p_timer = setInterval(slidershow_p_fn,2000);
	}
}

//轮播图
//图片节点
var slidershowImg = document.querySelector(".slidershow-img");
var slidershowImgList = slidershowImg.getElementsByTagName('li');
//广告节点
var slidershowBanner = document.querySelector(".slidershow-banner");
var slidershowBannerList = slidershowBanner.getElementsByTagName('li');
//点节点
var slidershowDot = document.querySelector(".slidershow-dot");
var slidershowDotList = slidershowDot.getElementsByTagName('li');

var timer;
var c = 0;

function slidershow(){
	if (c == 5) {
		c = 0;
	}
	for(var i = 0;i < slidershowImgList.length;i++){
		slidershowImgList[i].style.opacity = "0";
		slidershowBannerList[i].style.opacity = "0";
		slidershowDotList[i].style.width = "12px";
		slidershowDotList[i].style.backgroundColor = "white";
	}
	slidershowImgList[c].style.opacity = "1";
	slidershowBannerList[c].style.opacity = "1";
	slidershowDotList[c].style.width = "24px";
	slidershowDotList[c].style.backgroundColor = "#00B98D";
	c++;
}

slidershow();
timer = setInterval(slidershow,2000);

for(var i = 0;i <  slidershowImgList.length;i++){
	slidershowImgList[i].onmouseover = function(){
		clearInterval(timer);
	}
	slidershowImgList[i].onmouseout = function(){
		timer = setInterval(slidershow,2000);
	}

	slidershowBannerList[i].onmouseover = function(){
		clearInterval(timer);
	}

	slidershowBannerList[i].onmouseout = function(){
		timer = setInterval(slidershow,2000);
	}

	for(var j = 0;j < slidershowDotList.length;j++){
		slidershowDotList[i].index = i;
		slidershowDotList[i].onmouseover = function(){
			clearInterval(timer);
			c = this.index;
			if (c == 5) {
				c = 0;
			}
		for(var i = 0;i < slidershowImgList.length;i++){
			slidershowImgList[i].style.opacity = "0";
			slidershowBannerList[i].style.opacity = "0";
			slidershowDotList[i].style.width = "12px";
			slidershowDotList[i].style.backgroundColor = "white";
		}
		slidershowImgList[c].style.opacity = "1";
		slidershowBannerList[c].style.opacity = "1";
		slidershowDotList[c].style.width = "24px";
		slidershowDotList[c].style.backgroundColor = "#00B98D";
		}

		slidershowDotList[i].onmouseout = function(){
			timer = setInterval(slidershow,2000);
		}
	}
}


//轮播图 右边广告部分
var topic_p = document.querySelector(".topic-p");
var topic_pLiList = topic_p.getElementsByTagName('li');

for(var i = 0;i < topic_pLiList.length;i++){
	topic_pLiList[i].onmouseover = function(){
		for(var j = 0;j < topic_pLiList.length;j++){
			topic_pLiList[j].style.height = "34px";
		}
		this.style.height = "104px";
		this.getElementsByTagName('a')[0].onmouseover = function(){
			this.style.color = "#00B98D";
		}
		this.getElementsByTagName('a')[0].onmouseout = function(){
			this.style.color = "black";
		}
	}
}


// 中间主体翻页部分
// 翻页跳转居中
var overturnCenter = document.querySelector(".overturn-center");
var overturnBack = document.querySelector(".overturn-back");
var overturnAdvance = document.querySelector(".overturn-advance");
var overturnNum = document.querySelector(".overturn-num");
var overturnNumLi = overturnNum.getElementsByTagName('li');
var articleList = document.querySelectorAll(".article-list");

//计算overturnCenter的宽
var overturnCenterWidth = overturnBack.offsetWidth + overturnAdvance.offsetWidth + 12 + overturnNumLi.length * (overturnNumLi[0].offsetWidth + 6);

overturnCenter.style.width = overturnCenterWidth + "px";

//console.log(overturnCenterWidth);

//跳转页面
var pageNum = 0;
for(var i = 0;i < overturnNumLi.length;i++){
	overturnNumLi[i].index = i;
	overturnNumLi[i].onclick = function(){
		pageNum = this.index;
		for(var j = 0;j < overturnNumLi.length;j++){
			overturnNumLi[j].getElementsByTagName('a')[0].style.backgroundColor = "#F1F1F1";
			articleList[j].style.display = "none";
		}
		this.getElementsByTagName('a')[0].style.backgroundColor = "#1BBC9B";
		articleList[pageNum].style.display = "block";
	}
}

// 上一页下一页事件处理函数
function overturnShowHide(){
	for(var j = 0;j < overturnNumLi.length;j++){
		overturnNumLi[j].getElementsByTagName('a')[0].style.backgroundColor = "#F1F1F1";
		articleList[j].style.display = "none";
	}
	overturnNumLi[pageNum].getElementsByTagName('a')[0].style.backgroundColor = "#1BBC9B";
	articleList[pageNum].style.display = "block";
}


// 下一页鼠标放上及点击事件 
overturnAdvance.onmouseover = function(){
	if (pageNum != overturnNumLi.length-1) {
		overturnAdvance.style.backgroundColor = "#1BBC9B";
	}
	// 下一页点击事件
	overturnAdvance.onclick = function(){
		pageNum++;
		if (pageNum >= overturnNumLi.length-1) {
			pageNum = overturnNumLi.length-1;
			overturnAdvance.style.backgroundColor = "#F1F1F1";
		}
		overturnShowHide();
	}
	
}

// 上一页鼠标放上及点击事件 
overturnBack.onmouseover = function(){
	if (pageNum != 0) {
		overturnBack.style.backgroundColor = "#1BBC9B";
	}
	// 上一页点击事件
	overturnBack.onclick = function(){
		pageNum--;
		if (pageNum <= 0) {
			pageNum = 0;
			overturnBack.style.backgroundColor = "#F1F1F1";
		}
		overturnShowHide();
	}
}

overturnBack.onmouseout = function(){
	overturnBack.style.backgroundColor = "#F1F1F1";
}
overturnAdvance.onmouseout = function(){
	overturnAdvance.style.backgroundColor = "#F1F1F1";
}

//右边周排行/日排行
var clickWeekRanking = document.querySelector(".click-week-ranking");
var clickDayRanking = document.querySelector(".click-day-ranking");
var weekRanking = document.querySelector(".week-ranking");
var dayRanking = document.querySelector(".day-ranking");

clickWeekRanking.onclick = function(){
	clickWeekRanking.style.color = "#4FC9F6";
	weekRanking.style.display = "block";
	dayRanking.style.display = "none";
	clickDayRanking.style.color = "black";
}

clickDayRanking.onclick = function(){
	clickDayRanking.style.color = "#4FC9F6";
	dayRanking.style.display = "block";
	weekRanking.style.display = "none";
	clickWeekRanking.style.color = "black";
}


