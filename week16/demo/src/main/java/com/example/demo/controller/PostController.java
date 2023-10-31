package com.example.demo.controller;

import com.example.demo.DTO.UserDTO;
import com.example.demo.vo.PraticeVo;
import com.example.demo.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

//@RestController ->api 컨트롤러가 된다.
@Controller
public class PostController {
    @PostMapping("/post/response1")
    public String postResponse1(@RequestParam String name, Model model){
        //@RequestBody 전달받은 body데이터를 json형태의 객체로 만듬
        model.addAttribute("name",name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postResponse2(@RequestParam(required = false) String name, Model model){
        //@RequestBody 전달받은 body데이터를 json형태의 객체로 만듬
        model.addAttribute("name",name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody
    public String postResponse3(@RequestParam(required = false,defaultValue = "default") String name, Model model){
        //@RequestBody 전달받은 body데이터를 json형태의 객체로 만듬
        model.addAttribute("name",name);
        return "response";
    }
    @PostMapping("/pratice2/postForm")
    public String postPratice1(@RequestParam String name,@RequestParam String sex,
                              @RequestParam String years,@RequestParam String months,
                               @RequestParam String days,@RequestParam String hobby,
                               Model model){
        model.addAttribute("name",name);
        model.addAttribute("sex",sex);
        model.addAttribute("years",years);
        model.addAttribute("months",months);
        model.addAttribute("days",days);
        model.addAttribute("hobby",hobby);
        return "praticePost";
    }
    @PostMapping("/pratice2/postForm2")
    @ResponseBody
    public String postPratice2(@RequestBody  PraticeVo vo,
                               Model model){
        model.addAttribute("name",vo.getName());
        model.addAttribute("sex",vo.getSex());
        model.addAttribute("years",vo.getYears());
        model.addAttribute("months",vo.getMonths());
        model.addAttribute("days",vo.getDays());
        model.addAttribute("hobby",vo.getHobby());
        return "회원가입 성공, 데이터 : "+vo.getName()+vo.getSex()+vo.getHobby();
    }


    @PostMapping("/vo/response2")
    @ResponseBody
    public String voResponse2(@ModelAttribute UserVO vo, Model model){
        return vo.getAge()+" "+vo.getName();
    }
    @PostMapping("/vo/response3")
    @ResponseBody
    public String voResponse3(@RequestBody UserVO vo, Model model){
        return "나이 : "+vo.getAge()+"  이름 : "+vo.getName();
    }

    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosRes3(@RequestParam String name,@RequestParam String age){
        //axios post는 request파람을 못받아요
        return " 이름 :  "+name +" 나이 :  "+ age;
    }
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosRes4(UserDTO dto){
        //axios post는 request파람을 못받아요
        return " 이름 :  "+dto.getName() +" 나이 :  "+ dto.getAge() ;
    }

    //아주 잘됨
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosRes5(@RequestBody UserDTO dto){
              return " 이름 :  "+dto.getName() +" 나이 :  "+ dto.getAge() ;
    }
    //modelAttribute, RequestParam의 특징
    //일반 폼에서는 파라미터로 들어옴
    //json 으로 값 보내면 데이터로 옴, 파라미터 X
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVoRes4(UserVO vo){
        return " 이름 :  "+vo.getName() +" 나이 :  "+ vo.getAge();
    }
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVoRes5(@RequestBody UserVO vo){
        //requestbody는 setter가 아니라 각각의 필드에 직접적으로 값을 주입함
        return " 이름 :  "+vo.getName() +" 나이 :  "+ vo.getAge();
    }




}
