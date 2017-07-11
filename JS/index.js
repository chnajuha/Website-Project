var imgs = ["media/index/ads1.jpg","media/index/ads2.jpg","media/index/ads3.jpg"];
var current = 0;


$(document).ready(function(){
	$('.next').click(function(){
		current++;
		if (current >= imgs.length){current = 0}
		$('.mainImage').fadeOut(400, function() {
            $(".mainImage").attr('src',imgs[current]);
        })
        .fadeIn(400);
	});
		$('.prev').click(function(){
		current--;
		if (current<0){current = (imgs.length-1)};
		$('.mainImage').fadeOut(400, function() {
            $(".mainImage").attr('src',imgs[current]);
        })
        .fadeIn(400);
	});
});