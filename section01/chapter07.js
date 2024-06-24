// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // /,& 연산자가 +,- 연산자 보다 우선순위가 높다
console.log(num6);

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
num8++; // 후위 연산 :  ++을 뒤에 쓰면 쓴 줄(라인)이 끝나고 나서야 1이 추가됨.
console.log(++num8); // 전위 연산 : 연산이 즉시 적용된다.

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp = 1 == "1"; // ==을 쓰면 자료형은 비교가 안된다. (true)
let comp1 = 1 === "1"; // ===을 쓰면 자료형 까지 비교를 한다. (false)
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 1;
let comp6 = 2 <= 1;
console.log(comp5, comp6);






