// 1. Spread 연산자
// Spread : 흩뿌리다, 펼치다 라는 뜻
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj = {
    a: 1,
    b: 2,
}
let obj2 = {
    ...obj,
    c: 3,
    d: 4,
}
console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}
funcA(...arr1)

// 2. Rest 매개변수
// Rest는 나머지, 나머지매개변수
function funcB(one, ...rest) { // 배열 형태로 저장된다, rest매개변수 뒤에는 다른 변수를 선언할 수 없다, rest라는 변수 이름은 상관없다
    console.log(one);
    console.log(rest);
}
funcB(...arr1)