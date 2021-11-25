import React from 'react';

export default function() {
    
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds  = date.getSeconds();

    return (
        /* 
            comment① 컴포넌트 안이 아니기에 자바 스크립트 구문(주석)이 가능하다.
        */

        <div 
            /* 
                comment② 여기에서도 다중행 주석이 가능하지만 추천하지는 않는다.
            */
            className='clock' title='시계' prop01=''>
            {/* 
                comment③ JSX는 HTML이 아니다. <!-- --> 주석은 사용 불가. 
                        그리고 다중행 주석은 블록 내에서만 사용이 가능하다.
                        추천하는 방식.
            */}

            // comment④ JSX안에서의 주석을 사용하면 그대로 출력 된다.

            <br></br>

            {('0'+(hours > 12 ? hours-12 : hours)).slice(-2)} 
            {' : '} 
            {('0'+ minutes).slice(-2)} 
            {' : '}
            {('0'+ seconds).slice(-2)} 
            {' : '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
}