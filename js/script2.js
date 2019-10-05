
$(document).ready(function(){
    $('.acc h4').click(function(){ 
    $(this).next('.ans').slideToggle(); 
    $(this).parent().addClass('active');
    $(this).parent().siblings().children('.ans').slideUp(); 
    $(this).parent().siblings().removeClass('active'); 
    });
});
