$(document).ready(function () {

    //new WOW().init();
    //plyr.setup();

    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });

    $(window).scroll(function(){
        var aTop = 50;
        if($(this).scrollTop()>=aTop){
            $('header').addClass('shrink');
        } else {
            $('header').removeClass('shrink');
        };
    });
    
});

function hideform() {
    $("#inform").hide();
    alert('kwaka');
}