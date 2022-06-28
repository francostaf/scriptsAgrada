//is necessarie edit number whatsApp or email (proof)
$(function() {
	ko.postbox.subscribe('checkout/payment/submit', function(response) {
		setTimeout( () => {
			$('.confirmation .confirmation-wrapper.PIX .info-wrapper .qr-col .scan-info').html('<div class="qrcode-copy"><p>Copie a nossa chave PIX: <span>e-shop@estiloprimavera.com.br</span></p></div><div><p>Envie o comprovante de pagamento para o <a href="https://api.whatsapp.com/send?phone=5519 34585436">WhatsApp (19) 3458-5436</a></p></div>');
			$(".qrcode-copy").on( "click", function() {
			  copyToClipboard($('.qrcode-copy p span').text());
			});
		}, 100);
	});	
});
