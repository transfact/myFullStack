//package com.example.demo.controller;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//
//import java.util.Arrays;
//import java.util.List;
//
//
////@Controller
//public class HelloController {
//    class Person{
//        private String name;
//        private int age;
//
//        public String getName() {
//            return name;
//        }
//
//        public void setName(String name) {
//            this.name = name;
//        }
//
//        public int getAge() {
//            return age;
//        }
//
//        public void setAge(int age) {
//            this.age = age;
//        }
//
//        public Person(String name, int age) {
//            this.name = name;
//            this.age = age;
//        }
//    }
//
////    @GetMapping
//    public String getHi(Model model){
//
//        Person p1 = new Person("lee",24);
//        Person p2 = new Person("gi",21);
//        Person p3 = new Person("chun",22);
//        Person p4 = new Person("lgc",25);
//        Person p5 = new Person("gcl",26);
//        Person p7 = new Person("gcl",232246);
//        List<Person> pList = Arrays.asList(p1,p2,p3,p4,p5,p7);
//        model.addAttribute("msg","hi");
//        model.addAttribute("msg2","manager");
//        model.addAttribute("utext","<strong>HI</strong>");
//        model.addAttribute("value","placeHolder");
//        model.addAttribute("with","adfdsafsf");
//        model.addAttribute("link","https://www.naver.com");
//        model.addAttribute("src","lowscale.png");
//        model.addAttribute("age","20");
//        model.addAttribute("pList",pList);
//        return "hi";
//    }
//}
