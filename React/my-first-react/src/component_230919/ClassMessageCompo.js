import { Component } from 'react';
class ClassMessageCompo extends Component {
    alerting = () => {
        alert(this.props.message);
    };

    render() {
        return (
            <div>
                <h2>이벤트 핸들링</h2>
                <button onClick={this.alerting}>Show Message</button>
            </div>
        );
    }
}

export default ClassMessageCompo;
