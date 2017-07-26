var imgs = ["media/index/ads1.jpg","media/index/ads2.jpg","media/index/ads3.jpg"];
var current = 0;
var localNews = []

var loop = setInterval(cycle,5000);

function cycle(){	
	current++;
	if (current >= imgs.length){current = 0};
	$('.mainImage').fadeOut(400, function() {
    $(".mainImage").attr('src',imgs[current]);
       })
      .fadeIn(400);
}


$(document).ready(function(){
	$('.next').click(function(){
			clearInterval(loop);
			current++;
			if (current >= imgs.length){current = 0};
			$(".mainImage").fadeOut(400, function() {
            $(".mainImage").attr('src',imgs[current]);
        })
        .fadeIn(400);
		nomousemovement();
		
	});
		$('.prev').click(function(){
			clearInterval(loop);
			current--;
			if (current<0){current = (imgs.length-1)};
			$(".mainImage").fadeOut(400, function() {
            $(".mainImage").attr('src',imgs[current]);
        })
        .fadeIn(400);
		nomousemovement();
		
	});
	newsupdater();
});


function nomousemovement(){
// If theres no activity for 5 seconds do something
var activityTimeout = setTimeout(inActive, 5000);

function resetActive(){
    $(document.body).attr('class', 'active');
    clearTimeout(activityTimeout);

    activityTimeout = setTimeout(inActive, 5000);
}

// No activity do something.
function inActive(){
    $(document.body).attr('class', 'inactive');
	clearInterval(loop);
	loop = setInterval(cycle,5000);
	
}
// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('mouseMove', function(){resetActive();});
	
}

 function newsupdater(){
	var storge=localStorage["AllNews"];
	console.log(storge);
	if (storge!=null){
	 var news=JSON.parse(storge);
	  for (var i=0; i<news.length; i++){
	 localNews.push(news[i]);
	  	}
	 console.log(localNews);
	 for (var j=0; j<localNews.length; j++){
		 console.log(localNews.length)
		 console.log(localNews[j]);
		 var li = document.createElement("li");
		 
		 //title of news
		 var header = document.createElement("h3");
		 header.innerHTML=(localNews[j].title);
		 
		 //content of news
		 var content = document.createElement("p");
		 content.innerHTML=(localNews[j].text);
		 
		 li.appendChild(header);
		 li.appendChild(content);
		 document.getElementById("newsDisplay").appendChild(li);
	 	}
	  	
	}
}
	 
	 