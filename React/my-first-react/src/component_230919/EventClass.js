import { Component } from 'react';

class EventClass extends Component {
    constructor(props) {
        super(props);
        //this binding
        this.handleClick = this.handleClick.bind(this); //u
    }

    handleClick() {
        alert('클래스 컴포넌트 이벤트');
    }

    handleClick2 = () => {
        alert('클래스형 컴포넌트 2번');
    };
    render() {
        return (
            <>
                <h1>Event Class</h1>
                <button onClick={this.handleClick}>Click Me</button>
                <button onClick={this.handleClick2}>Click Me2</button>
            </>
        );
    }
}
export default EventClass;
