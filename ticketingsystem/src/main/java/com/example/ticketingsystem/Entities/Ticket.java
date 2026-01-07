package com.example.ticketingsystem.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Entity(name = "tickets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String status;
    private LocalDateTime assignedTime;
    private String priority;
    private String resolvedTime;
    private String department;
    private String city;
    private Long assignedUserId;
//    private User user;

    public Ticket(String title, String description, LocalDateTime assignedTime, String priority, String resolvedTime, String department, String city) {
        this.title = title;
        this.description = description;
        this.assignedTime = assignedTime;
        this.priority = priority;
        this.resolvedTime = resolvedTime;
        this.department = department;
        this.city = city;
    }
}
