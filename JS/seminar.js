

function submit(){
	var name=document.getElementById("personname").value;
	var mail=document.getElementById("personemail").value;
	var choice=document.getElementById("personchoice").value;
	var QnS=document.getElementById("questionsuggestion").value;
	console.log(name)
	console.log(mail)
	console.log(choice)
	console.log(QnS)
	localStorage["name"]=JSON.stringify(name);
	localStorage["mail"]=JSON.stringify(mail);
	localStorage["choice"]=JSON.stringify(choice);
	localStorage["QnS"]=JSON.stringify(QnS);
}



