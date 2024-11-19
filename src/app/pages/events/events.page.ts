import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  faqs = [
    {
      question: 'What types of events does the shelter host?',
      answer:
        'We host a variety of events, including adoption fairs, fundraising galas, volunteer appreciation days, pet wellness clinics, and community outreach activities. These events are designed to support our mission and engage the community.',
    },
    {
      question: 'How can I find out about upcoming events?',
      answer: 'You can find information about our upcoming events on the "Events" tab of our website, or follow us on social media for the latest updates.',
    },
    {
      question: 'How can I participate in an event?',
      answer: 'Participation details are provided for each event on our website. You may need to register in advance, buy tickets, or sign up as a volunteer depending on the event.',
    },
    {
      question: 'Can I volunteer at the shelter’s events?',
      answer: 'Yes, we welcome volunteers to help with our events. Check the "Join Us to Volunteer" section on our website for more information on how to get involved.',
    },
    {
      question: 'Who can I contact if I have more questions about an event?',
      answer: 'For additional questions, please contact our events team through the contact information provided on the event page or email us directly.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}