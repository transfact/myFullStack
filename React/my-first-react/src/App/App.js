import './App.css';

function App() {
    const test = 1;
    const styles = {
        color: 'blue',
        fontSize: '45px',
        backgroundColor: 'black',
    };
    let txt = '';
    if (test === 0) {
        txt = '0';
    } else {
        txt = 'not 0';
    }
    //과제2
    const petName = '또또';
    const breed = '강아지';

    const spanStyle = {
        textDecorationLine: 'underline',
    };
    //과제3
    const title = 'Hello World';

    //map 실습용 배열
    const testList = ['a', 'b', 'c', 'd', 'e', 'f', 'k', 'p'];

    //앞이 참이면 뒤에 것이 나오고, 앞이 false면 그대로 false가 된다
    const results = '' && 'hello';
    console.log(results);
    const defaultPrice = 1000;
    const dbprice = 0 || defaultPrice;
    console.log(dbprice);

    const users = [
        { id: 1, name: 'John', age: 25, vip: true },
        { id: 2, name: 'Jane', age: 19, vip: false },
        { id: 3, name: 'Alice', age: 30, vip: true },
        { id: 4, name: 'Bob', age: 18, vip: false },
        { id: 5, name: 'Charlie', age: 35, vip: true },
    ];

    const filterUser = users.filter((value) => {
        return value.vip;
    });
    console.log('필터사용 :', filterUser);
    const mapUser = filterUser.map((value) => {
        // console.log('-', value.name);
        return value.name;
    });
    console.log(mapUser);
    users
        .filter((value) => {
            return value.vip;
        })
        .map((value) => {
            console.log('-', value.name);
            return '-' + value.name;
        });

    const tmp = '' && 'hi';
    console.log('tmp:', tmp);
    const switcher = true;
    return (
        switcher && (
            <>
                {!switcher && (
                    <div className="study1">
                        <div>
                            이것은 div입니다.
                            <br />
                            <h3>이것은 div안의 h3태그입니다</h3>
                        </div>
                    </div>
                )}

                <div className="study1_2">
                    <div>
                        과제 1-2번
                        <br />
                        <span>{3 + 5 === 8 ? '정답입니다' : '오답입니다'}</span>
                    </div>
                </div>
                <hr />
                <div className="study2">
                    <h2>
                        제 반려 동물의 이름은 <span style={spanStyle}>{petName}</span>입니다
                        <br />
                        <span style={spanStyle}>{petName}</span>은/는 <span style={spanStyle}>{breed}</span>입니다
                    </h2>
                </div>

                <hr />
                <div className="study3">
                    <div className="test">{title}</div>
                    <br></br>
                    <div style={{ textAlign: 'center' }}>
                        아이디 :
                        <input className="input" type="text" />
                        <br />
                        <br></br>
                        비밀번호 :
                        <input className="input" type="password" />
                    </div>
                </div>

                <hr />
                <div className="study4">
                    <div> 실습4</div>
                    <div style={{ display: 'flex' }}>
                        <div className="divbox red"></div>
                        <div className="divbox orange"></div>
                        <div className="divbox yellow"></div>
                        <div className="divbox green"></div>
                        <div className="divbox blue"></div>
                        <div className="divbox navy"></div>
                        <div className="divbox purple"></div>
                    </div>
                </div>

                <div>
                    {testList.map((value, idx) => {
                        return <div key={value + idx}>HI test value :{value}</div>;
                    })}
                </div>
                <div>
                    <h2>myFirstProject, hello react</h2>
                    <div style={styles}>react starts</div>
                    <span>{test === 0 ? <input type="text" value={txt} /> : <input type="text" value={txt} />}</span>
                    <br />
                    <span>{txt}</span>
                </div>
            </>
        )
    );
}

export default App;
