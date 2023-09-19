import ClassComponent from './component_230919/ClassComponent';
import FunctionComponent from './component_230919/FunctionComponent';
import BugComponent from './component_230919/BugComponent';
import TestOneClassComponent from './component_230919/TestOneClassComponent';
import TestTwoClassComponent from './component_230919/TestTwoClassComponent';
import MultiplicationTableGrid from './component_230919/MultiplicationTableComponent';
import FoodClassComponent from './component_230919/FoodClassComponent';
import BookComponent from './component_230919/BookComponent';
import Event from './component_230919/Event';
import EventClass from './component_230919/EventClass';
import ClassMessageCompo from './component_230919/ClassMessageCompo';

function App230919() {
    return (
        <>
            {/*                  문자형외의 값을 보내고 싶을 ㄸ는 {}로 감싼다                */}
            <ClassComponent name="gijin" age={26}></ClassComponent>
            <ClassComponent></ClassComponent>
            <FunctionComponent myClass="study" done="study" name="gijin" age={26}>
                <BugComponent></BugComponent>
            </FunctionComponent>
            <FoodClassComponent food="치킨"></FoodClassComponent>
            <FoodClassComponent></FoodClassComponent>

            <BookComponent title="자유론" author="존스튜어트밀" price="13500원" type="교양"></BookComponent>
            <Event></Event>
            <EventClass></EventClass>
            {/* <MultiplicationTableGrid></MultiplicationTableGrid> */}
            <TestOneClassComponent></TestOneClassComponent>
            <TestTwoClassComponent></TestTwoClassComponent>
            <ClassMessageCompo message="hello world"></ClassMessageCompo>
        </>
    );
}

export default App230919;
