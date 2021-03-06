(function($)
{
	$('.btn-navbar-right').click(function(){
		$('.container-fluid').toggleClass('menu-right-visible');

		if ($('.container-fluid.menu-left-visible').length)
			$('.container-fluid').addClass('menu-hidden').removeClass('menu-left-visible');

		resizeNiceScroll();
	});

	if ($('.btn-navbar-right').length && !$('#menu_kis').length)
		$('.btn-navbar-right').parent().remove();
	
	$(window).on('load', function()
	{
		if ($('.menu-right-hidden').length)
		{
			$('.btn-navbar-right').parent().removeClass('visible-xs');
			$('#menu_kis').width(70);

			setTimeout(function(){

				$('#menu_kis').animate({
					right: '-70px'
				}, function(){
					$(this).removeAttr('style');
				});

			},1000);
		}
	});
})(jQuery);