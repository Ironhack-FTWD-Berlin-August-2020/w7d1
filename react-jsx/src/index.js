import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// some jsx - can contain any valid js expression
const name = 'Timmy';
// const element = <h1>Hello {name.length + 4} !!</h1>

// you can also return it from functions
const greet = () => <h1>Hello React</h1>

// wrap multiple lines with parentheses
// class has to be replaced with className
const greeting = (
    <h1 className="heading">
        Hello React JSX
    </h1>
);
// this is what react does internally
// React.createElement(h1, { className: 'heading' }, 'Hello React JSX');


const myStyle = {
    color: 'red'
};
// jsx elements must have one root element
// all tags have to be closed
const element = (
    <div>
        <p style={{ color: 'green' }}>
            Random Number: {Math.floor(Math.random()) * 10}
        </p>
        <hr />
        <p style={myStyle}>
            Second Paragraph
        </p>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);