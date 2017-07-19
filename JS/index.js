var imgs = ["media/index/ads1.jpg","media/index/ads2.jpg","media/index/ads3.jpg"];
var current = 0;


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
			$('.mainImage').fadeOut(400, function() {
            $(".mainImage").attr('src',imgs[current]);
        })
        .fadeIn(400);
		nomousemovement();
		
	});
		$('.prev').click(function(){
			clearInterval(loop);
			current--;
			if (current<0){current = (imgs.length-1)};
			$('.mainImage').fadeOut(400, function() {
            $(".mainImage").attr('src',imgs[current]);
        })
        .fadeIn(400);
		nomousemovement();
	});
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
$(document).bind('mousemove', function(){resetActive()});
	
}
