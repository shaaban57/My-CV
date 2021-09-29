$(document).ready(function(){

    //  navbar coloring
    if($(window).scrollTop()>500){
        $(".navbar").removeClass("bg-transparent");}
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".navbar").removeClass("bg-transparent");
            $(".navbar").css("top","-5px");
        }else{
            $(".navbar").addClass("bg-transparent");
            $(".navbar").css("top","0");
        }
    });
    




});