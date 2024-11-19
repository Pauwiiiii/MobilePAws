import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notifications = [
    { title: 'Event Reminder', message: 'You have an event tomorrow', read: false },
    { title: 'Application Status', message: 'Your application is approved!', read: true },
    { title: 'New Submission', message: 'Your recent submission has been reviewed.', read: false }
  ];

  unreadNotificationsCount: number;

  constructor() {
    // Calculate initial unread notifications count
    this.unreadNotificationsCount = this.notifications.filter(n => !n.read).length;
  }

  ngOnInit() {}

  // Marks the specific notification as read and updates unread count
  markAsRead(notification: { title: string, message: string, read: boolean }) {
    if (!notification.read) {
      notification.read = true;
      // Update unread count after marking as read
      this.unreadNotificationsCount = this.notifications.filter(n => !n.read).length;
    }
  }
}
