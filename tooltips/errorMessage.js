//no checkout tem umas classes prontas já
$('button.btn-wide.btn-big.new-address-submit').on('click', function(e) {
        var invalidChars = $('input#AddOrSetAddress_AddressNotes').val().match(/[^a-z0-9 çÇ\.']/gi, '');
        if (invalidChars && invalidChars.length){
            e.preventDefault();
            $('input#AddOrSetAddress_AddressNotes').parent().addClass('showerror');
            $('input#AddOrSetAddress_AddressNotes').parent().addClass('error');
            $('input#AddOrSetAddress_AddressNotes').parent().children('.message').css('display', 'block');
            $('input#AddOrSetAddress_AddressNotes').parent().children('.message').text('O campo aceita apenas números e letras.');
    } else {
            $('input#AddOrSetAddress_AddressNotes').parent().removeClass('showerror');
            $('input#AddOrSetAddress_AddressNotes').parent().removeClass('error');
            $('input#AddOrSetAddress_AddressNotes').parent().children('.message').css('display', 'none');
        }
});

// criar do zero: https://getbootstrap.com.br/docs/4.1/components/tooltips/
// https://pt.stackoverflow.com/questions/110623/exibir-mensagem-e-esconder-em-alguns-segundos
