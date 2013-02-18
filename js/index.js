$(document).ready(function() {
 // mouseenter - mouseleave
 // hover
	
	//On mouse over those thumbnail
	// $('.item').mouseenter(function() {
	// 	
	// 		
	// 	//Display the caption
	// 	$(this).find('a.caption').stop(false,true).fadeIn(200);
	// },
	// function() {
	// 
	// 	//Hide the caption
	// 	$(this).find('a.caption').stop(false,true).fadeOut(200);
	// });
	// 
	// 	//On mouse over those thumbnail
	// $('.newitem').mouseenter(function() {
	// 			
	// 	//Display the caption
	// 	$(this).find('a.caption').stop(false,true).fadeIn(200);
	// },
	// function() {
	// 
	// 	//Hide the caption
	// 	$(this).find('a.caption').stop(false,true).fadeOut(200);
	// });

	var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
	
	if (!mobile)
	{
		//On mouse over those thumbnail
		$('.item').mouseenter(function() {
		
			//Display the caption
			$(this).find('a.caption').stop(false,true).fadeIn(200);
		});
	
		$('.item').mouseleave(function() {

			//Hide the caption
			$(this).find('a.caption').stop(false,true).fadeOut(200);
		});
	
		//On mouse over those thumbnail
		$('.newitemSplit').mouseenter(function() {
				
			//Display the caption
			$(this).find('a.caption').stop(false,true).fadeIn(200);
		});
	
		$('.newitemSplit').mouseleave(function() {
				
			//Hide the caption
			$(this).find('a.caption').stop(false,true).fadeOut(200);
		});
	
		//On mouse over those thumbnail
		$('.newitem').mouseenter(function() {
				
			//Display the caption
			$(this).find('a.caption').stop(false,true).fadeIn(200);
		});
	
		$('.newitem').mouseleave(function() {
				
			//Hide the caption
			$(this).find('a.caption').stop(false,true).fadeOut(200);
		});
	}

});