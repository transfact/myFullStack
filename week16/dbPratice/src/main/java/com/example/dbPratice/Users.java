package com.example.dbPratice;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Users {
    private int id;
    private String name;
    private String address;

    public Users(int id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}


