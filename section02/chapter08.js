// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) { // 요소, 그 요소의 인덱스, 그 배열 순으로 나온다.
    console.log(item, idx, arr);
})

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2)
});
console.log(doubledArr);

// 2. inlcudes
// 배열의 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 얕은 비교로 진행 -> 배열안의 객체는 잘 못찾음
let arr3_1 = [1, 2, 3];
let arr3 = [2, 2, 2];
let index1 = arr3_1.indexOf(2);
let index2 = arr3.indexOf(2); // 만약 요소의 값이 여러개일 경우, 맨 처음 찾은 요소의 인덱스를 반환해준다.
let index3 = arr3_1.indexOf(299); // 없는 요소의 값은 '-1'을 반환함.
console.log(index1);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 마찬가지로 없는 요소의 값은 '-1'을 반환함.
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
    if (item % 2 === 0) { // indexOf 메서드와 마찬가지로 맨 처음 찾은 요소의 인덱스를 반환한다.
        return true;
    }
});
console.log(findedIndex);

let objectArr = [
    { name: "심한주" },
    { name: "tlagkswn" },
];

console.log( // 이걸로는 못찾음.
    objectArr.indexOf({ name: "심한주" })
);
console.log(
    objectArr.findIndex((item) => item.name === "심한주")
);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    { name: "심한주" },
    { name: "tlagkswn" },
];

const finded = arr5.find(
    (item) => item.name === "심한주"
)

console.log(finded);
