//함수형 컴포넘트
import PropTypes from 'prop-types';
function FunctionComponent(props) {
    // const { done, name, age } = props;
    // console.log(done, name, age);
    const myClass = props.myClass;
    return (
        <>
            <h1>반가워요 {myClass}에 오신걸 환영해요</h1>
            <p>함수형 컴포넌트 입니다.</p>
            <h2>{props.name}</h2>
            {props.children}
        </>
    );
}
FunctionComponent.defaultProps = {
    name: 'transpact123',
    age: '20',
};
FunctionComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};
export default FunctionComponent;
