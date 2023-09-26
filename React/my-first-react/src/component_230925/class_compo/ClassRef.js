import { Component } from 'react';

class ClassRef extends Component {
    constructor(props) {
        super(props);
        //creatRef를 사용할떄는, React.createRef()를 할당해야한다.

        this.state = {};
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        this.myInput.focus();
        console.log(this.myInput);
    }

    render() {
        return (
            <>
                <h1>ClassRef : 버튼 클릭시 input에 포커스</h1>
                <input
                    type="text"
                    ref={(ref) => {
                        this.myInput = ref;
                    }}
                    placeholder="빈칸이면 포커스"
                />
                <button onClick={this.handleInput}>포커스!</button>
            </>
        );
    }
}

export default ClassRef;
