$(document).ready(function(){


// nav bar code to show and hide

$('.fa-bars').click(function(){
    $(".nav-ul").animate({left:'0rem'},'200');
    $(".fa-x").show();
    $('.fa-bars').hide();
});
$(".fa-x").click(function(){
    $(".nav-ul").animate({left:'200rem'},'200');
    $('.fa-bars').show();
    $(".fa-x").hide();
});



// Bottom slider left right movement
let x=0;

// Next Button


$('.fa-circle-arrow-right').unbind().click(function(){
    x=(x<=100)?(x+100):0;
    $('.slider-bottom').css("animation","none");
    $('.slider-bottom').css("left",-x+"vw");
 
});

// previous Button

$('.fa-circle-arrow-left').unbind().click(function(){
    x=(x>=100)?(x-100):0;
    $('.slider-bottom').css("animation","none");
    $('.slider-bottom').css("left",-x+"vw");

});



});