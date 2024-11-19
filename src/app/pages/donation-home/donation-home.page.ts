import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-home',
  templateUrl: './donation-home.page.html',
  styleUrls: ['./donation-home.page.scss'],
})
export class DonationHomePage implements OnInit {
  faqs = [
    {
      question: 'What can I donate?',
      answer:
        'You can donate money, pet food, cleaning supplies, blankets, toys, and other essential items. Shelters often have a wishlist on their website.',
    },
    {
      question: 'How do I donate?',
      answer: 'Donations can usually be made online via the shelter’s website, through e-wallet (Gcash), or in person at the shelter.',
    },
    {
      question: 'Can I donate items instead of money?',
      answer: 'Yes, our shelters accept in-kind donations such as pet food, toys, and cleaning supplies.',
    },
    {
      question: 'What is the best way to donate?',
      answer: 'Monetary donations are often the most flexible and allow shelters to allocate resources where they are needed most, but in-kind donations are also greatly appreciated.',
    },
    {
      question: 'How will my donation help the animals?',
      answer: 'Your donation supports the shelter in providing food, medical care, and a safe environment for animals until they find permanent homes.',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToDonate() {
    this.router.navigate(['/donation']);
  }
}
