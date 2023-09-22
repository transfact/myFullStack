import { useState } from 'react';

export default function PostFunc() {
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState([]);
    const [option, setOption] = useState('writer');
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    function handleContents(e) {
        e.preventDefault();
        setContents([...contents, { writer, title }]);
        setWriter('');
        setTitle('');
        console.log(contents);
    }
    function makeSearchResult() {
        const results = contents.filter((content, idx) => {
            if (option === 'writer') {
                return content.writer.includes(keyword);
            } else {
                return content.title.includes(keyword);
            }
        });
        setSearchResult(results);
    }

    return (
        <>
            <div>
                <form name="texts" onSubmit={handleContents}>
                    <span>작성자 : </span>
                    <input
                        type="text"
                        value={writer}
                        onChange={(e) => {
                            setWriter(e.target.value);
                        }}
                        placeholder="작성자"
                        required
                    ></input>
                    <span>제목 : </span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        placeholder="title"
                        required
                    ></input>
                    <button type="submit">제출</button>
                </form>
            </div>
            <br />
            <select value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="writer">작성자</option>;<option value="title">제목</option>;
            </select>

            <input
                type="text"
                value={keyword}
                onChange={(e) => {
                    setKeyword(e.target.value);
                }}
                placeholder="검색어"
            ></input>
            <button onClick={makeSearchResult}>검색</button>
            <h2>기본 테이블</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map((post, idx) => {
                        return (
                            <tr key={idx}>
                                <th>{idx + 1}</th>
                                <th>{post.title}</th>
                                <th>{post.writer}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h2>검색 테이블</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map((post, idx) => {
                        return (
                            <tr key={idx}>
                                <th>{idx + 1}</th>
                                <th>{post.title}</th>
                                <th>{post.writer}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
