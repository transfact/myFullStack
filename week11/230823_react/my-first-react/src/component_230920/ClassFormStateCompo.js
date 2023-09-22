import React from 'react';
import TableComponent from './TableComponent';
import './css/classFormStateCss.css';
import TitleFormCompo from './TitleFormCompo';
import SelectOptionCompo from './SelectOptionCompo';
import ClassSearchCompo from './ClassSearchCompo';
class ClassFormStateCompo extends React.Component {
    constructor(props) {
        super(props);

        //초기화
        this.state = {
            searchWord: '',
            selectOption: 'all',
            idx: 1,
            writers: [],
            posts: [],
        };
    }

    handleSearchSubmit = (data) => {
        this.setState({ searchWord: data.searchWord });
    };

    handleCreateSubmit = (data) => {
        this.setState((prevState) => {
            const newWriter = prevState.writers.includes(data.writer) ? prevState.writers : [data.writer, ...prevState.writers];
            const newPost = [{ idx: this.state.idx, writer: data.writer, title: data.title }, ...prevState.posts];
            return { idx: prevState.idx + 1, writer: '', title: '', keyword: '', selectOption: prevState.selectOption, searchWord: '', writers: newWriter, posts: newPost };
        });
    };
    handleOptionSubmit = (data) => {
        this.setState({ selectOption: data.selectOption });
    };

    clearBtn = (data) => {
        this.setState({ searchWord: '' });
    };
    render() {
        return (
            <>
                <h2>ClassForm</h2>
                <TitleFormCompo onCreate={this.handleCreateSubmit}></TitleFormCompo>
                <SelectOptionCompo onCreate={this.handleOptionSubmit} data={this.state.writers}></SelectOptionCompo>
                <ClassSearchCompo onCreate={this.handleSearchSubmit} onDestroy={this.clearBtn}></ClassSearchCompo>
                <TableComponent posts={this.state.posts} searchWord={this.state.searchWord} selectOption={this.state.selectOption}></TableComponent>
            </>
        );
    }
}

export default ClassFormStateCompo;
