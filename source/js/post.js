
var logo;
var logoTitle;

//post页面标题跟踪
$(function(){

	if(isPC()){//移动端不使用

	  //初始化
	 logo = $('.header-logo');
	 logoTitle =  $('.header-logo').text();


	$(window).scroll(function() {

		var $header =$('.header');
		//下滑了header则修改logo
		if($header.hasClass('slideDown')){				
			setTitle();
		}else if($(window).scrollTop() == 0){
			//还原logo
			setLogo();
		}
	})


	}
})

//把logo设置成标题
function setTitle(){

	//获取post标题
	var postTitle = $('.post-title h1').text();

	postTitle = cutString(postTitle , 40);

	$('.header-logo').text(postTitle);

	logo.removeClass('header-logo');
}
//还原logo
function setLogo(){

	logo.addClass('header-logo');
	$('.header-logo').text(logoTitle);	

}