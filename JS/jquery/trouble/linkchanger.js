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
	
	$("#box1").slideDown(0);
	box1.html('<h2 class="panel-heading"><div>First Time User </div><a id="clickFTU" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box1.append("<hr>");
	var text = ("For the first time user on this PC/Laptop/Android/iOS ");
	box1.append("<div class='col-md-12'><p id='main'>" + text +"</p></div>");
	
	
	$("#box2").slideDown(0);
	box2.html('<h2 class="panel-heading"><div>Malware/ Virus/ Ransomware </div><a id="clickVirus" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box2.append("<hr>");
	var text1 = ("Known more about what is the virus payload and malware control your system. ");
	box2.append("<div class='col-md-12'><p id='main'>" + text1 +"</p></div>");
	
	$("#box3").slideDown(0);
	box3.html('<h2 class="panel-heading"><div>Phishing </div><a id="clickPhishing" class="troublink-right" href="#"><div class="text-right">Click Here to learn more <i class="fa fa-angle-right"></i></div></a></h2>');
	box3.append("<hr>");
	var text2 = ("Known more about what is the malware control your system. ");
	box3.append("<div class='col-md-12'><p id='main'>" + text2 +"</p></div>");
	box3.append("</div");
	
	$("#box4").slideDown(0);
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
	box1.append("<br>");
	box1.append("<br>");
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
	
	box2.html('<h2 class="panel-heading"><div>Malware/ Virus/ Ransomware </div><a id="back2" class="troublink-right" href="#"><div class="text-right">Back <i class="fa fa-angle-left"></i></div></a></h2>');
	box2.append("<hr>");
	var image = ("<img id='pic' src='https://blog.teesupport.com/wp-content/uploads/2016/04/What-is-Malware.jpg'/>")
	var text = ("<p>Malware can infect your computer or devices in many ways. It usually happens by accident, often by downloading softwares. Some malwares can take advantage of security vulnerabilities in your devices or software programs.These malwares are often installed by users as they overlook on what they are doing such as rushing installations. Outdated version of browsers, and often the add-ons or plug-ins are examples of easy targets.</p><br><p>Another common source of malware are software downloads that seems to be safe like a image, video, or audio file, but in reality, it is a harmful executable file that installs malicious program to your computer and devices.</p><br><p>So how do you remove malwares?<br>Most malwares are removable with some simple steps.<br>The most common type of malwares are actual programs or software you use everyday. Those programs can be uninstalled, just like anything else, from Control Panel.</p><br><p>Other malwares, however, are more complex to remove, like rogue Registry Keys and individual files that can only be removed manually. These types of malwares are best removed using antimalware programs in your computer or devices.</p>");
	box2.append("<div class='col-md-4'> " + image +"</div><div class='col-md-8'>"+ text +"</div></div>");
	box2.append("<div class='col-md-12 text-right'><a class='troublink-right' href='https://us.norton.com/internetsecurity-malware.html'><div class='text-right'>For more information click this link <i class='fa fa-angle-right'></i></div></a></div>");
	box2.append("<br>");
	box2.append("<br>");
	var image3 = ("<img id='pic' src='https://d1srlirzdlmpew.cloudfront.net/wp-content/uploads/sites/92/2016/04/06022344/ransomware-expert-tips-featured.jpg'/>")
	var text3 = ("<p>Ransomware is another type of software that threatens to publish the victim’s data or block users’ access until a ransom is paid. There are some simple ransomware that may lock the system in a way which is not difficult for a knowledgeable person to reverse. There are also more advanced malware used which uses a technique called cryptoviral extortion, where the victim’s files are encrypted, making them inaccessible. After that, a ransom payment is demanded to decrypt them. Ransomware attacks are carried out using a Trojan that is disguised as a legitimate file, tricking users to downloading or opening when it arrives as an email attachment.</p><br><p>How to protect yourself from ransomware?<br>-The first and most important step is to always backup your data. Secure your system against ransomware is to regularly perform a system backup to safeguard your valuable data.<br><br>-Avoid spam emails. Spam emails are usually emails sent to you from a someone that is unknown to you. Some of these emails sometimes have attachments that are downloadable which may contain many different types of viruses.<br><br>-Use strong passwords. By using strong passwords, it reduces the risk of identity theft by setting up unique passwords for different accounts.</p>");
	box2.append("<div class='col-md-8'>" + text3 +"</div><div class='col-md-4'>"+ image3 +"</div>");
	box2.append("<div class='col-md-12 text-right'><a class='troublink-right' href='https://sg.norton.com/ransomware/article'><div class='text-right'>For more information click this link <i class='fa fa-angle-right'></i></div></a></div>");
	
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
	var image = ("<img id='pic' src='http://resources.infosecinstitute.com/wp-content/uploads/phishing-1.jpg'/>")
	var text = ("<p>Phishing is an act of acquiring private or sensitive data from personal computers for use in fraudulent activities. Phishing is usually done by sending emails that seem to appear to come from credible sources, which requires users to input personal data such as credit card number or social security number. However, they are in no way affiliated with the actual source. This information is then transmitted to the hacker and utilized to commit acts of fraud. Some phishing scams have even gone so far as to create websites that appear to operated by government agencies.</p>");
	box3.append("<div class='col-md-8'> " + text +"</div><div class='col-md-4'>"+ image +"</div></div>");
	box3.append("<br>");
	box3.append("<br>");
	var image2 = ("<img id='pic' src='http://cdn.makeuseof.com/wp-content/uploads/2011/12/detect_phishing_chrome_warning.jpg?x92042'/>")
	var text2 = ("<p>So how do we prevent phishing attacks?<br><br>-Verify a site’s security. Check for the site’s security certificate. If you get a message stating a certain website may contain malicious files, do not open the website. Never download files from suspicious emails or websites. Even search engines may show certain links which may lead users to a phishing webpage which offers low cost products. If the user makes purchases at such websites, the credit card details will be accessed by cyber-criminals.<br><br>-Keep your browser updated. Security patches are released for popular browsers all the time. They are released in response to the security loopholes that phishers and other hackers inevitably discover and exploit. If you typically ignore messages about updating your browser , stop. The minute an update is available, download and install it. <br> <br>-Never Give Out Personal Information. As a general rule, you should never share personal or financially sensitive information over the Internet. This rule spans all the way back to the days of America Online, when users had to be warned constantly due to the success of early phishing scams. When in doubt, go visit the main website of the company in question, get their number and give them a call. Most of the phishing emails will direct you to pages where entries for financial or personal information are required. An Internet user should never make confidential entries through the links provided in the emails. Never send an email with sensitive information to anyone. Make it a habit to check the address of the website. A secure website always starts with “https”. </p>");
	box3.append("<div class='col-md-4'> " + image2 +"</div><div class='col-md-8'>"+ text2 +"</div></div>");
	box3.append("<div class='col-md-12 text-right'><a class='troublink-right' href='https://us.norton.com/internetsecurity-online-scams-how-to-protect-against-phishing-scams.html'><div class='text-right'>For more information click this link <i class='fa fa-angle-right'></i></div></a></div>");
	
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
	var image = ("<img id='pic' src='http://spywareremovers.com/wp-content/uploads/2013/08/How-to-Remove-Trojan-horse-backdoor.Generic_c.FHP_.jpg'/>")
	var text = ("<p>A trojan is a type of malware that is often disguised as legitimate softwares. Trojans can be employed by cyber-thieves and hackers that try to gain access to the users’ systems. Users are usually tricked by loading or executing these softwares that contains Trojans, into their systems. Once activated, Trojans can enable cyber-criminals to steal sensitive data from you. These cyber-criminals are then able to delete, block, modify, or copy these datas.</p>");
	box4.append("<div class='col-md-8'> " + text +"</div><div class='col-md-4'>"+ image +"</div></div>");
	box4.append("<br>");
	box4.append("<br>");
	var image2 = ("<img id='pic' src='https://www.im-infected.com/wp-content/uploads/2012/09/Trojan-Horse-Generic29-GJG.png'/>")
	var text2 = ("<p>So how can we prevent Trojans in our devices?<br>Users can install effective anti-malware software. These anti-malware softwares can protect PCs, laptops, Macs, tablets and smartphones against Trojans. One such anti-malware software is Kaspersky Anti-Virus, which is capable of detecting and preventing Trojan attacks on devices.</p>");
	box4.append("<div class='col-md-4'> " + image2 +"</div><div class='col-md-8'>"+ text2 +"</div></div>");
	box4.append("<div class='col-md-12 text-right'><a class='troublink-right' href='https://us.norton.com/internetsecurity-malware-what-is-a-trojan.html'><div class='text-right'>For more information click this link <i class='fa fa-angle-right'></i></div></a></div>");
	
	$("#back4").click('click', backlink);
};


var video = $("#vidarea");


//Capture the click event on a link to an image
$(".imagegallery a").click(function(evt) {
	
	evt.preventDefault(); //To stop the link.
		
	//var captiontxt = "Cartoon Network" //$(this).children("img").attr("alt");
		//caption.attr("href", $(this).children("img").attr("alt"));
		//caption.text(captiontxt);
	video.append("<h2>Video Loading Please Wait</h2>");
	video.attr("src", $(this).children("img").attr("alt"));
	
	window.location.href = "#vidarea";
});