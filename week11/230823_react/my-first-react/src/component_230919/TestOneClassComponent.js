import { Component } from 'react';

class TestOneClassComponent extends Component {
    render() {
        const name = 'honeyworker';
        const mystyle = {
            backgroundColor: 'orange',
            color: 'blue',
            textSize: '20px',
            padding: '10px',
        };
        return <div style={mystyle}>{name}</div>;
    }
}

export default TestOneClassComponent;
