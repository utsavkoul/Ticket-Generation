package com.example.ticketingsystem.Dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TicketDto {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime assignedTime = LocalDateTime.now() ;
    private String priority;
    private String resolvedTime;
    private String city;
    private String department;
    private String assignedUserName;
}
