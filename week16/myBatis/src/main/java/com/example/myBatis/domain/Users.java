package com.example.myBatis.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Users {

    private int id ;
    private String name;
    private String nickname;

    public Users(String name, String nickname) {
        this.name = name;
        this.nickname=nickname;

    }
}
