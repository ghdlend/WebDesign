$(function(){//문서 로딩 후 script를 실행해주세요
        $(".list>li:first-child").css("text-decoration","underline");//.list 자식 li 중 첫번째요소 선택
        $(".list>li").first().css("background","yellow");//.list 자식 li 중 첫번째요소 선택
        $(".list>li:last-child").css("text-decoration","underline");//.list 자식 li 중 마지막요소 선택
        $(".list>li").last().css("background","green");//.list 자식 li 중 마지막요소 선택
        $(".list2 li").eq(0).css("color","red");//.list2 li의 인덱스번호가 0인 요소 선택
        $(".list").find(".sub").css("color","blue");//.list자손 중 ".sub" 선택

        $("li").click(function(){//li요소 클릭시
                        $(this).css("font-weight","bold");//클릭한 요소(this)
        })
})