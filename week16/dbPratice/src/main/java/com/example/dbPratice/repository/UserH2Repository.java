package com.example.dbPratice.repository;


import com.example.dbPratice.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserH2Repository {
    //필드 주입
    @Autowired
    private JdbcTemplate jdbc;

    private static String INSERT_USER =
            """
                INSERT INTO users (id, name, address) VALUES ( ? , ? , ? );
            """ ;
    private static String DELETE_USER =
            """
                DELETE FROM users WHERE id = ? ;
            """;
    private static String SELECT_USER =
            """
                SELECT * FROM users WHERE id = ? ;
            """;
    public static String CREATE_USER =
            """
                CREATE TABLE USERS (
                ID INT PRIMARY KEY,
                NAME VARCHAR(255),
                ADDRESS VARCHAR(255)
                );    
            """;

    public void createUser(){
        jdbc.execute(CREATE_USER);
    }
    public void insertUser(Users user) {
        jdbc.update(INSERT_USER, user.getId(), user.getName(), user.getAddress());
    }
    public void deleteId(int id) { jdbc.update(DELETE_USER, id);}
    public Users findId(int id) {
        return jdbc.queryForObject(SELECT_USER, new BeanPropertyRowMapper<>(Users.class),id);
    }
}
    /*
    * @Component 파생?
    *
    * @Repository 데이터계층 component 혹은 데이터베이스에서 발생할 수 있는 예외를 Spring에 둠.
    * @Serivice : 비즈니스 로직 컨테이너
    * @Controller 주로 어플리케이션에서 mvc 패턴의 컨트롤러 담당, 이 어노테이션을 사용한 클래스는 클라이언트의 요청을 받게 된다.
    * */

    // autowired : 음...그냥 scanner 보여주고 그런거 다 너가 관리해야한다 그렇게 설명하면 안되나...
    // 이 annotation을 사용하면 spring 컨테이너가 자동으로 해당 타입의 Bean에 해당나 메소드에 주입
    // 코드가 간결해진다 단점 : 의존성을 변경하거나 테스트에 어려움이 생길 수 있다.
    //생성자에 주입하면 Spring에 파라미터에 맞는 빈을 찾아 주입.
    // 불변성을 보장, 필요한 의존성을 명학하게 표시...

    //메소드 주입 setter나 임의의 메서드에 사용하면 해당 메소드의 파라미터 타입에 맞ㄴ는 bean을 찾아 주입.

    //@AutoWired 모두 객체 생성후 참조
    //차이점 : 스프링의 IOC컨테이너를 통해 의존성 주입 사용 어노테이션이 붙어있으면 스프링이 관리해준다.
    //New : 개발자가 명시적으로 객체를 생성함.

//JDBC update() insert,update, delete 실행
//query 여러행 반화하는 쿼리 결과 사용
//excute 반환값이 없는 sql 명령문 실행
//queryForMap() ㅎ당 데이터를 map형태로 반환
//queryFOrInt() 단일값 반환

//SQLMAPPER sql 직접 작성, 세밀한 튜닝 필요할 떄 유용.
//ORN 자바 객체와 데이터베이스 관계 매핑
//Entity사용하여  DB테이블과 어떻게 매핑될지를 정의
//crud sql 자동 생성


