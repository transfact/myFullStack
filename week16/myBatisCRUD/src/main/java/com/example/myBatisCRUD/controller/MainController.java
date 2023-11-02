package com.example.myBatisCRUD.controller;

import com.example.myBatisCRUD.domain.Users;
import com.example.myBatisCRUD.dto.UserDTO;
import com.example.myBatisCRUD.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    private MainService mainService;


    @GetMapping("/")
    public String getUsers(Model model) {
        List<UserDTO> userList = mainService.getUserList();
        model.addAttribute("list", userList);
        model.addAttribute("info",1);
        return "home";
    }

    @PostMapping("/insert")
    @ResponseBody
    public String InsertUser(UserDTO userdto) {
        Users users = new Users();
        users.setId(userdto.getId());
        users.setPassword(users.getPassword());
        users.setNickname(users.getNickname());
        mainService.addUser(users);

        return "1";
    }

    @PostMapping("/update")
    @ResponseBody
    public String UpdateUser(UserDTO userdto) {
        Users users = new Users();
        users.setId(userdto.getId());
        users.setPassword(users.getPassword());
        users.setNickname(users.getNickname());
        mainService.updateUser(users);
        return "1";
    }

    @PostMapping("/delete")
    @ResponseBody
    public String DeleteUser( UserDTO userdto) {
        Users users = new Users();
        users.setId(userdto.getId());
        users.setPassword(users.getPassword());
        users.setNickname(users.getNickname());
        mainService.delUser(users);
        return "1";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody UserDTO userdto,Model model) {
        Users users = new Users();
        users.setId(userdto.getId());
        users.setPassword(users.getPassword());
        users.setNickname(users.getNickname());
        String check = mainService.loginUser(users);
        List<UserDTO> userList = mainService.getUserList();
        model.addAttribute("list", userList);
        model.addAttribute("info",0);
        return "home";
    }
}
