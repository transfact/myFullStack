package com.example.myBatis.service;

import com.example.myBatis.domain.Users;
import com.example.myBatis.dto.UserDTO;
import com.example.myBatis.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@ComponentScan(basePackages = {"com.example.myBatis.mapper.MainMapper"})
public class MainService {
    //XML 주입 SQL 쿼리와 java객체간의 매핑 정의

    @Autowired
    private MainMapper mainMapper;

    public List<UserDTO> getUserList(){
        List<Users> result = mainMapper.findAll();
        List<UserDTO> users = new ArrayList<>();
        int i =0;
        for(Users r : result){
            users.add(new UserDTO(r.getId(),r.getName(),r.getNickname(),i++));
        }

        return users;
    }
    public void add(UserDTO userDto){
        Users user = new Users(userDto.getName(), userDto.getNickname()) ;
        mainMapper.insertUser(user);
    }
}
