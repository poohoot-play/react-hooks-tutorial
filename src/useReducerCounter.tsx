import React from 'react';
import { useReducer } from 'react';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT'; by: number };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - action.by };
    default:
      throw new Error('Unhandled action type');
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>
        현재 카운터 : <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', by: 1 })}>-1</button>
    </div>
  );
};

export default Counter;
