package com.example.ticketingsystem.Controller;

import com.example.ticketingsystem.Dtos.TicketDto;
import com.example.ticketingsystem.Entities.Ticket;
import com.example.ticketingsystem.Services.TicketServices;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@NoArgsConstructor
@RestController
public class TicketController {
    @Autowired
    TicketServices ticketServices;
    @GetMapping("/tickets")
    public List<Ticket> getTickets(){
        return ticketServices.getTickets();
    }
    @GetMapping("/ticket/{id}")
    public Ticket getTicket(@PathVariable Long id){

        Ticket ticket = ticketServices.getTicket(id);

            return ticket;


    }
    @PostMapping("/createticket")
    public ResponseEntity<String> createTicket(@RequestBody TicketDto ticketDto){
       String status = ticketServices.createTicket(ticketDto);
        return ResponseEntity.ok(status);
    }
    @GetMapping("/tickets/{id}")
    public List<Ticket> getUserTickets(@RequestBody Long id){
        List<Ticket> tickets = ticketServices.viewTicketsForUser(id);
        return tickets;
    }
    @PostMapping("/ticket/update/{id}")
    public ResponseEntity<String> updateTicket(@PathVariable Long id, @RequestBody String status){
        ticketServices.updateStatus(id, status);

        return ResponseEntity.ok("Ticket Updated At "+ status);
    }
}
