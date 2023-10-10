// 게임 인터페이스를 작성해줘
interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'Hero Game',
    price: 50000,
    desc: 'DC 히어로 & 각각의 개성은 물론, 액션의 재미까지!',
    category: 'ACTION',
    platform: '모바일',
};

let heroGame_B: Game = {
    title: '마블 퓨처 파이트',
    price: 50000,
    category: '롤플레잉',
    platform: '모바일',
};

console.log(heroGame_B.desc);
