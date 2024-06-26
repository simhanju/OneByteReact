// 1. Date 객체를 생성하는 방법
let date1 = new Date() // 생성자
console.log(date1);

let date2 = new Date("1999-06-20/10:10:10"); // 날짜를 구분하는 기호는 ". ", "/" 로도 변경 가능하다.
console.log(date2);

let date2_1 = new Date(1999, 6, 20, 10, 10, 10);
console.log(date2_1);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC : 협정세계시)로 부터 몇 ms가 지났는지를 의미하는 숫자값.
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 그냥 뽑으면 실제 달 보다 -1 돼서 나옴. 그래서 +1을 해줘야함.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconde = date1.getSeconds();

console.log(year, month, date, hour, minute, seconde);

// 4. 시간 수정하기
date1.setFullYear(2033);
date1.setMonth(2); // 실제 월로는 '3월'로 변경된거임.
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 년,월,일 만 출력
console.log(date1.toLocaleString()); // 우리나라 스타일에 맞게 출력.