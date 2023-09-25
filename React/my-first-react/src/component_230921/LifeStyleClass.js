import { Component } from 'react';

//부모가 자식의 상태를 보관해주지 않는듯
class MyComponent extends Component {
    state = {
        tmp: 0,
    };
    //생설될떄
    componentDidMount() {
        console.log(this.state.tmp);
        this.setState({ tmp: this.state.tmp + 1 });
        console.log('componentDidMount');
    }
    //업데이트 될떄
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    //compo 없어질떄
    componentWillUnmount() {
        console.log(this.state.tmp);
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <>
                <h1>My Compo {this.props.number}</h1>
            </>
        );
    }
}

class LifeStyleClass extends Component {
    state = {
        number: 0,
        visible: true,
    };

    render() {
        return (
            <>
                <br></br>
                <button
                    onClick={() => {
                        this.setState({
                            number: this.state.number + 1,
                        });
                    }}
                >
                    PLUS
                </button>
                <button
                    onClick={() => {
                        this.setState({
                            visible: !this.state.visible,
                        });
                    }}
                >
                    on/off
                </button>
                {this.state.visible && <MyComponent number={this.state.number} />}
            </>
        );
    }
}

export default LifeStyleClass;
