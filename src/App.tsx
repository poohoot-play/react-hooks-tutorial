import UseStateCounter from "./useStateCounter"; // #1 useState 하나 사용
import UseStateInfo from "./useStateInfo"; // #2 useState 여러번 사용
import UseEffectInfo from "./useEffectInfo"; // #3 useEffect

const App = () => {
  return (
    <>
      <UseStateCounter/>
      <UseStateInfo/>
      <UseEffectInfo/>
    </>
  );
}

export default App;