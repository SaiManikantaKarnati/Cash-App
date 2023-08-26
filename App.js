import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './src/components/Page1';
import Page2 from './src/components/Page2';
import Page3 from './src/components/Page3';
import Page4 from './src/components/Page4';
import Page5 from './src/components/Page5';

const App = () => {
    return (
        <div>
            <Page1 />
            <Page2 /> 
            <Page3 />
            <Page4 />
            <Page5 />
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);