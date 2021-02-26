$(document).ready(mostrar_menu);

let num = 0;


function mostrar_menu(){
    $('.btn-responsive').click(mostrar);

    $('.xicon-menu').click(ocultar);

    $('section').click(ocultar);
    $('footer').click(ocultar);


}

function mostrar(){

    $('.nav').css({'left': '0'});
    $('.btn-responsive').toggleClass('remove-display');
    $('.xicon-menu').toggleClass('add-display');
}

function ocultar(){
    $('.nav').css({'left':'-100%'});
    $('.btn-responsive').toggleClass('remove-display');
    $('.xicon-menu').toggleClass('add-display');
}