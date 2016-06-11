
 var days = 1 ;
var hour = 10 ;
var min = 10;
var sec  = 10 ;

$(document).ready(function(){

    setInterval(function(){

        sec--;
        if (sec == 0){
            min--;
            sec = 60 ;
            if(min == -1){
                min = 59;           
                hour--;                
                if(hour  == -1){
                    days --;
                    hour = 23;
                }
            }
        }
        /* reload */ 

        $('.tic .timer').find('.days').find('.topest').html(days);
        $('.tic .timer').find('.hours').find('.topest').html(hour);
        $('.tic .timer').find('.mins').find('.topest').html(min);
        $('.tic .timer').find('.seconds').find('.topest').html(sec);

        /* reload */

    }, 1000);


    $('.slider-content').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

$(window).load(function(){
    /* reload */ 
        $('.tic .timer').find('.days').find('.topest').html(days);
        $('.tic .timer').find('.hours').find('.topest').html(hour);
        $('.tic .timer').find('.mins').find('.topest').html(min);
        $('.tic .timer').find('.seconds').find('.topest').html(sec);
    /* reload */

});

$(window).resize(function(){

});