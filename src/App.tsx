import UseStateCounter from "./useStateCounter"; // #1 useState 하나 사용
import UseStateInfo from "./useStateInfo"; // #2 useState 여러번 사용

const App = () => {
  return (
    <>
      <UseStateCounter/>
      <UseStateInfo/>
    </>
  );
}

export default App;