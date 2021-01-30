$(document).ready(secciones_tarjetas);


let  index = 0;

function secciones_tarjetas(){
    
    $('.btn-t').eq(index).css({"background":"green"});
    
    $('.btn-t').click(function(){
        index = $(this).index();
        
        $('.tarjetas').css({"display":"none"});
        $('.tarjetas').eq(index).css({"display":"block"});

        $('.btn-t').css({"background":"chocolate"});
        $('.btn-t').eq(index).css({"background":"green"});
    });

}