let a: string = 'hi';

let b: number = 1;
let c: true = true;
let d: object = {
    name: 'lee',
    age: 25,
};

console.log(a, b, c, d);
// 설정을 tsconfig를 활용하여 바꿀것
//typescript를 쓰는 이유
//js실행시 의도와 다르게 실행가능
//정적 파일언어 =>실행하지 않고 코드상의 에러를 알려줌

//배열
const aList: string[] = ['hi', 'lee'];
const nList = [1, 2, 3, 4, '5'];

interface myInfo {
    name: string;
    age: number;
}

let myinfo2: {
    name: string;
    age: number;
}[];

myinfo2 = [{ name: 'lee', age: 25 }];
console.log(myinfo2);

//튜플 어떤 순서로 데이터타입이 올지 정의하는 배열
//본질이 배열이라 push를 막을 수 없다. 막으려면 readonly를 써줘야한다.
type drink = readonly [string, number];
let drinks: drink = ['cola', 1];
console.log(typeof drinks);
// console.log(...drinks);

function testBug(fanta: drink) {
    console.log(fanta);
}

testBug(['pesi', 1]);
//열거형 0부터 시작하는 무언가의 값
enum drinkName {
    cola,
    pesi,
    fanta = 2,
    cidar,
    monster,
}
enum Delivery {
    배달 = 'deliver',
    지연 = 'pending',
}
console.log('hi', Delivery);
console.log(drinkName.fanta);

let numOrString: (string | number)[] = [1, 2, 3, '4'];
console.log(numOrString);

interface sports {
    name: string;
    type: string;
}
type arrow = readonly [sports, boolean];

const olimpic_newgame: arrow = [
    {
        name: '양궁',
        type: '혼성',
    },
    true,
];
console.log(olimpic_newgame);

//interface and type

enum Gender {
    MALE,
    FEMALE,
    None,
}

type Gender2 = Gender.MALE | Gender.FEMALE | Gender.None;

interface Student {
    readonly name: string;
    readonly grade: number;
    readonly isPassed: boolean;
    readonly sex: Gender;
}

type Student1 = {
    readonly name: string;
    readonly grade: number;
    readonly isPassed: boolean;
    readonly sex: Gender;
};

let students: Student[] = [
    {
        name: 'LEE',
        grade: 5,
        isPassed: true,
        sex: Gender.MALE,
    },
];
