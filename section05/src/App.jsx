import "./App.css";
import Bulb from "./components/Bulb";
import Count from "./components/Counter";

// 컴포넌트를 만들땐 무조건 첫글자를 대문자로 작성한다.

function App() {
  return (
    <>
      <Bulb />
      <Count />
    </>
  );
}

export default App;
