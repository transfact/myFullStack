SELECT * FROM kdt9.member;
use kdt9;
drop table member;
create table member (
id  varchar(20) not null primary key,
name varchar(5) not null,
age int ,
gender varchar(2) not null,
email varchar(50),
promotion varchar(2) default "x"
);
alter table member modify name varchar(5) not null default "기천";

create table user(
id int not null auto_increment primary key,
name varchar(10) not null,
age int not null,
address varchar(100)
); 

desc user;

insert into user(name,age,address)
values
("기천",26,"달안로"),
("민정",20,"마포구"),
("Kim",22,"서울");
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이한이', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('이지은', 32, '부산광역시 동구 ');
INSERT INTO user (name, age, address) VALUES ('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('박수진', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

select * from user ;

select * from user where address like "%구";
select * from user where age < 25 limit 1;

select * from user where age < 25 order by age asc;

select id,name ,age,id+10 as id10 from user ;

select *,length(address) from user;
# offset (건너 뛰기) 페이지네이션
select * from user order by id desc limit 3 ;

#sql 
select * from user where age between 25 and 35;
select * from user where age >=25 and age<=35;

select * from user where age in (20,21,32,24);

select * from user where address like "%광역%";
select * from user where name like "__희";

insert into user(name,age) values("홍길동",28);

select * from user where address is null;

select * from user where address is not null and age > 25;

delete A from user A, user B where A.id < B.id and A.name=B.name; 

ALTER TABLE user AUTO_INCREMENT = 30; 

#초기화 하자
ALTER TABLE user AUTO_INCREMENT=1;
SET @COUNT = 0;
UPDATE user SET id = @COUNT:=@COUNT+1;

select * from user;

create table user2 (
id varchar(10) not null primary key,
pw varchar(20) not null,
name varchar(5) not null,
gender enum("F","M"," ") default " ",
birthday Date not null,
age int(3) not null default 0
);
select * from user2;
desc user2;

insert into user2 (id,pw,name,gender,birthday,age)
values 
("hong1234","804bkg","홍길동","M","1998-01-31",33),
("sexsung","87awjkdf","성춘향","F","1992-03-31",31),
("power70","qxur8sda","변사또","M","1970-05-02",53),
("hanjo","jk48fn4","한조","M","1984-10-18",39);


insert into user2 (id,pw,name,gender,birthday,age)
values 
("widowmaker",'38ewifh3',"위도우","F","1976-06-27",47),
("dvadva","k3f3ah","송하나","F","2001-06-03",22),
("jungkrat","4ifha7f","정크랫","M","1999-11-11",24);

select * from user2 order by birthday asc;

select * from user2 where gender ="M" order by name desc;


