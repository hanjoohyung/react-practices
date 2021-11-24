import React from 'react';

export default function() {
    /*
        리액트 컴포넌트는 단일루트 노드만 렌더링이 가능하다.
        오류
        <h2>YAMMI02</h2>
        <p>JSX Tutorials - 특징 2: Single Root node</p>
    */
    return (
        <div id='App'>
            <h2>YAMMI02</h2>
            <p>JSX Tutorials - 특징 2: Single Root node</p>
        </div>
    )
}