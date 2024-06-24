// 단락 평가
// 앞의 값으로 결과값이 정해진다면 뒤의 값은 확인하지도 않는 javascript의 실행 방법
// ※and연산자, or연산자의 앞뒤 값이 같으면 and연산자일땐 앞의 값, or연산자 일땐 뒤의 값 이 반환된다.※
function returnFalse() {
    console.log("False함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "심한주" })