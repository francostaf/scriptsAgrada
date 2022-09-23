$(function() {
	//bloqueia caracteres especiais cadastro nome e sobrenome
	var regexNome = new RegExp("[^'ç~@0-9 a-zA-Zàèìòùáéíóúâêîôûãõ\b]", "g");
	$('input#AddOrSetCustomer-Name,input#AddOrSetCustomer-Surname').bind('input', function(){
		$(this).val($(this).val().replace(regexNome, ''));
	});
});
https://regexr.com/
