import React from 'react';

const App = function() {
    // const app = React.createElement('h1', null, 'YAMMI');
    // return app;
    const message = "yammi";
    return (
        <div>
            <h1>{message + " yammi"}</h1>
        </div>
    );
}

export {App};
