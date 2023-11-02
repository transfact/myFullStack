package com.example.myBatisCRUD.service;

import com.example.myBatisCRUD.domain.Users;
import com.example.myBatisCRUD.dto.UserDTO;
import com.example.myBatisCRUD.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {

    //XML 주입 - SQL쿼리와 Java객체간의 매핑 정의
    @Autowired
    private MainMapper mainMapper;

    public List<UserDTO> getUserList() {
        //실제 데이터베이스에서 가져오는 Users배열
        List<Users> result = mainMapper.findAll();
        //위에서 받은 Users배열을 UsersDTO배열로 반환하기
        List<UserDTO> users = new ArrayList<>();

        for (Users value : result) {
            UserDTO user = new UserDTO();

            user.setId(value.getId());
            user.setNickname(value.getNickname());
            user.setPassword(value.getPassword());
            users.add(user);
        }
        return users;
    }

    public void addUser(Users users) {
        mainMapper.insertUser(users);
    }

    public void delUser(Users users){
        mainMapper.delUser(users);
    }

    public void updateUser(Users users){
        mainMapper.updateUser(users);
    }
    public String loginUser(Users users){
        Optional<Users> u = mainMapper.findOne(users);
        if(u.isPresent()){
            return "1";
        }else{
            return "0";
        }
    }
}
