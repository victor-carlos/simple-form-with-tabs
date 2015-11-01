var btnTab = document.getElementsByClassName("btn_tab");
var indexTab = document.getElementsByName("index-tab");
var panelTab = document.getElementsByClassName("panel_tab");
var inputFilter = /[A-Za-z,.;~´-ç]/g;
var msg = "Error: \n";
var checkpoint = false;

/*
* Processor tabs
*/
function nextTab(tab) {
	
	//Test
	//alert(indexTab[0].value);
	
	//Hides the front panel and shows the clicked panel.
	panelTab[indexTab[0].value].style.display = "none";
	panelTab[tab].style.display = "block";
	
	//Updates the tab style
	document.getElementById("btn_tab" + parseInt(indexTab[0].value)).style.background = "rgba(255, 255, 255, 0)";
	document.getElementById("btn_tab" + tab).style.background = "rgba(255, 255, 255, .8)";
	
	//Updates the tab index
	indexTab[0].value = tab;
}

/*
*General Processor
*/
function autocheck(obj) {
	
	//Tab 1
	if(indexTab[0].value == 0){
		
		//Age Limit
		if(parseInt(obj.age.value) < 1 || parseInt(obj.age.value) > 127 ){
			obj.age.value = 1;
		}
		
		//Remove invalid characters from numbers
		obj.age.value = obj.age.value.replace(inputFilter,'');
		
		if(obj.name.value == ''){
			document.getElementById("notice").innerHTML = "Type your name";
		}else{
			document.getElementById("notice").innerHTML = '';
		}
		
	//Tab 2
	}else if(indexTab[0].value == 1){
		if(obj.email.value.indexOf("@") == -1 || obj.email.value.indexOf(".") == -1){
			document.getElementById("notice").innerHTML = "Type your email";
		}else{
			document.getElementById("notice").innerHTML = '';
		}
		
	//Tab 3
	}else if(indexTab[0].value == 2){
		if(obj.message_type.value == "Other"){
			document.getElementById("other-message").style.display = "block";
		}else{
			document.getElementById("other-message").style.display = "none";
		}
		
	//Tab 4
	}else if(indexTab[0].value == 3){
		if(obj.message.value == ""){
			document.getElementById("notice").innerHTML = "Type a message";
		}else{
			document.getElementById("notice").innerHTML = "";
		}
	}
}

function SendMessage(obj) {
	if (obj.name.value == '') {
		msg += "Name not found \n";
		checkpoint = true;
	}
	if(obj.email.value.indexOf("@") == -1 || obj.email.value.indexOf(".") == -1){
		msg += "Invalid email \n";
		checkpoint = true;
	}
	if(obj.message.value == ""){
		msg += "Message not found \n";
		checkpoint = true;
	}
	
	if(!checkpoint){
		alert("Sucess!!!");
	}else{
		alert(msg);
	}
}