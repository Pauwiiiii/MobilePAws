import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage {
  selectedSpecies: string = '';  // For species filter (e.g., dog, cat)
  selectedGender: string = '';    // For gender filter (e.g., male, female)
  selectedAgeRange: string | null = null; // Allow null to indicate no filter
  selectedKind: string = '';      // For kind filter (e.g., small, medium, large)

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  applyFilters() {
    const filters = {
      species: this.selectedSpecies || undefined,
      gender: this.selectedGender || undefined,
      ageRange: this.selectedAgeRange || undefined, // Use undefined if no age range is selected
      kind: this.selectedKind || undefined
    };

    console.log('Filters being passed back:', filters); // Debugging log
    this.modalCtrl.dismiss(filters);
  }
}
