import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  newMessage: string = '';
  messages: Array<{ text: string, sender: 'user' | 'admin', timestamp: string }> = [];

  constructor() { }

  ngOnInit() {
    // Example messages
    this.messages = [
      { text: 'Hi, I need assistance with my pet.', sender: 'user', timestamp: '10:00 AM' },
      { text: 'Hi! How can I help you with that?', sender: 'admin', timestamp: '10:05 AM' }
    ];
  }

  sendMessage() {
    if (this.newMessage.trim().length === 0) return; // Avoid sending empty messages

    // Add the new message to the messages array
    this.messages.push({
      text: this.newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Clear the input field after sending
    this.newMessage = '';

    // Simulate admin's reply after a delay (optional)
    setTimeout(() => {
      this.messages.push({
        text: 'Thank you for your message. We will get back to you soon.',
        sender: 'admin',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1000); // Admin response delay
  }
}
