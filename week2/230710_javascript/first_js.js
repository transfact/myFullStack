console.log("hello world2");
console.log(typeof(console));
console.log(typeof(Array));
// 변수 특정값을 저장하는 공간
// 키워드 변수명 : 값
//  상수 : const 전역변수 var, 재선언 재할당 가능  지역변수 let 재선언 불가, 재할당은 가능
{
var num1= 1;
var num2; //선언
console.log(num2);
num2=2; //할당
console.log(num2);

let string = "sleep";
string = 'awake';
// let string = 불가능

const string2 = "잠";
let num3 = num2+2 ;
console.log(num3);
console.log(string2);
}

//변수 규칙 : 문자 숫자 _ $ 만 사용, 숫자는 첫글자로는 X
// 예약어 (let, const 같은거)
// 상수는 대문자로 시작해주는게 좋다. (근데 다를 수도?)


// 자료형
// `` 를 사용하면, 파이썬 format 하듯이 string 만들 수 있따. 
var string = `따옴표안에뭐가들어가던지간에string`;
var integer = 123; //따옴표없이숫자를적자 
console.log(string,integer);

let name ="faker";
console.log(`그는 ${name}입니다.`);

//숫자형
let float = 0.1 ;
let float2= 0.2;
// 부동소수점 쓸 때 유서깊은 버그
console.log ("유서깊은 버그"+(float+float2))

// 배열... let var array = ["1","2","3"];
// let var는 별생각 없을꺼고... const에서 자바스크립트가 뭐하는 친구들인지 알 수 있을 듯?
const arrays = [1,2,3,4,5];
console.log(arrays[0]);
// append처럼, 마지막에 추가된다.
arrays.push(6);
console.log(arrays[5]);
// 내가 알고 있는 pop 처럼 마지막에서 뺴낸다.
console.log(arrays.pop());

//가장 앞에 값 추가
arrays.unshift("신형만");
//가장 앞에 값을 반환
console.log(arrays.shift());

//index 어디에 있ㄴ? 있으면 index, 없으면 -1
console.log(arrays.indexOf(1));
// 값을 가지고 있니?
console.log(arrays.includes(3));

console.log(arrays);

