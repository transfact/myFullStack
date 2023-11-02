package com.example.myBatis.dto;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class UserDTO {
        public UserDTO( String name, String nickname,int no) {
                this.name = name;
                this.nickname = nickname;
                UserDTO.no = no;
        }
        public UserDTO( int id,String name, String nickname,int no) {
                this.id =id;
                this.name = name;
                this.nickname = nickname;
                UserDTO.no = no;
        }
        private int id ;
        private String name;
        private String nickname;
        public static int no;
}
