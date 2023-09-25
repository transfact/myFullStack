import bookImg from './liberty.jpeg';

function BookComponent(props) {
    const { title, author, price, type } = props;
    return (
        <div className="bookbox" style={{ backgroundColor: '#fbceb1' }}>
            <h1 className="book">이번주 베스트셀러</h1>
            <img className="book" src={bookImg} alt="book" width={200} height={300} style={{ margin: 'auto', display: 'block' }}></img>
            <h2 className="book">{title}</h2>
            <div className="info">저자: {author}</div>
            <div className="info">판매가: {price}</div>
            <div className="info">구분: {type}</div>
        </div>
    );
}

export default BookComponent;
