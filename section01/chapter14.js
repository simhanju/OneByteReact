// 스코프
// 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);
    function funcB() { }; // 함수 안에 '함수 선언식'으로 선언한 함수는 지역 스코프를 가짐.
}

funcA();

if (true) {
    let c = 1;
    function funcC() { }; // 그러나 반복문, 조건문 안에 '함수 선언식' 으로 선언된 함수는 지역 스코프를 가지지 않는다.
}

for (let i = 0; i < 10; i++) {
    let d = 1;
}

console.log(d);