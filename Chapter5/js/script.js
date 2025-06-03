$(function(){
    //메뉴바
    $("nav>ul>li").mouseover(function(){
        $(this).children(".sub").stop().fadeIn();
    })
    $("nav>ul>li").mouseout(function(){
        $(".sub").stop().fadeOut();
    })

    //팝업창
    $(".pop").click(function(){
        $(".popup").show();
        return false;
    })
    $(".close").click(function(){
        $(".popup").hide();
    })

    //이미지 슬라이드
    let i = 0;
    function slide(){
        if(i<2){
            i++;
        }else{
            i=0;
        }
        $(".slide ul").animate({marginTop:-700*i},1000);
    }
    setInterval(slide,3000);
})