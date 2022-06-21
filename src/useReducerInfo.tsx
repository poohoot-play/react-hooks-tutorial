import {useReducer} from 'react';

function reducer(state:any, action:any){
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name:'', 
        nickname:''
    });

    const {name, nickname} = state;

    const onChange = (e:any) => {
        dispatch(e.target)
    }

    return <div>
        <div>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickname" value={nickname} onChange={onChange}/>
        </div>
        <div>
            <div><b>이름:</b>{name}</div>
            <div><b>별명:</b>{nickname}</div>
        </div>
    </div>
}

export default Info;