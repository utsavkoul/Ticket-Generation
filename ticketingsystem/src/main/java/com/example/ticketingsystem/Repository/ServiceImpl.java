package com.example.ticketingsystem.Repository;

import com.example.ticketingsystem.Dtos.TicketDto;
import com.example.ticketingsystem.Entities.Ticket;
import com.example.ticketingsystem.Services.TicketServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class ServiceImpl implements TicketServices {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public List<Ticket> getTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket getTicket(Long id) {
        return ticketRepository.findById(id).orElse(null);
    }

    @Override
    public String createTicket(TicketDto ticketDto) {
        String department = ticketDto.getDepartment();
        String city = ticketDto.getCity();
        String priority = ticketDto.getPriority();
        String description = ticketDto.getDescription();
        String title = ticketDto.getTitle();
        LocalDateTime assignedTime = ticketDto.getAssignedTime();
        String reslovedTime = ticketDto.getResolvedTime();
        Ticket ticket = new Ticket(department, priority, assignedTime, title, description, reslovedTime, city);
        ticketRepository.save(ticket);
        return "Ticket Created";
    }

    @Override
    public void ticketAssignment(Ticket ticket) {
        String Department = ticket.getDepartment();
        Map<String, String> departmentstoId = new HashMap<>();
        departmentstoId.put("DEVELOPMENT", "1");
        departmentstoId.put("DATABASE", "2");
        departmentstoId.put("BACKEND", "3");
        departmentstoId.put("FRONTEND", "4");

        String assignedToId = departmentstoId.get(Department.toUpperCase());
        ticket.setAssignedUserId(Long.parseLong(assignedToId));




    }

    @Override
    public String updateStatus(Long id,String status ) {
        Ticket ticket = ticketRepository.findById(id).orElse(null);
        if(ticket != null) {
            ticket.setStatus(status);
        }else {
            return "Ticket not found";
        }
        ticketRepository.save(ticket);
        return "Updated Ticket Status";
    }

    @Override
    public List<Ticket> viewTicketsForUser(Long userId) {
        return ticketRepository.findByAssignedUserId(userId);
    }
}
