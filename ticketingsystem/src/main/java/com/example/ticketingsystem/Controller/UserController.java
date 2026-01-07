package com.example.ticketingsystem.Controller;

import com.example.ticketingsystem.Entities.Ticket;
import com.example.ticketingsystem.Entities.User;
import com.example.ticketingsystem.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

     @Autowired
    UserRepository userRepository;
     @PostMapping("/user/add")
     public ResponseEntity<String> addUser(@RequestBody User user){
         userRepository.save(user);
         return ResponseEntity.ok("User added successfully");
     }
     @GetMapping("/users")
     public List<User> getAllUsers(){
         return userRepository.findAll();
     }


}
