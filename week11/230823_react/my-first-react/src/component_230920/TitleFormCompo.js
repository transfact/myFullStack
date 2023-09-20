import React from 'react';
class TitleFormCompo extends React.Component {
    state = {
        writer: '',
        title: '',
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate({
            writer: this.state.writer,
            title: this.state.title,
        });
        this.setState({ writer: '', title: '' });
    };
    handleChangeWriter = (e) => {
        //handleChangeWriter의 state를 정해줘
        this.setState({ writer: e.target.value });
    };
    handleChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    };

    render() {
        return (
            <div>
                <form name="texts" onSubmit={this.handleSubmit}>
                    <span>작성자 : </span>
                    <input type="text" value={this.state.writer} onChange={this.handleChangeWriter} placeholder="작성자" required></input>
                    <span>제목 : </span>
                    <input type="text" value={this.state.title} onChange={this.handleChangeTitle} placeholder="title" required></input>
                    <button type="submit">제출</button>
                </form>
            </div>
        );
    }
}

export default TitleFormCompo;
