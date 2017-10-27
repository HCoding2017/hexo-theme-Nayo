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




// set clicked menu underline
 $(function(){  
   // get the url
 	var href = window.location.href;
 	// find the clicked menu
 	var clicked_menu = null;
 	if( href.indexOf("archives") > 0){

 		clicked_menu = $('#header-menu-archives');

 	}else if( href.indexOf("categories") > 0 ){

 		clicked_menu = $('#header-menu-categories');

 	}else if( href.indexOf("tags") > 0 ){

 		clicked_menu  = $('#header-menu-tags');

 	}else if( href.indexOf("about") > 0 ){

 		clicked_menu  =  $('#header-menu-about');

 	}else { //default : index

 		clicked_menu = $('#header-menu-home');
 	}
 	// set clicked menu underline and color 	
 	clicked_menu.css({
        'border-bottom':'2px solid #0088cc',
        'color':'#0088cc'
    });

});  





var last_scroll = 0;
// windos scroll function
 $(function() {
            

    if(isPC()){

    $(window).scroll(function() {
    //silde down
    if( last_scroll !=0){             
        if(  $(window).scrollTop() == 0 ){
          setHeader();

        }else if($(window).scrollTop() - last_scroll > 0 ) {
        //下滑
        hideHeader();        
        }else{
        //上划
        showHeader(); 
       }
    }   

    last_scroll = $(window).scrollTop();


    //back to top  

       if ($(window).scrollTop() > 800 ){
            $('.back-to-top').show();
        }
        else{
            $('.back-to-top').hide();
        }
  


         $('.back-to-top').click(function() {
            $('html,body').animate({scrollTop: 0}, 1000);     
            $(window).scrollTop() = 0;
        });
       });

    }
 });




function showHeader(){

    $('.header').css({
        'position':'fixed',  
        'top': '0',
        'left': '0',
        'opacity' :'0.8',
        'background-color': '#fff', 
        'transition':'0.6'    
    });
    $('.header').addClass('slideDown').removeClass('slideUp');

}

function hideHeader( ){

  　 $('.header').addClass('slideUp').removeClass('slideDown');

  
}
function setHeader(){
    $('.header').css({
        'position' :'static',
        'opacity' :' 1',
        'background-color': '#F5F6FA',
        'border-radius':'10px'  ,
        'box-shadow ':'10px 0 20px 0 red',
        
    });
    
    $('.header').removeClass('slideUp').removeClass('slideDown');
}



