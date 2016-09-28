$("#passTxt").keyup(function(){
	var inputTxt = $("#passTxt").val();
	var txtLenght = inputTxt.length;
	var charText = "";
	var upper = false;
	var lower = false;
	var num = false;
	var lenght = false;
	if(inputTxt == ""){
		$("#upper").prop('checked', false);
		$("#lower").prop('checked', false);
		$("#number").prop('checked', false);
	}
	if(txtLenght >= 8){
		lenght = true;
	}
	for(var i=0;i<txtLenght;i++){
		charText= inputTxt.charAt(i);
		if(/^[A-Z]/.test(charText) == true){
			upper = true;
		}
		if(/^[a-z]/.test(charText) == true){
			lower = true;
		}
		if(/^[0-9]/.test(charText) == true){
			num = true;
		}		
	}
	if(upper == true){
		$("#upper").prop('checked', true);
	}else{
		$("#upper").prop('checked', false);
	}
	if(lower == true){
		$("#lower").prop('checked', true);
	}else{
		$("#lower").prop('checked', false);
	}
	if(num == true){
		$("#number").prop('checked', true);
	}else{
		$("#number").prop('checked', false);
	}
	if(lenght == true){
		$("#length").prop('checked', true);
	}else{
		$("#length").prop('checked', false);
	}
	if(upper == true && lower == true && num == true && lenght == true){
		$("#tickPwd").removeClass("hidden");
	}else{
		$("#tickPwd").addClass("hidden");
	}
});
$("#confrmTxt").keyup(function(){
	var inputTxt = $("#passTxt").val();
	var confrmPwd = $("#confrmTxt").val();
	if(inputTxt == confrmPwd){
		$("#tickPwdConf").removeClass("hidden");
	}else{
		$("#tickPwdConf").addClass("hidden");
	}

});