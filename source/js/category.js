//hover the category-name show the detail posts
$(function(){
	$('.category-name').hover(function (){
		$('.category-posts').each(function (i){
			//hide the last hover
			$(this).hide();
		});
		$(this).next('ul').show();		
	})
})
