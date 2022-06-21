import Counter from "./Counter"; // #1 useState 하나 사용
import Info from "./Info"; // #2 useState 여러번 사용

const App = () => {
  return (
    <>
      <Counter/> 
      <Info/>
    </>
  );
}

export default App;