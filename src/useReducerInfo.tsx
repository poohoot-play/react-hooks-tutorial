import React from 'react';
import { useReducer } from 'react';

interface InfoState {
  name: string;
  nickname: string;
}

interface InfoAction {
  name: string;
  value: string;
}

const initailState: InfoState = {
  name: '',
  nickname: '',
};

function reducer(state: InfoState, action: InfoAction) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, initailState);

  const { name, nickname } = state;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>별명:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
