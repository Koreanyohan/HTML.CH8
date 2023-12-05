$(function btnchangecolor(){  // 화살표 함수로 써도 됨. function이랑 함수 이름 없애도 되는데 식별위해서 그냥 남겨둠
    $("button").mousedown(function(){ // 마우스 눌렀을때
    $("button").css("background-color", "white");
   }) // 모든 버튼 흰색으로

   $("button").mouseup(function(){ // 마우스 뗐을때
    $(this).css("background-color", "yellow");
   }) // 누른 버튼만 색 변경
})

/* 처음에 위에 코드 넣기 전에 이 코드들 클릭 호출 함수마다 넣음 이러면 버튼 여러개면 답도 없다.
 
$("button").css("background-color", "white");
$("#add").css("background-color","yellow");          */


function add() {
    let number1 = Number($("#number1").val()); 
    let number2 = Number($("#number2").val());
    $("div input").val(number1+number2); 
    
    //Number(문자열) =>숫자   value는 ""으로 표현되는 문자열.  
};

function subt() {
    let number1 = Number($("#number1").val());
    let number2 = Number($("#number2").val());
    $("div input").val(number1-number2);
 
};
function multiply() {
    let number1 = Number($("#number1").val());
    let number2 = Number($("#number2").val());
    $("div input").val(number1*number2);
 
};
function dividing() {
    let number1 = Number($("#number1").val());
    let number2 = Number($("#number2").val());
    $("div input").val(number1/number2);
   
};


