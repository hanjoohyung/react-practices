import React from 'react';

export default function() {
    return (
        <div>
            <h2>YAMMI</h2>
            <p>JSX Tutorials - 특징 1: HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10'/>
            {/*
                2. Element는 꼭 닫혀야 한다.
                ex) <br> = X <br/> = O
                    <hr> = X <hr/> = O
            */}
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png'/>
             {/*
                3. 속성이름은 DOM API기반이다. 
                <div id='box' class='box'>BOX YAMMI</div>
                document.getElementById('box').className = 'box' 
            */}
            <div id='box' className='box'>BOX YAMMI</div>
        </div>
    )
}