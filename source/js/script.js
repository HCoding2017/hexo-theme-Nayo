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

 		clicked_menu = $('#menu-archives');

 	}else if( href.indexOf("categories") > 0 ){

 		clicked_menu = $('#menu-categories');

 	}else if( href.indexOf("tags") > 0 ){

 		clicked_menu  = $('#menu-tags');

 	}else if( href.indexOf("about") > 0 ){

 		clicked_menu  =  $('#menu-about');

 	}else { //default : index

 		clicked_menu = $('#menu-home');
 	}
 	// set clicked menu underline
 	var border = "border-bottom";
 	var border_type = "1.5px solid #0088cc";
 	clicked_menu.css(border,border_type);

});  



var last_scroll = 0;
// windos scroll function
// back to top and show the header when you slide down

 $(function() {
            

    $(window).scroll(function() {
    //silde down
    if( last_scroll !=0){       
        if($(window).scrollTop() - last_scroll > 0   || $(window).scrollTop() == 0) {
        //下滑
        hideHeader();
        }else{
        //上划
        showHeader(); 
       }
    }   

    last_scroll = $(window).scrollTop();


    //back to top
    if(isPC()){
    if ($(window).scrollTop() > 800 ){
            $('.back-to-top').show();
        }
        else{
            $('.back-to-top').hide();
        }
    }


         $('.back-to-top').click(function() {
            $('html, body').animate({scrollTop: 0}, 1000);     
            $(window).scrollTop() = 0; //??? stranger fixed bug here 

        });


      

 });

});




function showHeader(){

    $('.header-nav').css({
        'position':'fixed',  
        'top': '0',
        'left': '0',
        'opacity' :'0.8',
        'background-color': 'rgba(255,255,255,.9)',  
        'transition':'0.6'    
    });
}

function hideHeader( ){

    $('.header-nav').css({
          'position':'static',  
          'opacity' :' 1',
            'background-color': '#F5F6FA',
           'border-radius':'10px'
        
    });
}



//
function isPC(){  
           var userAgentInfo = navigator.userAgent;  
           var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
           var flag = true;  
           for (var v = 0; v < Agents.length; v++) {  
               if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
           }  
           return flag;  
}            
