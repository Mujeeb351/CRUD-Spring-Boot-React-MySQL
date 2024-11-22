package com.crud_with_react.crud_app_react.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundExceptionAdvice {

    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(UserNotFoundException.class)
    public Map<String, String> getExceptionMessage(UserNotFoundException exception){
        Map<String, String> exceptionMessage = new HashMap<>();
        exceptionMessage.put("Error Message: ", exception.getMessage());
        return exceptionMessage;
    }
}
