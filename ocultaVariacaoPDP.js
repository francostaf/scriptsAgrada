// seleciona variação única e esconde a mesma
$(document).ready(function(){
	$(function(){
		if($('.wd-product-variations .variation-group .options select option').length == 2){
			$('.product-detail .head .information .detalhes .wd-product-variations .variation-group .options select option').each(function(index){
				if(index == 1){
					$(this).attr('selected', 'selected');
					$('.product-detail .head .information .detalhes .wd-product-variations .variation-group .options select').change();
					$('.product-detail .head .information .detalhes .wd-product-variations .variation-group .options select').parent().parent().css('display', 'none');
				}
			});
		}
		if($('.wd-product-variations div.radio label span input').length == 1){
			$('.wd-product-variations div.radio label span input').click();
			$('.wd-product-variations div.radio label span input').parent().parent().parent().parent().css('display', 'none');
		}
	});	
});