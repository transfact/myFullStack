//js function

function jsFunc(a: any, b: any) {
    return a + b;
}
function tsFunc(a: number | string, b: number | string, c?: number): number | string {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } else {
        return Number(a) + Number(b);
    }
}
//리턴 생략
const arrowTsFunc = (a: number, b: number): number => a - b;

console.log(tsFunc('hi', 'bye'));

//리턴없음
function init(): void {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
//never 타입
//never : 특정 조건에서만 빠져나갈 수 있고, 어떤 상황에서는 무한루프
//항상 함수끝에 도달하지 않는다
//절대로 noparam에 값을 넣을 수 없다.
function mkNever(noparam: never) {
    console.log('noparam!');
}
declare let newNever: never;
mkNever(newNever);

function numAdd1(x: number, y: number): number {
    return x + y;
}
console.log(numAdd1(1, 2));
