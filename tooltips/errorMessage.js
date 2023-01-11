//no checkout tem umas classes prontas já
$('button.btn-wide.btn-big.new-address-submit').on('click', function() {
        var invalidChars = $('input#AddOrSetAddress_AddressNotes').val().match(/[^a-z0-9 çÇ\.']/gi, '');
        if (invalidChars && invalidChars.length){
            $('input#AddOrSetAddress_AddressNotes').parent().addClass('showerror');
            $('input#AddOrSetAddress_AddressNotes').parent().addClass('error');
            $('input#AddOrSetAddress_AddressNotes').parent().children('.message').css('display', 'block');
            $('input#AddOrSetAddress_AddressNotes').parent().children('.message').text('O campo aceita apenas números e letras.');
    }
});

// criar do zero: https://getbootstrap.com.br/docs/4.1/components/tooltips/
