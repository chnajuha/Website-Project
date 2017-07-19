$('#ready').click(function(){
var title = $("#title").val();
var text = $("#textarea").val();
var inputName=document.getElementById("name").value;
var inputContact=document.getElementById("contact").value;
var obj={"name":inputName, "contact":inputContact};
localStorage["theContact"]=JSON.stringify(obj);	
});




