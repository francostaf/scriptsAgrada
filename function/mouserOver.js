$( ".wd-product-line" ).mouseover(function() {
  $(this).children('.item-description').children('.bottom').css( "display","block" );
});

$( ".wd-product-line" ).mouseout(function() {
  $(this).children('.item-description').children('.bottom').css( "display","none" );
});
