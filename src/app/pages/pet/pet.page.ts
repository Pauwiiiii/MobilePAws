import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {

  petCareResources = [
    {
      title: 'Basic Dog Care',
      description: 'Everything you need to know about dog care essentials.',
      link: 'https://www.aspca.org/pet-care/dog-care/general-dog-care',
      image: 'assets/images/petcare1.webp',
    },
    {
      title: 'How to Train Your Cat',
      description: 'Tips and tricks to train your feline friend.',
      link: 'https://www.catschool.co/how-to-train-a-cat-the-ultimate-cat-training-guide/',
      image: 'assets/images/petcare2.jpeg',
    },
    {
      title: 'Best Nutrition for Dogs',
      description: 'Learn the importance of a balanced diet for dogs.',
      link: 'https://www.rspcapetinsurance.org.au/pet-care/dog-care/what-should-feed-dog',
      image: 'assets/images/petcare3.jpeg',
    },
    {
      title: 'Essential Supplies for Cats & Dogs',
      description: 'Must-have items to ensure your cat\'s and dog\s comfort.',
      link: 'https://www.petexpress.com.ph/blogs/lifestyle/pet-supplies-checklist-6-must-have-pet-essentials',
      image: 'assets/images/petcare4.webp',
    },
    {
      title: 'First Aid for Pets',
      description: 'Basic first aid knowledge to keep your pet safe.',
      link: 'https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners',
      image: 'assets/images/petcare5.jpeg',
    },
    {
      title: 'First Aid for Pets',
      description: 'Basic first aid knowledge to keep your pet safe.',
      link: 'https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners',
      image: 'assets/images/petcare5.jpeg',
    }
  ];

  constructor() { }

  ngOnInit() { }

  // Function to open the article link in a new tab
  openArticle(link: string) {
    window.open(link, '_blank');
  }
}
