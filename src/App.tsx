import {useState} from 'react';
// import UseStateCounter from "./useStateCounter"; // #1 useState 하나 사용
// import UseStateInfo from "./useStateInfo"; // #2 useState 여러번 사용
import UseEffectInfo from "./useEffectInfo"; // #3 useEffect

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={()=>{
        setVisible(!visible);
      }}>
        {visible ? '숨기기':'보이기'}
      </button>
      <hr/>
        {/* <UseStateCounter/>
        <UseStateInfo/> */}
        {visible && <UseEffectInfo/>}
    </>
  );
}

export default App;