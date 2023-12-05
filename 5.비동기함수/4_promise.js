const result = false ; // 요청성공여부 - 성공 : true / 실패 : false

const promise = new Promise(
    (resolve, reject) => {//사실 resolve/reject라고 안쓰고 다른거써도 됨. 이거 명시적인 거임.
        setTimeout (()=>{
            if(result) { // result = true -> resolve
                resolve('성공했소!'); //서버에 연결 성공 상정
            } else { /// result = flase  -> reject
                reject ('실패했당!'); //서버에 연결 실패 상정
            }
        }, 3000);
    }
);

promise
    .then ((response) => { //then : resolve함수 호출시 사용. 인자로 굳이 response안써도 되지만, 뭘 쓰던지 밑에 console.log의 인자와 같게
       console.log(response); 
    })  

    .catch ((error)=>{ // catch : reject함수 호출시 사용
        console.log(error);
    }) ;