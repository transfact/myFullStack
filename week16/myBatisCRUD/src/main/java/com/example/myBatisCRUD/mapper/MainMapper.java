package com.example.myBatisCRUD.mapper;

import com.example.myBatisCRUD.domain.Users;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Mapper
public  interface MainMapper {
    @Select("select * from users")
    List<Users> findAll();
    //mapper.xml 참조 안함
    @Insert("INSERT INTO USERS (id, password, nickname) VALUES (#{id}, #{password}, #{nickname})")
    void insertUser(Users users);

    @Update("UPDATE USERS SET PASSWORD = #{password} ,NICKNAME = #{nickname}  WHERE ID = #{id} ")
    void updateUser(Users users);

    @Delete("Delete from users  where id = ${id}")
    void delUser(Users users);

    @Select("select * from user where id = #{id} and password = #{password}")
    Optional<Users> findOne(Users users);
}
