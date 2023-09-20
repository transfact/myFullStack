import React from 'react';
import TableComponent from './TableComponent';
import './css/classFormStateCss.css';
import TitleFormCompo from './TitleFormCompo';
import SelectOptionCompo from './SelectOptionCompo';
import ClassSearchCompo from './ClassSearchCompo';
class ClassFormStateCompo extends React.Component {
    constructor(props) {
        super(props);
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
        console.log(data);

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
                <SelectOptionCompo data={this.state.writers} onCreate={this.handleOptionSubmit}></SelectOptionCompo>
                <ClassSearchCompo onCreate={this.handleSearchSubmit} onDestroy={this.clearBtn}></ClassSearchCompo>
                <TableComponent posts={this.state.posts} searchWord={this.state.searchWord} selectOption={this.state.selectOption}></TableComponent>
            </>
        );
    }
}

export default ClassFormStateCompo;

{
    /* <div>
<form name="texts" onSubmit={this.handleSubmit}>
    <span>작성자 : </span>
    <input type="text" value={this.state.writer} onChange={this.handleChangeWriter} placeholder="작성자"></input>
    <span>제목 : </span>
    <input type="text" value={this.state.title} onChange={this.handleChangeTitle} placeholder="title"></input>
    <button type="submit">제출</button>
</form>
</div> */
}
{
    /* <form onSubmit={this.handleSearch}>
<input type="text" placeholder="검색" onChange={this.handleSearchChange}></input>
<button type="submit">검색</button>
<button type="button" onClick={this.clearBtn}>
    초기화
</button>
</form> */
}

{
    /* <table>
<thead>
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
    </tr>
</thead>
<tbody>
    {this.state.posts
        .filter((post) => this.state.searchWord == '' || post.title == this.state.searchWord)
        .map((post, idx) => {
            return this.state.selectOption == 'all' || this.state.selectOption == post.writer ? (
                <tr key={idx}>
                    <th>{post.idx}</th>
                    <th>{post.title}</th>
                    <th>{post.writer}</th>
                </tr>
            ) : null;
        })}
</tbody>
</table> */
}

// (
//     <select onChange={this.handleSelectChange}>
//         <option value="all">전체</option>;
//         {this.state.writers.map((writer, idx) => {
//             return (
//                 <option key={idx} value={writer}>
//                     {writer}
//                 </option>
//             );
//         })}
//     </select>
// );
