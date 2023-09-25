import React from 'react';

class ClassColorStateCompo extends React.Component {
    state = {
        txt: '검정색',
        color: 'black',
    };
    setBlue = () => {
        this.setState({ txt: '파랑색', color: 'blue' });
    };

    setRed = () => {
        this.setState({ txt: '빨간색', color: 'red' });
    };

    render() {
        const { txt, color } = this.state;
        return (
            <div>
                <h2 style={{ color: color }}>{txt} 글씨</h2>

                <button type="button" onClick={this.setBlue}>
                    파란색
                </button>
                <button type="button" onClick={this.setRed}>
                    빨간색
                </button>
            </div>
        );
    }
}

export default ClassColorStateCompo;
