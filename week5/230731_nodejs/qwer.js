let product;
let price;
goMart();
pickDrink();
function goMart(){
    console.log('마트에 갔다')
}

function pickDrink(){
    setTimeout(function(){
        console.log("고민끝")
        product="콜라"
        price=2000;
        pay(product,price)
    },0)
}
function pay(product,price){
    console.log(product)
    console.log(price)
}

// pay(product,price);

//콜백함수=함수 타입 파라미터 하나더 선언
function mainFunction(p1,p2,callback){
    callback()
}
function callbackFunction(){
    console.log("콜백함수입니다.")
}
mainFunction(1,2,callbackFunction)


function promise1(flag){
    return new Promise(function(resolove,reject){
        if (flag){
            resolove('promise 상태는 fulfilled!! then으로 연결')
        }else{
            reject("promise->rejected")
        }
    })
}
promise1(true)
    .then(function(result){
    console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })