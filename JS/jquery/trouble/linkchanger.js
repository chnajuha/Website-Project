// JavaScript Document

$("#load").click(function() {
	window.location.href("trouble-home.html");
});

$("#current").click('click', backlink);
$("#clickFTU").click('click', clickFTU);
$("#clickFTUlink").click('click', clickFTU);
$("#clickVirus").click('click', clickVirus);
$("#clickViruslink").click('click', clickVirus);

var box1 = $("#heading1");
var box2 = $("#heading2");
var box3 = $("#heading3");
var box4 = $("#heading4");
	

function backlink() {
	$("#current").attr('class', 'active');
	$("#clickFTUlink").attr('class', '');
	$("#clickViruslink").attr('class', '');
	$("#clickMalwarelink").attr('class', '');
	$("#clickTorjanlink").attr('class', '');
	$("#back1").attr('id','clickFTU');
	$("#back2").attr('id','clickVirus');
	$("#back3").attr('id','clickMalware');
	$("#back4").attr('id','clickTrojan');
	
	$("#box1").slideDown(1000);
	box1.html('<h2 class="panel-heading"><div>First Time User </div><a id="clickFTU" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box1.append("<hr>");
	var text = ("For the first time user on this PC/Laptop/Android/iOS ");
	box1.append("<div class='col-md-8'>" + text +"</div>");
	
	$("#box2").slideDown(1000);
	box2.html('<h2 class="panel-heading"><div>Virus </div><a id="clickVirus" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box2.append("<hr>");
	var text = ("Known more about what is the virus payload. ");
	box2.append("<div class='col-md-8'>" + text +"</div>");
	
	$("#box3").slideDown(1000);
	$("#box4").slideDown(1000);
	
	$("#clickFTU").click('click', clickFTU);
	$("#clickVirus").click('click', clickVirus);
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
	$("#clickMalwarelink").attr('class', '');
	$("#clickTorjanlink").attr('class', '');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
	
	
	
	box1.html('<h2 class="panel-heading"><div>First Time User </div><a id="back1" class="troublink-right" href="#"><div class="text-right">Back <i class="fa fa-angle-left"></i></div></a></h2>');
	box1.append("<hr>");
	var image = ("<img id='pic' src='https://cdn.pixabay.com/photo/2013/07/12/14/11/workstation-147953_960_720.png'/>")
	var text = ("<p>A computer is more than just another household appliance. The vast amount of information and possibilities can be overwhelming. But you can accomplish a lot with a computer, and using one can be a good experience. Let's walk through getting started with your first computer.</p><br><p>Turning on a computer for the first time can be different from one computer to the next. Your experience could be different from this lesson. It's OK to ask someone for help.</p>");
	box1.append("<div class='col-md-8'> " + text +"</div><div class='col-md-4'>"+ image +"</div>");
	
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
	$("#clickMalwarelink").attr('class', '');
	$("#clickTorjanlink").attr('class', '');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
	
	box2.html('<h2 class="panel-heading"><div>Virus </div><a id="back2" class="troublink-right" href="#"><div class="text-right">Back <i class="fa fa-angle-left"></i></div></a></h2>');
	box2.append("<hr>");
	var image = ("<img src=''/>")
	var text = ("A computer is more than just another household appliance. The vast amount of information and possibilities can be overwhelming. But you can accomplish a lot with a computer, and using one can be a good experience. Let's walk through getting started with your first computer.");
	box2.append("<div class='col-md-8'> " + text +"</div><div class='col-md-4'>"+ image +"</div></div>");
	
	$("#back2").click('click', backlink);
};

$("#clickMalware").click(function(e) {
	e.preventDefault();
	$("#box1").slideUp(1000);
	$("#box2").slideUp(1000);
	$("#box3").slideDown(1000);
	$("#box4").slideUp(1000);
	$("#current").attr('class', '');
	$("#clickFTUlink").attr('class', '');
	$("#clickViruslink").attr('class', '');
	$("#clickMalwarelink").attr('class', 'active');
	$("#clickTorjanlink").attr('class', '');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
});


$("#clickTorjan").click(function(e) {
	e.preventDefault();
	$("#box1").slideUp(1000);
	$("#box2").slideUp(1000);
	$("#box3").slideUp(1000);
	$("#box4").slideDown(1000);
	$("#current").attr('class', '');
	$("#clickFTUlink").attr('class', '');
	$("#clickViruslink").attr('class', '');
	$("#clickMalwarelink").attr('class', '');
	$("#clickTorjanlink").attr('class', 'active');
	$("#autoopen").attr('class', 'nav nav-second-level collapse in');
	$("#autoopen").attr('aria-expanded', 'true');
	$("#activeclick").attr('class', 'active');
	$("#autoopen").css("height" ,160);
});

