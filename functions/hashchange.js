//whenever an event occurs again on the page enters the function
$(function() {
	$(window).on('hashchange', function(e){
		setTimeout(function(){
      $("#left .wd-facet-group .facets .facet-type .facet-type-list .facet-title" ).each(function() {
        $(this).addClass('facet-closed');
      });
			$('.range-wrapper').addClass('facet-closed');
		}, 1000);
	});
});
