package com.crud_with_react.crud_app_react.repository;

import com.crud_with_react.crud_app_react.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
