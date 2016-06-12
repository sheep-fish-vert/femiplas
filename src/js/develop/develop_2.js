
var days = 1 ;
var hour = 10 ;
var min = 10;
var sec  = 10 ;

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

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

    if (getCookie('date') == ''){
        document.cookie = "date=" + (Date.now() + 345600000) + ';';
    };


    var todayTime = new Date();

    var tillTheEnd = new Date( parseInt(getCookie('date') ));

    var differense  = tillTheEnd - todayTime ;

    if (differense < 0){
        document.cookie = "date=" + (Date.now() + 345600000) + ';';
    }

    var tillTheEnd = new Date( parseInt(getCookie('date')) );

    var differense  = tillTheEnd - todayTime ;


    var d = Math.floor(differense / (1000 * 3600 * 24));

    var h = Math.floor((differense - d*(1000 * 3600 * 24))/(1000*3600));

    var m = Math.floor((differense - d*(1000 * 3600 * 24) - h*(1000*3600) )/(1000*60));

    var s = Math.floor((differense - d*(1000 * 3600 * 24) - h*(1000*3600) - m*(1000*60) )/(1000));


    days =  d; 

    hour = h; 
    min =  m; 
    sec = s; ;

        
    /* reload */ 
        $('.tic .timer').find('.days').find('.topest').html(days);
        $('.tic .timer').find('.hours').find('.topest').html(hour);
        $('.tic .timer').find('.mins').find('.topest').html(min);
        $('.tic .timer').find('.seconds').find('.topest').html(sec);
    /* reload */

});

$(window).resize(function(){

});