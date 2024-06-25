// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 요소 추가 후 변환된 배열의 길이를 반환한다.
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

console.log(popedItem);
console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem);
console.log(arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// 요소 추가 후 변환된 배열의 길이를 반환한다.
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(newLength2, arr4);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5) // 2번 idex 다음 요소부터, 5번 idex 전까지의 요소를 잘라낸다. ([3, 4, 5] 반환)
let sliced2 = arr5.slice(1) // 두번째 인수를 생략하면 끝까지 잘라낸다.
let sliced3 = arr5.slice(-3) // 거꾸로 자르고 싶을때 음수를 사용한다.
console.log(sliced);
console.log(sliced2);
console.log(sliced3);
console.log(arr5); // 원본 배열이 변하지는 않는다.

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);