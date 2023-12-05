console.log('시작');

//타이머함수 인자: 실행할 함수(콜백함수), 지연시간(밀리세컨드)
setTimeout(function callback() {
    console.log('timer 종료');
}, 3000);

console.log('종료');