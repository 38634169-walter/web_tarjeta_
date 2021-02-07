$(document).ready(mostrar_menu);

let num = 0;


function mostrar_menu(){
    $('.btn-responsive').click(function(){
        
        $('.nav').animate({
            left:'0'
        });
        $('.btn-responsive').toggleClass('remove-display');
        $('.xicon-menu').toggleClass('add-display');

    });

    $('.xicon-menu').click(function(){
        $('.nav').animate({
            left:'-100%'
        });

        $('.btn-responsive').toggleClass('remove-display');
        $('.xicon-menu').toggleClass('add-display');
    });


}