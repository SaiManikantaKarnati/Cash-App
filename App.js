import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './src/components/Page1';
import Page2 from './src/components/Page2';

const App = () => {
    return (
        <div>
            <Page1 />
            <Page2 />
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);