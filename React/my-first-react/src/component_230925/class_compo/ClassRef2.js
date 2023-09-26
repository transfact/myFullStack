import React, { Component } from 'react';

class ClassRef2 extends Component {
    myInput = React.createRef();

    handleInput = () => {
        //ref를 설정하기 위해서는 this.myInput.current.focus() 로 접근한다
        this.myInput.current.focus();
    };

    render() {
        return (
            <>
                <h1>ClassRef2 : 버튼 클릭시 input에 포커스</h1>
                <input type="text" ref={this.myInput} placeholder="빈칸이면 포커스" />
                <button onClick={this.handleInput}>포커스!</button>
            </>
        );
    }
}

export default ClassRef2;
