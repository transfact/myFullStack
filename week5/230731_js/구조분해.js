// 배열 구조 분해


const [a,b="default",c,...d]=[1,2,3,4,5,6,7,8,9];
console.log(a,b,c,d)

let x=1, y=3;
[x,y] =[y,x]
console.log(x,y)


//객체 구조 분해
let jsons =[{
    "id": 1,
    "goodsName": "LoL 챔피언 잠옷 티버 열쇠고리 키링 무작위 리그 오브 레전드 롤 굿즈",
    "type": "acc",
    "game": "리그오브레전드",
    "price": 19000,
    "src": "game-items-shoppingmall/src/img/accessory/3febc3d0bb2120e738c4d30f0c802e28.jpg"
  },
  {
    "id": 2,
    "goodsName": "LoL 설맞이 축제 잠옷 티버 열쇠고리 (무작위)",
    "type": "acc",
    "game": "리그오브레전드",
    "price": 19000,
    "src": "game-items-shoppingmall/src/img/accessory/d3b5be3846815ebd99ca9e582600082e.jpg"
  },
  {
    "id": 3,
    "goodsName": "LoL 불의 축제 마스크 컬렉션 야스오 진 탈론 리그 오브 레전드 롤 굿즈",
    "type": "acc",
    "game": "리그오브레전드",
    "price": 79000,
    "src": "game-items-shoppingmall/src/img/accessory/616493d13ebd428eb8488479e088754f.jpg"
  },
  {
    "id": 4,
    "goodsName": "LoL K/DA 배지 세트(한정판)",
    "type": "acc",
    "game": "리그오브레전드",
    "price": 36000,
    "src": "game-items-shoppingmall/src/img/accessory/71a2da55655c9aa5032542fea60a107f.png"
  }]
{
    // 배열구조분해는 var이 생략된거라고 보면 된다
    [obj1,obj2,obj3,obj4]=jsons
    console.log(obj1);
    //객채구조분해는 무조건 let, const, var중에 선언해야한다.
    //수정 {}를 구조분해로 인식하는 게 디폴트라, ()를 전체로 감싸면 된다.
    //역시 기본은ㄴ var
    ({id:idx,goodsName,type,game,price,src} = obj1);
    console.log(idx,src)

    const a=[1,2,3]
    const b=[1,2]
    console.log(a.concat(b)) //배열합치기
    console.log(...a,...b)
    
    const c = [..."당연히 문자열로 분해되지롱"];
    console.log(c)

    function get(a,...rest){
        console.log(rest)
    }
    get(1,2,3,4,5,6,7,8,9)
}
{
obj1.setter="123"
console.log(obj1)
console.log(game)

// console.log(type)
}

// 클래스

class Cat{
 constructor(name,age){
    this.name =name;
    this.age=age;
}   
    mew(){
        console.log("야옹");
    }
    eat(){
        console.log("123")
    }
}
let c1=new Cat(1,2);
console.log(c1);
