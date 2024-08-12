$(window).scroll(function(){
    if($("#menu").offset().top > 80){
        $("#menu").addClass("bg-dark");
    }else{
        $("#menu").removeClass("bg-dark");
    }
});