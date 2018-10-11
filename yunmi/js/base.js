/**
 * Created by admin on 2018/7/26.
 */
/*头部搜索栏部分公共样式*/
//导航栏点击变色
var headerNav = document.querySelector(".header-nav");
var headerNavList = headerNav.querySelectorAll('li');

for(var i = 0;i < headerNavList.length;i++){
    headerNavList[i].onclick = function(){
        for(var j = 0;j < headerNavList.length;j++ ){
            headerNavList[j].style.backgroundColor = "";
        }
        this.style.backgroundColor = "#00C797";
    }
}

//搜索框部分
var search = document.querySelector(".search");
var hSearch = document.querySelector(".search-btn");
var tSearch = document.querySelector(".search-text");

search.onmouseover = function(){
    tSearch.style.right = "0px"
    hSearch.style.backgroundColor = "white";
    hSearch.style.color = "grey";
    search.style.width = "164px";
}

search.onmouseout = function(){
    hSearch.style.backgroundColor = "#00A47D";
    hSearch.style.color = "white";
    tSearch.style.right = "-140px"
    search.style.width = "34px";
}