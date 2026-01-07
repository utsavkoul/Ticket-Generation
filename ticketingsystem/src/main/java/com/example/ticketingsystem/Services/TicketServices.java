package com.example.ticketingsystem.Services;

import com.example.ticketingsystem.Dtos.TicketDto;
import com.example.ticketingsystem.Entities.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface TicketServices {
    public List<Ticket> getTickets();

    public Ticket getTicket(Long id);

    public String createTicket(TicketDto ticketDto);

    public void ticketAssignment(Ticket ticket);

    public String updateStatus(Long Id, String status);

    public List<Ticket> viewTicketsForUser(Long userId);
}
