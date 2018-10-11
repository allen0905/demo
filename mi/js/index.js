/*搜索栏*/
window.onload = function(){
	var oinput = document.querySelector(".oinput");
	var input_select = document.querySelector(".input-select");
	var search = document.querySelector(".search");

	oinput.onfocus = function(){
		oinput.style.border = "1px solid #FF6700";
		oinput.style.borderRight = "none";
		oinput.value = "";
		input_select.style.display = "block";
		input_select.style.borderTop = "none";
		search.style.border = "1px solid #FF6700";
	}

	oinput.onblur = function(){
		oinput.style.border = "1px solid #E0E0E0";
		oinput.style.borderRight = "none";
		oinput.value = "小米8";
		input_select.style.display = "none";
		search.style.border = "1px solid #E0E0E0";
	}
}


