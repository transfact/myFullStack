create table users
(
    id bigint not null auto_increment,
    name varchar(255) not null,
    address varchar(255),
    primary key(id)
)