import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class component
class Greeting extends Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
)