function numAdd2(...numList: number[]): number {
    return numList.reduce((acc, cur) => (acc += cur));
}
console.log('hi', numAdd2(1, 2, 3, 4, 20000));
// let result = 0;
// numList.forEach((num) => (result += num));
// return result;
// 인수들을 받아서 배열로 만들어주는 메소드
function toArray<T>(a: T, b: T): T[] {
    console.log([a, b]);
    return [a, b];
}
toArray<number>(1, 2); // 숫자형 배열
toArray<string>('1', '2'); // 문자형 배열
toArray<string | number>(1, '2'); // 혼합 배열

// 사실 컴파일러는 전달하는 인수의 타입을 보고 스스로 추론하기 때문에 함수 호출할때 제네릭을 안써줘도 알아서 추론한다.
toArray(1, 2);
toArray('1', '2');
toArray<string | number>(1, '2'); // 하지만 가끔 자동 타입 추론이 잘안되는 경우가 있기 때문에 직접 제네릭을 선언해야한다.

function goodAdd<T>(...lists: T[]): T {
    return lists.reduce((acc, cur) => (acc = (acc as any) + cur));
}
type numOrStr = number | string;

console.log(goodAdd<string>('1', '2', '3', '4', '5'));
//함수에 모든값이 들어올 수 있다 ->제네릭 활용
// function add<T>(x: T, y: T): T {
//     // 제네릭 : 꺾쇠와 문자 T를 이용해 표현. T는 변수명이라고 보면 된다.
//     return x + y;
// }

function arrLength<T>(arr: T[]): number {
    return arr.length;
}
console.log(arrLength<string>(['hi', 'bye']));

interface superAdd {
    (a: number, b: number): number;
    (a: string, b: string): string;
}
const superAdder: superAdd = <T>(arg0: T, arg1: T) => <any>arg0 + arg1;

console.log('superAdd', superAdder('123', '123'));

function Add<T extends string | number>(arg0: T, arg1: T): T extends string ? string : number {
    return (arg0 as any) + arg1;
}

function arrElement<T>(arr: T[], idx: number): T | boolean {
    if (arr.length <= idx) {
        return false;
    }
    return arr[idx];
}
console.log('pratice ', arrElement<string>(['1', '3', '7', 'adas', 'cvz'], 3));
