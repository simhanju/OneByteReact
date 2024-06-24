// 1. 함수 표현식

function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () { // 익명 함수 : 호이스팅이 안됨.
    console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = () => {
    return 1;
}
console.log(varC());

let varD = (value) => value + 1;
console.log(varD(10));