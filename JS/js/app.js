//Create overlay jquery object
var overlay = $("<div id='overlay'></div>");
var image = $("<img>");
var breakline = $("<br>")
var breakline1 = $("<br>")
var caption = $("<a id='link'></a>");


//Append the overlay to the html page.
$("body").append(overlay);
overlay.append(image);
overlay.append(breakline);
overlay.append(breakline1)
overlay.append(caption);

overlay.hide();
image.hide(1000);

//Capture the click event on a link to an image
$(".imagegallery a").click(function(evt) {

	$(".navbar-default").hide();
	
	evt.preventDefault(); //To stop the link.
	
	var imgLoc = $(this).attr("href");
		image.attr("src",imgLoc);
	
	var captiontxt = "Click here for more"
		caption.text(captiontxt);
	
	var caption2 = "Click on Image to exit"
	var caption3 = $(this).children("img").attr("alt");
	var caption3 = $("<center><div id='content'><br/>" + caption3 + "</div></center>");


	caption.click(function(evt) {

		caption.empty()
		caption.text(caption2)
		caption.append(caption3);		
	});
	
	overlay.fadeIn();
	image.show(1000);s
});

//When overlay is clicked, hide the overlay.
$("img").click(function() {

	$(".navbar-default").show(1000);
	$("#overlay").fadeOut(1000);
	image.hide(1000);
});

