import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        // nav() 안에 인수로 -1을 넣으면 뒤로 가기가 된다.
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
