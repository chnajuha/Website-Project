var news= [];

$('#ready').click(function(){
	if (news.length > 3){
	news.pop();
}
	var title = $("#title").val();
	var text = $("#textarea").val();
	var obj={"title":title, "text":text};
	news.push(obj);
	console.log(news);
	localStorage["AllNews"]=JSON.stringify(news);	
});




