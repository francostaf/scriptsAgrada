$('body').on('scroll', function () {
    var itemOffset = $(".newsletter-filipe-jardim").offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    if (scrollTop + windowHeight >= itemOffset) {
       $("section.newsletter-flutuante").hide();
    }else {
        $("section.newsletter-flutuante").show();
    }
})
