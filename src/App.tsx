import React, { useState } from 'react';
// import UseStateCounter from './useStateCounter'; // useState 하나 사용(카운터)
// import UseStateInfo from './useStateInfo'; // useState 여러번 사용(인풋텍스트)
// import UseStateMyForm from './useStateMyForm'; // useState와 Form

// import UseEffectInfo from './useEffectInfo'; // useEffect(인풋텍스트)

import UseReducerCounter from './useReducerCounter'; // useReducer(카운터)
// import UseReducerInfo from './useReducerInfo'; // useReducer(인풋텍스트)

// import UseMemoAverage from './useMemoAverage'; // useMemo(인풋텍스트)

// import UseCallbackAverage from './useCallbackAverage'; // useCallback(인풋텍스트)

// import UseRefAverage from './useRefAverage'; // useRef(인풋텍스트)

const App = () => {
  const [visible, setVisible] = useState(false);

  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />

      {/* {visible && <UseStateCounter />} */}
      {/* {visible && <UseStateInfo />} */}
      {/* {visible && <UseStateMyForm onSubmit={onSubmit} />} */}

      {/* {visible && <UseEffectInfo/>} */}

      {visible && <UseReducerCounter />}
      {/* {visible && <UseReducerInfo/>} */}

      {/* {visible && <UseMemoAverage />} */}

      {/* {visible && <UseCallbackAverage />} */}

      {/* {visible && <UseRefAverage />} */}
    </>
  );
};

export default App;
