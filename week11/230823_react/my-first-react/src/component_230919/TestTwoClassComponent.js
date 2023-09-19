import { Component } from 'react';
import imgLogo from './logo192.png';
class TestTwoClassComponent extends Component {
    render() {
        const style = {
            color: 'orange',
            textSize: '40px',
            marginTop: 20,
        };
        return (
            <div style={style}>
                <h2>안녕하세요</h2>
                <img src={imgLogo}></img>
            </div>
        );
    }
}
export default TestTwoClassComponent;
