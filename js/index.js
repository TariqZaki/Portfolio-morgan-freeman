//? <---- back to top icon logic ---->
let aboutOffset = $('#about').offset().top 
let navHeight = $('nav').innerHeight();
$(window).on('scroll', function() {
    if($(window).scrollTop() > aboutOffset - navHeight/2)
        {
            // $('nav').css('backgroundColor' , '#5aa3f7')
            $('.backToTop').fadeIn(1000)
            $('.backToTop').css('display', 'flex')
        }else
        {
            // $('nav').css('backgroundColor' , 'transparent')
            $('.backToTop').css('display', 'none')
        }
})
$('.backToTop').on('click' , function() {
    $(window).scrollTop(0)
})
//? <---- back to top icon logic ---->

//? <---- number counter logic ---->
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000 ;

valueDisplays.forEach((valueDisplays) => {
    let startValue =0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})
//? <---- number counter logic ---->

//? <---- loading & spinner logic ---->
$( function(){
    $('.loader').fadeOut(1000 , function(){
        $('.loading').slideUp(1000 , function(){
            $('body').css('overflow' , 'auto');

            $('.loading').remove();
        });
    })
} )
//? <---- loading & spinner logic ---->
