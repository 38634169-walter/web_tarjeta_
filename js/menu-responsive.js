$(document).ready(mostrar_menu);

let num = 0;


function mostrar_menu(){
    $('.btn-responsive').click(mostrar);

    $('.xicon-menu').click(ocultar);

    if ($(window).width() <= 800){  
        $('section').click(ocultar);
        $('footer').click(ocultar);
    }

}

function mostrar(){
    $('.nav').css({'transition':'all 0.5s','left': '0'});
    $('.btn-responsive').css({'display':'none'});
    $('.xicon-menu').css({'display':'block'});
}

function ocultar(){
    $('.nav').css({'transition':'all 0.5s','left':'-100%'});
    $('.btn-responsive').css({'display':'block'});
    $('.xicon-menu').css({'display':'none'});
}