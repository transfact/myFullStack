package com.example.demo.controller;

import com.example.demo.DTO.UserDTO;
import com.example.demo.vo.UserVO;
import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class GetController {
    @GetMapping("/")
    public String getMain(){
        return "request";
    }
//    value가 이름이 된다
    // value = "?" 은 param과 동일해야한다.
    @GetMapping("/get/response1")
    public String getResponse1(@RequestParam (value="name") String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
    //기본값이 true기 떄문에, require= falas할뿐임.
    @GetMapping("/get/response2")
    public String getResponse2(@RequestParam (value="name",required = false) String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getResponse3(@PathVariable String name, @PathVariable("age") String old, Model model){
        model.addAttribute("name",name);
        model.addAttribute("age",old);
        return "response";
    }

    @GetMapping({"/get/response4/{name}","/get/response4/{name}/{age}",})
    public String getResponse4(@PathVariable String name, @PathVariable(required = false) String age, Model model){
        model.addAttribute("name",name);
        model.addAttribute("age",age);
        return "response";
    }

    @GetMapping("/introduce/{name}")
    public String praticeGetMapping1(@PathVariable String name,Model model){
        model.addAttribute("name",name);
        return "response";
    }

    @GetMapping("/introduce2")
    public String praticeGetMapping2(@RequestParam(value = "name") String name, @RequestParam(value="age") int age,Model model){
        model.addAttribute("name",name);
        model.addAttribute("age",age);
        return "response";
    }
    @GetMapping("/pratice2")
    public String pratice2(Model model){
        return "pratice2";
    }

    //modelattribute는 생략할 수 있다.
    //같은 이름끼리 set함수를 설정한다.
    //프론트에서 name,age를 보냈다. 
    //그럼 dto에서 setName과 setAge를 찾는 메커니즘인것
    //근데 name, old라고 하면 old는 실행되지 않을것
    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoResponse1(UserDTO dto, Model model){
        return dto.getAge()+" "+dto.getName();
    }
    //아래는 오류나는 코드 ResponseBody는 get과 사용할 수 없다.
    //requestBody는 json or xml으로만
    //기본값 -> www-x-form-urlencoded
    @GetMapping("/dto/response11")
    @ResponseBody
    public String dtoResponse11(@RequestBody UserDTO dto, Model model){
        return dto.getAge()+" "+dto.getName();
    }
    //modelAttribute
    @GetMapping("/dto/response111")
    @ResponseBody
    public String dtoResponse111(@ModelAttribute  UserDTO dto, Model model){
        return dto.getAge()+" "+dto.getName();
    }
    //이건 null null 나온다. ModelAttribute는 클래스의 set함수들을 이용하기 때문이다.
    //음...
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voResponse1(@ModelAttribute UserVO vo, Model model){
        return vo.getAge()+" "+vo.getName();
    }


    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosRes1(@RequestParam String name,@RequestParam String age){
        return " 이름 :  "+name +" 나이 :  "+ age;
    }

    //UserDTO 가능
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosRes2(UserDTO dto){
        return " 이름 :  "+dto.getName() +" 나이 :  "+ dto.getAge();
    }

    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVoRes2( UserVO vo){
        return " 이름 :  "+vo.getName() +" 나이 :  "+ vo.getAge();
    }

}
