package com.example.ticketingsystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ticketingsystem.Entities.User;
public interface UserRepository extends JpaRepository<User, Long> {

}
