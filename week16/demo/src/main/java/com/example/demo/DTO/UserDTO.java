package com.example.demo.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
public class UserDTO {
    private String name;
    private String age;
    public UserDTO(){

        this.age="값";
    }


    public void setName(String name) {
        if(name.equals("")){
            this.name="기본" ;
        }else{
            this.name = name;
        }
    }

    public void setAge(String age) {
        if(age.equals("")){
            this.age="값" ;
        }else{
            this.age = age;
        }
    }
}
