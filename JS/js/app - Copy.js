//JavaScript Document

//Problem: When the user click on the image, it goes to a dead end.
//Solution: Create an overlay with large Image and caption like Ligthbox.

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
	
	evt.preventDefault(); //To stop the link.
	
	var imgLoc = $(this).attr("href");
		image.attr("src",imgLoc);
		
	var captiontxt = "Click here for more" //$(this).children("img").attr("alt");
		caption.attr("href", $(this).children("img").attr("alt"));
		caption.text(captiontxt);
		
	overlay.fadeIn();
	image.show(1000);
});

//When overlay is clicked, hide the overlay.
overlay.click(function() {
	$(this).fadeOut(1000);
	image.hide(1000);
});


