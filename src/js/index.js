$(document).ready(function() {
	$('.grid').isotope({
		itemSelector: '.grid__item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid__sizer',
			horizontalOrder: true,
			gutter: '.grid__gutter'
		}
	});
	$('.portfolio__list').on('click', 'button', function(event) {
		event.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
	});
});