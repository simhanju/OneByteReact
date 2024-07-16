import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); // onCreate 함수 실행 후 / 주소로 돌아가고, 뒤로가기 버튼을 비활성화 시킴.
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        // nav() 안에 인수로 -1을 넣으면 뒤로 가기가 된다.
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
