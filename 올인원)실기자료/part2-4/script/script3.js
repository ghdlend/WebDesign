$(function(){//문서 로딩 후 script를 실행해주세요
    $(".point").parent().css("background","yellow");//부모요소 선택
    $(".point").parents().css("border","1px solid blue");//조상요소 선택
    $(".point").parents(".list1").css("border","3px solid blue");//조상요소 중 .list1 선택
    $(".box1>h1").css("background","yellow");//자식요소 선택
    $(".list2").children().css("text-decoration","underline");//자식요소들 선택자
    $(".list2").children(".first").css("color","purple")//자식요소들 중 .first 선택
    $(".first").siblings().css("color","green")//.first요소 형제들 선택
})