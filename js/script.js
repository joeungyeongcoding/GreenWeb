$(function(){

    //lnb fadeInOut//

    $('.gnb>li>a').mouseenter(function(){
        $('.lnb').fadeIn(500);
    });
    $('.gnb>li>a').mouseleave(function(){
        $('.lnb').fadeOut(500);
    });

    //slide animaition//

    // setInterval(function(){
    //     $('.slide-box').delay(2000);
    //     $('.slide-box').animate({marginLeft:'-1200px'},800);
    //     $('.slide-box').delay(2000);
    //     $('.slide-box').animate({marginLeft:'-2400px'},800);
    //     $('.slide-box').delay(2000);
    //     $('.slide-box').animate({marginLeft:'-2400px'},800);
    //     $('.slide-box').delay(2000);
    //     $('.slide-box').animate({marginLeft:'0'},800);
    // });

    setInterval(function(){
        $('.slide-box').animate({left:'-1200px'},800, function(){
        $('.slide-box img:eq(0)').clone().appendTo('.slide-box');
        $('.slide-box img:eq(0)').remove();
        $('.slide-box').css("left",0);
        });
        
    }, 3000);

    //modal popup//

    $('.notice li:eq(0)').click(function(){
        $('.modal').css({"display":"block"});
    })

    //modal close btn//

    $('.close').click(function(){
        $('.modal').css({"display":"none"});
    })
    
    
    



}); //jquery;