package com.example.myBatis.controller;
import com.example.myBatis.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.myBatis.service.MainService;

import java.util.ArrayList;

@Controller
@ComponentScan(basePackages = {"com.example.myBatis.mapper.MainMapper"})
public class MainController {

    @Autowired
    MainService mainService;

    @GetMapping("/users")
    public String getUsers(Model model){
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>)  mainService.getUserList();
        model.addAttribute("list",userList);
        return "user";
    }

    @GetMapping("/user/insert")
    public String getInsertUser(@RequestParam String name,@RequestParam String nickname,Model model){
        UserDTO user = new UserDTO(name,nickname,++UserDTO.no);
        mainService.add(user);
        model.addAttribute("list",null);
        return "user";
    }
}
