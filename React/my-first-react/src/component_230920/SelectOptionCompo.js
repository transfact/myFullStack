import React from 'react';
class SelectOptionCompo extends React.Component {
    state = {
        selectOption: 'all',
    };

    handleSelectChange = (e) => {
        this.props.onCreate({
            selectOption: e.target.value,
        });
        this.setState({ selectOption: e.target.value });
    };
    render() {
        return (
            <select onChange={this.handleSelectChange}>
                <option value="all">전체</option>;
                {this.props.data.map((writer, idx) => {
                    return (
                        <option key={idx} value={writer}>
                            {writer}
                        </option>
                    );
                })}
            </select>
        );
    }
}

export default SelectOptionCompo;
