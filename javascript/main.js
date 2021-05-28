$(document).ready(function () {
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 7000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('#return-to-top').fadeIn(200); 
        } else {
            $('#return-to-top').fadeOut(200);  
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
});
