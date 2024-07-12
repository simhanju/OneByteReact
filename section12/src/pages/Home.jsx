import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

// Header에 표시된 날짜에 쓰여진 일기만 보여주게하는 로직
const getMonthlyDate = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, // 3월의 마지막 일수를 구하고싶으면 그 다음달의 0일 (4월의 0일) 로 데이터를 주게되면 자동으로 그 전달(3월) 의 마지막 일수가 구해진다.
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  // 최상단에 날짜를 변경하기 위해 날짜를 담아둘 state
  const [pivotDate, setPivotDate] = useState(new Date());

  // 띄워진 달에 작성한 일기만으로 필터링된 일기 데이터들
  const monthlyData = getMonthlyDate(pivotDate, data);

  // 화살표 ( > )를 눌렀을 때 날짜를 더하거나 빼주는 함수.
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
