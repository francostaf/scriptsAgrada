function newFacets(){
	$( ".facet-type.wd-facet-type-levels.MultiplesFixed.category li[data-parent='Sale'] li.level-1[data-pai='Feminino'] .expander.terceiro-nivel" ).on( "click", function() {
		if($('.facet-type.wd-facet-type-levels.MultiplesFixed.category li.level-2[data-pai="Feminino"]').css('display') == 'none'){
			$('.facet-type.wd-facet-type-levels.MultiplesFixed.category li.level-2[data-pai="Feminino"]').css('display','block');
		}
		else{
			$('.facet-type.wd-facet-type-levels.MultiplesFixed.category li.level-2[data-pai="Feminino"]').css('display','none');
		}   
	});
	$( ".facet-type.wd-facet-type-levels.MultiplesFixed.category li[data-parent='Sale'] li.level-1[data-pai='Masculino'] .expander.terceiro-nivel" ).on( "click", function() {
		if($('.facet-type.wd-facet-type-levels.MultiplesFixed.category li.level-2[data-pai="Masculino"]').css('display') == 'none'){
			$('.facet-type.wd-facet-type-levels.MultiplesFixed.category li.level-2[data-pai="Masculino"]').css('display','block');
		}
		else{
			$('.facet-type.wd-facet-type-levels.MultiplesFixed.category li.level-2[data-pai="Masculino"]').css('display','none');
		}   
	});
}

$('body').on('onBuildFacetingComplete', function() {
	newFacets();
});
