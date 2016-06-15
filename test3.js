$(function(){
	$('li').on('click', function(){
		$(this).hide();
		if($(this).is('.special')){
			alert('special');
		}
	});
});