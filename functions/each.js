$('ul.grid-informations .item').each(function( index ) {
	var customCamisetas = $(this)[0].innerText;
	if (customCamisetas.includes("PERSONALIZAÇÃO")){
		console.log("achou");
	}
	else {
		console.log("não achou");
	}
});

$(browsingContext.Common.Basket.Items).each(function( index ) {
	var customCamisetas = $(this)[0].BrandName;
	if (customCamisetas == 'PERSONALIZAÇÃO'){
    	$('.BasketIndexRoute #middle #content .wd-checkout-basket .col.grid .wd-checkout-basket-grid .grid .grid-informations .item > ul > li.quantity .change').css('display','none');
	}
	else {
    	console.log('não customização');
	}
});
