function isContentExceeded(){
	var headerTopOffset = $("header").offset().top;
	var headerHeight = $("header").height();
	var maincontentHeight = $(".main-content").height();
	var footerHeight = $("footer").height();
	var contentHeight = ( (headerTopOffset + headerHeight) + maincontentHeight + footerHeight );
	
	var screenHeight = screen.height;
	console.log("contentHeight = " + contentHeight);
	console.log("screenHeight = " + screenHeight);
	if( contentHeight > screenHeight) {
		return true;
	}
	return false;
}
	
function handleContentExceed(){
	if(isContentExceeded()){
		console.log('Content is exceeded');
		$('footer').removeClass('fixedBottom');
	}else{
		console.log('Content is NOT exceeded');
		$('footer').addClass('fixedBottom');
	}
}
	
$(window).load(function(){
	handleContentExceed();
});

$(window).resize(function(){
    handleContentExceed();
});