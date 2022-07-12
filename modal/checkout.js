$('body').on('click', '.themodal-overlay.add-message-modal button.send-message', function() {
  setTimeout(function(){
		$('body.themodal-lock.add-message-modal a.close.we').click();
	}, 1000);
});
