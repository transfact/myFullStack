package com.example.myBatis.mapper;
import com.example.myBatis.domain.Users;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.context.annotation.Bean;

import java.util.List;

@Mapper
public  interface MainMapper {
    //mapper.xml 참조
    List<Users> findAll();
    //mapper.xml 참조 안함
    @Insert("INSERT INTO USER(ID,NAME,NICKNAME) VALUES (#{name},#{nickname}")
    void insertUser(Users users);
}
