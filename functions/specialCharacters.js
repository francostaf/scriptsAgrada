$(function() {
	var regex = new RegExp('[^.0-9@a-zA-Zàèìòùáéíóúâêîôûãõ\b-]', 'g');
	$('input#novoCadastroSobrenome, input#novoCadastroNome, input#novoCadastroEmail').bind('input', function(){
		$(this).val($(this).val().replace(regex, ''));
	});
});

https://regexr.com/
