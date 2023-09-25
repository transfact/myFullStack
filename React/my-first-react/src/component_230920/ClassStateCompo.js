import React from 'react';

class ClassStateCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
        // this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }
    //화살표함수만 쓸꺼면 일때는 이렇게 해도 됨
    // state = {
    //     num : 0
    // }

    handleIncrement = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }));
        this.setState((prevState) => ({ number: prevState.number + 1 }));
    };
    handleDecrement() {
        this.setState((prevState) => ({ number: prevState.number - 1 }));
    }
    render() {
        return (
            <div>
                <h2>Number : {this.state.number}</h2>
                <button type="button" onClick={this.handleIncrement}>
                    증가
                </button>
                <button type="button" onClick={this.handleDecrement}>
                    감소
                </button>
            </div>
        );
    }
}

export default ClassStateCompo;
