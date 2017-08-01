// JavaScript Document

$("#load").click(function() {
	window.location.href("trouble-home.html");
});



$("#current").click('click', backlink);
$("#clickFTU").click('click', clickFTU);
$("#clickFTUlink").click('click', clickFTU);
$("#clickVirus").click('click', clickVirus);
$("#clickViruslink").click('click', clickVirus);
$("#clickPhishing").click('click', clickPhishing);
$("#clickPhishinglink").click('click', clickPhishing);
$("#clickTrojan").click('click', clickTrojan);
$("#clickTrojanlink").click('click', clickTrojan);

var box1 = $("#heading1");
var box2 = $("#heading2");
var box3 = $("#heading3");
var box4 = $("#heading4");
	

function backlink() {
	$("#current").attr('class', 'active');
	$("#clickFTUlink").attr('class', '');
	$("#clickViruslink").attr('class', '');
	$("#clickPhishinglink").attr('class', '');
	$("#clickTrojanlink").attr('class', '');
	$("#back1").attr('id','clickFTU');
	$("#back2").attr('id','clickVirus');
	$("#back3").attr('id','clickMalware');
	$("#back4").attr('id','clickTrojan');
	$("#panel1").attr('class', 'col-md-6');
	$("#panel2").attr('class', 'col-md-6');
	
	$("#box1").slideDown(1000);
	box1.html('<h2 class="panel-heading"><div>First Time User </div><a id="clickFTU" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box1.append("<hr>");
	var text = ("For the first time user on this PC/Laptop/Android/iOS ");
	box1.append("<div class='col-md-12'><p id='main'>" + text +"</p></div>");
	
	
	$("#box2").slideDown(1000);
	box2.html('<h2 class="panel-heading"><div>Virus/Malware </div><a id="clickVirus" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box2.append("<hr>");
	var text1 = ("Known more about what is the virus payload and malware control your system. ");
	box2.append("<div class='col-md-12'><p id='main'>" + text1 +"</p></div>");
	
	$("#box3").slideDown(1000);
	box3.html('<h2 class="panel-heading"><div>Phishing </div><a id="clickPhishing" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box3.append("<hr>");
	var text2 = ("Known more about what is the malware control your system. ");
	box3.append("<div class='col-md-12'><p id='main'>" + text2 +"</p></div>");
	box3.append("</div");
	
	$("#box4").slideDown(1000);
	box4.html('<h2 class="panel-heading"><div>Trojan </div><a id="clickTrojan" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box4.append("<hr>");
	var text2 = ("Known more about what is the trojan control your system in a backdoor access. ");
	box4.append("<div class='col-md-12'><p id='main'>" + text2 +"</p></div>");
	box4.append("</div");
	
	$("#clickFTU").click('click', clickFTU);
	$("#clickVirus").click('click', clickVirus);
	$("#clickPhishing").click('click', clickPhishing);
	$("#clickTrojan").click('click', clickTrojan);
};
	

function clickFTU(e) {
	e.preventDefault();
	$("#box1").slideDown(1000);
	$("#box2").slideUp(1000);
	$("#box3").slideUp(1000);
	$("#box4").slideUp(1000);
	$("#current").attr('class', '');
	$("#clickFTUlink").attr('class', 'active');
	$("#clickViruslink").attr('class', '');
	$("#clickPhishinglink").attr('class', '');
	$("#clickTrojanlink").attr('class', '');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
	$("#panel1").attr('class', 'col-md-12');
	
	
	
	box1.html('<h2 class="panel-heading"><div>First Time User </div><a id="back1" class="troublink-right" href="#"><div class="text-right">Back <i class="fa fa-angle-left"></i></div></a></h2>');
	box1.append("<hr>");
	var image = ("<img id='pic' src='https://cdn.pixabay.com/photo/2013/07/12/14/11/workstation-147953_960_720.png'/>")
	var text = ("<p>A devices are more than just another household appliance. The vast amount of information and possibilities can be overwhelming. But you can accomplish a lot with a computer or smartphone, and using one can be a good experience. Let's walk through getting started with your first computer.</p><br><p>Turning on a devices for the first time can be different from one devices to the next. Your experience could be different from this lesson. It's OK to ask someone for help.</p><br><p>If you're using a desktop computer, you'll need to make sure that the keyboard, mouse, and monitor are plugged into the computer case before you continue.</p>");
	var image2 = ("<img id='pic' src='https://www.softmobo.com/wp-content/uploads/2016/06/best-smartphones-of-2014.jpg'/>")
	var text2 = ("<p>Introduce someone to a smartphone (or tablet, for that matter) for the first time, and you'll quickly realize how much you've taken for granted. From swiping to unlock and tapping to answer calls, here are the basics you'll have to show your smartphone newbie.</p><br><p>If you find yourself in a situation like this, don't worry. You can teach your smartphone student the basics he or she will use probably 90% of the time and offer the tools to learn more advanced tricks at their own pace.</p>");
	box1.append("<div class='col-md-4'>" + image +"</div><div class='col-md-8'>"+ text +"</div>");
	box1.append("<div class='col-md-12'></div>");
	box1.append("<div class='col-md-12 text-right'><a class='troublink-right' href='http://www.pcworld.com/article/3040361/windows/7-steps-for-setting-up-a-new-windows-10-pc.html'><div class='text-right'>For more information click this link <i class='fa fa-angle-right'></i></div></a></div>");
	box1.append("<div class='col-md-8'>" + text2 +"</div><div class='col-md-4'>"+ image2 +"</div>");
	box1.append("<div class='col-md-12'></div>");
	box1.append("<div class='col-md-12 text-right'><a class='troublink-right' href='https://www.androidpit.com/how-to-set-up-an-android-smartphone'><div class='text-right'>For more information click this link <i class='fa fa-angle-right'></i></div></a></div>");
	
	
	$("#back1").click('click', backlink);
};


function clickVirus(e) {
	e.preventDefault();
	$("#box1").slideUp(1000);
	$("#box2").slideDown(1000);
	$("#box3").slideUp(1000);
	$("#box4").slideUp(1000);
	$("#current").attr('class', '');
	$("#clickFTUlink").attr('class', '');
	$("#clickViruslink").attr('class', 'active');
	$("#clickPhishinglink").attr('class', '');
	$("#clickTrojanlink").attr('class', '');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
	$("#panel1").attr('class', 'col-md-12');
	
	box2.html('<h2 class="panel-heading"><div>Virus/Malware </div><a id="back2" class="troublink-right" href="#"><div class="text-right">Back <i class="fa fa-angle-left"></i></div></a></h2>');
	box2.append("<hr>");
	var image = ("<img id='pic' src='https://cdn.brainpop.com/technology/computerscience/computerviruses/screenshot1.png'/>")
	var text = ("A computer is more than just another household appliance. The vast amount of information and possibilities can be overwhelming. But you can accomplish a lot with a computer, and using one can be a good experience. Let's walk through getting started with your first computer.");
	box2.append("<div class='col-md-8'> " + text +"</div><div class='col-md-4'>"+ image +"</div></div>");
	
	$("#back2").click('click', backlink);
};

function clickPhishing(e) {
	e.preventDefault();
	$("#box1").slideUp(1000);
	$("#box2").slideUp(1000);
	$("#box3").slideDown(1000);
	$("#box4").slideUp(1000);
	$("#current").attr('class', '');
	$("#clickFTUlink").attr('class', '');
	$("#clickViruslink").attr('class', '');
	$("#clickPhishinglink").attr('class', 'active');
	$("#clickTrojanlink").attr('class', '');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
	$("#panel2").attr('class', 'col-md-12');
	
	box3.html('<h2 class="panel-heading"><div>Phishing </div><a id="back3" class="troublink-right" href="#"><div class="text-right">Back <i class="fa fa-angle-left"></i></div></a></h2>');
	box3.append("<hr>");
	var image = ("<img src=''/>")
	var text = ("A computer is more than just another household appliance. The vast amount of information and possibilities can be overwhelming. But you can accomplish a lot with a computer, and using one can be a good experience. Let's walk through getting started with your first computer.");
	box3.append("<div class='col-md-8'> " + text +"</div><div class='col-md-4'>"+ image +"</div></div>");
	
	$("#back3").click('click', backlink);
};


function clickTrojan(e) {
	e.preventDefault();
	$("#box1").slideUp(1000);
	$("#box2").slideUp(1000);
	$("#box3").slideUp(1000);
	$("#box4").slideDown(1000);
	$("#current").attr('class', '');
	$("#clickFTUlink").attr('class', '');
	$("#clickViruslink").attr('class', '');
	$("#clickPhishinglink").attr('class', '');
	$("#clickTrojanlink").attr('class', 'active');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
	$("#panel2").attr('class', 'col-md-12');
	
	box4.html('<h2 class="panel-heading"><div>Trojan </div><a id="back4" class="troublink-right" href="#"><div class="text-right">Back <i class="fa fa-angle-left"></i></div></a></h2>');
	box4.append("<hr>");
	var image = ("<img src=''/>")
	var text = ("A computer is more than just another household appliance. The vast amount of information and possibilities can be overwhelming. But you can accomplish a lot with a computer, and using one can be a good experience. Let's walk through getting started with your first computer.");
	box4.append("<div class='col-md-8'> " + text +"</div><div class='col-md-4'>"+ image +"</div></div>");
	
	$("#back4").click('click', backlink);
};


var video = $("#vidarea");

$(".imagegallery a").click(function(evt) {
	
	evt.preventDefault(); //To stop the link.
		
	//var captiontxt = "Cartoon Network" //$(this).children("img").attr("alt");
		//caption.attr("href", $(this).children("img").attr("alt"));
		//caption.text(captiontxt);
	video.attr("src", $(this).children("img").attr("alt"));
	
	window.location.href = "#vidarea";
});