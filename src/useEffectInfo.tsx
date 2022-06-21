import {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{
        console.log('렌더링 완료');
        console.log({name, nickname});
    });

    const onChangeName = (e:any) =>{
        setName(e.target.value);
    }

    const onChangeNickName = (e:any) =>{
        setNickname(e.target.value);
    }    

    return <div>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickName}/>
        </div>
        <div>
            <div><b>이름:</b>{name}</div>
            <div><b>별명:</b>{nickname}</div>
        </div>
    </div>
}

export default Info;