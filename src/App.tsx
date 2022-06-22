import {useState} from 'react';
import UseStateCounter from "./useStateCounter"; // #1 useState 하나 사용(카운터)
import UseStateInfo from "./useStateInfo"; // #2 useState 여러번 사용(인풋텍스트)
// import UseEffectInfo from './useEffectInfo'; // #3 useEffect(인풋텍스트)
// import UseReducerCounter from './useReducerCounter'; // #4 useReducer(카운터)
// import UseReducerInfo from './useReducerInfo'; // #5 useReducer(인풋텍스트)
// import UseMemoAverage from './useMemoAverage'; // #6 useMemo(인풋텍스트)

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
        {visible && <UseStateCounter/>}
        {visible && <UseStateInfo/>}
        {/* {visible && <UseEffectInfo/>} */}
        {/* {visible && <UseReducerCounter/>} */}
        {/* {visible && <UseReducerInfo/>} */}
        {/* { visible && <UseMemoAverage/> } */}
    </>

    
  );
}

export default App;