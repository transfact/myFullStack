package com.example.dbPratice;

import com.example.dbPratice.repository.UserH2Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
//바로 실행되게 함
//서비스가 아니고 ,repository도 아니여서 compo
@Component
public class UserCommand implements CommandLineRunner {

    @Autowired
    private UserH2Repository user;

    @Override
    public void run(String... args) throws Exception {
        try{
            user.createUser();
            user.insertUser(new Users(3,"gichun","서울시마포구"));
        }catch(Exception e){
            System.out.println(e);
        }
    }
}
