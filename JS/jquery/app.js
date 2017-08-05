//JavaScript Document

//Problem: When the user click on the image, it goes to a dead end.
//Solution: Create an overlay with large Image and caption like Ligthbox.

// . = is a class
// # = is a id.

//Append the overlay to the html page.
var video = $("#vidarea");


//Capture the click event on a link to an image
$(".imagegallery a").click(function(evt) {
	
	evt.preventDefault(); //To stop the link.
		
	//var captiontxt = "Cartoon Network" //$(this).children("img").attr("alt");
		//caption.attr("href", $(this).children("img").attr("alt"));
		//caption.text(captiontxt);
	video.attr("src", $(this).children("img").attr("alt"));
	
	window.location.href = "#vidarea";
});

$("#recommended a").click(function(evt) {
	
	evt.preventDefault(); //To stop the link.
	
	//var captiontxt = "Cartoon Network" //$(this).children("img").attr("alt");
		//caption.attr("href", $(this).children("img").attr("alt"));
		//caption.text(captiontxt);
	video.attr("src", $(this).attr("href"));
	
	window.location.href = "#vidarea";
});

//When overlay is clicked, hide the overlay.