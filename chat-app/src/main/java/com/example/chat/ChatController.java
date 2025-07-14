package com.example.chat;

import org.springframework.messaging.handler.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.simp.SimpMessagingTemplate;

@Controller
public class ChatController {

    private final SimpMessagingTemplate template;

    public ChatController(SimpMessagingTemplate template) {
        this.template = template;
    }

    @MessageMapping("/send")
    public void sendMessage(Message message) {
        template.convertAndSend("/topic/messages", message);
    }
}