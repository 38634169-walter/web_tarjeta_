$(document).ready(mostrar_menu);

let num = 0;


function mostrar_menu(){
    $('.btn-responsive').click(function(){
        
        if(num == 0){
            $('.nav').animate({
                left:'0'
            });
            num = 1;
        }
        else{
            $('.nav').animate({
                left:'-100%'
            });
            num = 0;
        }

    });
}