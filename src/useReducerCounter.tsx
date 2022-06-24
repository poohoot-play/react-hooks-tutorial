import React, { useReducer } from 'react';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 1,
};

type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT'; by: number };

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - action.by };
    default:
      throw new Error('Unhandled action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onIncrease = () => dispatch({ type: 'INCREMENT' });
  const onDecrease = () => dispatch({ type: 'DECREMENT', by: 1 });

  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
