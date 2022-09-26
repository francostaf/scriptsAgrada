$(function() {
	try {
		//mostra banner menu CLC
		$('.category-bar .main-category .section>li.clc .banner').html($('#banners-menu .categoria6 .banner-wrap').html());
	} catch (e) {
		console.log(e);
	}
});
