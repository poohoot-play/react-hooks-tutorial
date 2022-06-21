import {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    // useEffect(()=>{
    //     console.log('#1 렌더링 완료');
    //     console.log({name, nickname});
    // });

    // useEffect(()=>{
    //     console.log('#2 마운트 될 때만 실행');
    // }, []); 

    // useEffect(()=>{
    //     console.log('#3 특정 값이 업데이트될 때만 실행');
    // }, [name]);   

    useEffect(()=>{
        console.log('#4 effect');
        console.log(name);
        return ()=>{
            console.log('cleanup(뒷정리하기)');
            console.log(name);
        };
    }, [name]);   

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