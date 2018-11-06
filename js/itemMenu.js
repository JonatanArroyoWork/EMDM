$(document).ready(function(){
    $(".menuItem").click(function(){
        $(".menuItem").removeClass("itemOn");
        $(this).addClass("itemOn");
    });
    
//Con el siguiente código conseguimos que el drop-down se recoja tras hacer click en algún elemento.
    
    $('.itemNav').click(function(){
        var $target = $('#myNavbar');
        if($target.hasClass('in')){
            $target.removeClass('in').height(0).css('overflow','hidden');                           
        }

    });

});