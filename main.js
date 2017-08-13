'use strict';

    var width = 720;
    var animation = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    var $slider = $('#slider');
    var $slideCont = $slider.find('.slides');
    var $slides = $slideCont.find('.slide')
    
    var interval;
$(function() {
    
    function startSlider(){
    interval = setInterval(function(){
        $slideCont.animate({'margin-left': '-='+width}, animation, function(){
            currentSlide++
            if(currentSlide === $slides.length+1){
                currentSlide = 1;
                $slideCont.css('margin-left', 0);
            }
        });
    }, pause);
    }
    
    function stopSlider(){
        clearInterval(interval);
    }
    
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    
    //set time
    //animate fade
    //last restart
    
    startSlider();
    
});

var prev = document.getElementById('prev');
var next = document.getElementById('next');

prev.addEventListener('click', function(){
    $slideCont.animate({'margin-left': '+='+width}, animation)
});

next.addEventListener('click', function(){
    $slideCont.animate({'margin-left': '-='+width}, animation)
});


