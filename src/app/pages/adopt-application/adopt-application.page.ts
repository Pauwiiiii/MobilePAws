import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt-application',
  templateUrl: './adopt-application.page.html',
  styleUrls: ['./adopt-application.page.scss'],
})
export class AdoptApplicationPage {
  // Tracks the current step in the process
  currentStep: string = 'documents';

  // Data for document list (for demonstration)
  documentList = [
    { name: 'Proof of your residence' },
    { name: 'Proof of your permanent address' },
    { name: 'Proof of your occupation' },
    { name: 'Proof of your income' },
    { name: 'Proof of pet crate' },
    { name: 'Proof of collapsible cage' },
  ];

  // Data for the adopter questionnaire (for demonstration)
  questions = [
    {
      question: 'Can you commit to providing both dry and wet food for the pet?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Are you capable of offering necessary medical care for the pet?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Will you be able to provide updates on the pet when requested?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Are you open to allowing an ocular inspection of your living space?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Will you be present and willing to pay the documentation fee at the barangay?',
      options: ['Yes', 'No'],
    },
    {
      question: 'Are you willing to pay for the vaccine?',
      options: ['Yes', 'No'],
    },
  ];

  survey = [
    {
      question: 'What type of pet are you interested in adopting?',
      options: ['Dog', 'Cat'],
    },
    {
      question: 'What size of pet do you prefer?',
      options: ['Small', 'Medium', 'Large'],
    },
    {
      question: 'Do you have a preferred age range for your pet?',
      options: ['Puppy/Kitten', 'Adult', 'Senior'],
    },
    {
      question: 'Do you prefer a male or female pet?',
      options: ['Female', 'Male'],
    },
    {
      question: 'Do you have a preference for your pet’s coat type?',
      options: ['Short coat', 'Long coat', 'No preference'],
    },
    {
      question: 'How often are you willing to groom your pet?',
      options: ['Daily', 'Weekly', 'Monthly'],
    },
  ];

  currentQuestionIndex: number = 0;
  totalQuestions: number = this.questions.length;

  constructor() {}

  // Navigate to the next step in the process
  nextStep() {
    switch (this.currentStep) {
      case 'documents':
        this.currentStep = 'question';
        break;
      case 'question':
        this.currentStep = 'survey';
        break;
      case 'survey':
        this.currentStep = 'thank-you';
        break;
      default:
        console.warn('No next step defined for:', this.currentStep);
    }
  }
  
  // Navigate to the previous step in the process
  prevStep() {
    switch (this.currentStep) {
      case 'survey':
        this.currentStep = 'question';
        break;
      case 'thank-you':
        this.currentStep = 'survey';
        break;
      case 'question':
        this.currentStep = 'documents';
        break;
      default:
        console.warn('No previous step defined for:', this.currentStep);
    }
  }
  

  // Handle document upload action
  uploadDocument(docName: string) {
    console.log('Uploading document: ', docName);
    // Logic to upload the document goes here
  }

  // Submit the adopter questionnaire
  submitSurvey() {
    console.log('Submitting survey...');
    // Logic for submitting the survey goes here
    this.nextStep(); // Move to the next step (should transition to 'thank-you')
  }

  // Close the current section and navigate to the guide
  goToGuide() {
    console.log('Navigating to the guide...');
    // Logic to navigate to a different page or reset the form
  }
}