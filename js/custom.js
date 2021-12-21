// Menu Fixing
// $(function(){
    
// });

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    // Nav Fix
    if (scrolling > 200){
        $('.menu-bg').addClass('menu-fixed');
    }else{
        $('.menu-bg').removeClass('menu-fixed');
    }
});





























// $(window).scroll(function(){
//     var scrolling = $(this).scrollTop();

//     if (scrolling > 200){
//         $('.menu-bg').addClass("menu-fixed");
//     }
// });