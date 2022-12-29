import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
};

export default Counter;
// 기본 값 = 0
// 동적으로 변경되는 값 = State -> useState() 제공
// 0을 기본값으로 갖는 num 변수
// setter 함수