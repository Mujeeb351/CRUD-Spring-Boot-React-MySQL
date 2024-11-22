package com.crud_with_react.crud_app_react.controller;

import com.crud_with_react.crud_app_react.exception.UserNotFoundException;
import com.crud_with_react.crud_app_react.model.User;
import com.crud_with_react.crud_app_react.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
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

    @GetMapping("/api/user/{id}")
    User editUserException(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));

    }

    @PutMapping("/api/user/{id}")
    User updateUser(@RequestBody User newuser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newuser.getUsername());
                    user.setName(newuser.getName());
                    user.setEmail(newuser.getEmail());
                    return userRepository.save(user);

                }).orElseThrow(()-> new UserNotFoundException(id));

    }

    @DeleteMapping("/api/user/{id}")
    String deleteUserById(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "user id " + id + " has been deleted successfull!";
    }

}
