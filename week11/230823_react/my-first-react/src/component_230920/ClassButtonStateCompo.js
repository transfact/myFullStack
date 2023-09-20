import React from 'react';

class ClassButtonStateCompo extends React.Component {
    state = {
        btnText: '사라져라',
        h2Text: '안녕하세요',
        toggle: 0,
    };
    toogleBtn = () => {
        console.log(this.state);
        if (this.state.toggle == 0) {
            console.log('here1');
            this.setState((prevState) => ({ btnText: '보여라', h2Text: '', toggle: 1 }));
        } else if (this.state.toggle == 1) {
            console.log('here21');
            this.setState((prevState) => ({ btnText: '사라져라', h2Text: '안녕하세요', toggle: 0 }));
        }
    };

    render() {
        const { btnText, h2Text } = this.state;
        return (
            <>
                <button onClick={this.toogleBtn}>{btnText}</button>
                <h1>{h2Text}</h1>
            </>
        );
    }
}

export default ClassButtonStateCompo;
