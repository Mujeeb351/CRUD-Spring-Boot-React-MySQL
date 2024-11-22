package com.crud_with_react.crud_app_react.exception;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Long id){
        super(id + "th id user couldn't found");
    }
}
