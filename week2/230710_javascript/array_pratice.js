{
    var colors = ["빨강","주황","노랑","초록","파랑","남색","보라"];
    // idx==2
    console.log(colors[2]);
    //좋아하는색 추가
    colors.push("연두색");
    console.log(colors);

    //black 위치 찾기
    let checker = colors.indexOf("검정")
    if (checker==-1){
        console.log("배열안에 없음");
    }else {
        
        console.log(checker);
    }

    //reversed
    console.log(colors.reverse());
    

    //파이썬 마냥 -1을 지원하진 않는 듯?




    // // 반복문은 자바랑 비슷한듯?
    // for(i=0; i<4; i++){
    //     console.log(colors[i]);
    // }



}