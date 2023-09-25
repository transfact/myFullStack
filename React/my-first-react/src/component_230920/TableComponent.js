import React from 'react';
class ClassFormStateCompo extends React.Component {
    render() {
        const { posts, searchWord, selectOption } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {posts
                        .filter((post) => searchWord == '' || post.title.includes(searchWord))
                        .map((post, idx) => {
                            return selectOption == 'all' || selectOption == post.writer ? (
                                <tr key={idx}>
                                    <th>{post.idx}</th>
                                    <th>{post.title}</th>
                                    <th>{post.writer}</th>
                                </tr>
                            ) : null;
                        })}
                </tbody>
            </table>
        );
    }
}

export default ClassFormStateCompo;
