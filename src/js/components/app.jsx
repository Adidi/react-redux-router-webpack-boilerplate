import React from 'react';

const App = ({children}) =>
    <div className="app">
        <header><h1>Header</h1></header>
        <aside><h2>Aside</h2></aside>
        <div className="content">
            {children}
        </div>
    </div>;

export default App;