import React from 'react';
class ClassSearchCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
    }

    handleSearchChange = (e) => {
        this.setState({ keyword: e.target.value });
    };

    handleSearch = (e) => {
        e.preventDefault();
        this.props.onCreate({
            searchWord: this.state.keyword,
        });
        this.setState({ keyword: this.state.keyword });
    };
    clearBtn = () => {
        this.props.onDestroy({
            data: '',
        });
        this.setState({ keyword: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSearch}>
                <input type="text" placeholder="검색" value={this.state.keyword} onChange={this.handleSearchChange}></input>
                <button type="submit">검색</button>
                <button type="button" onClick={this.clearBtn}>
                    초기화
                </button>
            </form>
        );
    }
}
export default ClassSearchCompo;
