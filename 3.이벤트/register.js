// html 요소 가져오기
const pwd1 = $("#pwd5"); //패스워드
const pwd2 = $("#pwd2"); //패스워드
const span = $("span");


//버튼을 클릭하면 함수가 호출되어 패스워드가 일치하는지 확인한다.
function func() {
    const value1 = pwd1.val();
    const value2 = pwd2.val();

    if (value1 != value2) { //두 값이 일치안하면  오류메시지 출력
        span.show();
    } else {
        span.hide();
    }
    return false; // => 비밀 번호 검증한 후에 ajax같은 함수를 사용하여 서버에 데이터를 전송한다.
}