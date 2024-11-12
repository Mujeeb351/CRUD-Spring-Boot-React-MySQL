package com.crud_with_react.crud_app_react.controller;

import com.crud_with_react.crud_app_react.model.User;
import com.crud_with_react.crud_app_react.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/api/user")
    public User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/api/alluser")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

}