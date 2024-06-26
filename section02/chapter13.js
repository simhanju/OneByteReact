function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수(executor)
        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            }
            else {
                reject("num이 숫자가 아닙니다!");
            }
        }, 2000);
    });

    return promise;
};

const p = add10(0);

p.then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


// // then 메서드
// // -> 그 후에
// // promise객체의 실행 결과가 성공(resolve)일때, 그 결과값을 받음.
// // 그리고 이 promise객체 자체를 반환한다.

// // catch 메서드
// // promise객체의 실행 결과가 실패(reject)일때, 그 결과값을 받음
// promise // 이러한 문법 형식을 Promise Chaining 이라 한다.
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

