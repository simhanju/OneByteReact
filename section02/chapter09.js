// 5가지의 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    { name: "심한주", hobby: "코딩" },
    { name: "박효빈", hobby: "코딩" },
    { name: "최현진", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
    if (item.hobby === "코딩") {
        return true;
    }
});

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => {
    return item.name;
})

console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
let arr3_1 = [10, 3, 5]; // 숫자는 정렬이 안됨. '사전순' 으로 정렬하였기 때문에, 콜백함수에서 조건문으로 정렬을 시켜줘야함.
arr3.sort();
arr3_1.sort((a, b) => {
    // 오름차순 정렬 (내림차순은 return값을 반대로 하면 된다.)
    if (a > b) {
        // b가 a앞에 와라
        return 1; // sort함수에서 양수를 반환하면 둘중에 더 작은값이 앞으로 온다.
    }
    else if (a < b) {
        // a가 b앞에 와라
        return -1; // 이건 양수와 반대로 작동함.
    }
    else {
        return 0; // 자리 그대로 유지.
    }
});

console.log(arr3);
console.log(arr3_1);

// 4. toSorted (최근에 추가된 최신 함수.)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "simhanju"];
const joined = arr6.join("-"); // 구분자를 바꾸고 싶으면 join()괄호 안에 설정하면 된다.
console.log(joined);