var getElementsByClassName = function(){
	var all = "*";
	var allElement = document.getElementsByTagName(all);
	allElement = allElement.split(" ")
	var element = [];
	for (var i = allElement.length - 1; i >= 0; i--) {
		if (allElement[i].className == input1){
		element[element.length] = allElement[i];
		}
	}
	return element;
}	