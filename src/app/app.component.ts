import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavController, MenuController, IonTabs } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public headerTitle: string = '';
  unreadNotificationsCount: number = 0;
  public isHomePage: boolean = false; // Track home page
  @ViewChild(IonTabs) tabRef!: IonTabs;
  public homeTabClass: string = '';
  showHeader: boolean = true;
  showBottomBar: boolean = true;
  profile = {
    name: 'Karino Amo',
    email: 'PawsConnect@gmail.com',
  };

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private router: Router,
  ) {
    // Listen for route changes and update header title and home page state
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderTitle(event.url);
      }
    });
  }

  async ngAfterViewInit() {
    // Check if the current route is the homepage and select the appropriate tab
    if (this.router.url === '/home') {
      this.tabRef.select('home');
      this.homeTabClass = 'activated';
    }
  }

  updateHeaderTitle(url: string) {
    // Update isHomePage based on exact route match
    this.isHomePage = url === '/home' || url === '/';  // Exact match for home routes

    // Handle cases for pages that hide the header or bottom bar
    if (url.includes('pet-info')) {
      this.showHeader = false;
      this.showBottomBar = true;
      this.headerTitle = 'Pet Information';
      return;
    } else {
      this.showBottomBar = true;
      this.showHeader = true;
    }

    if (url.includes('login') || url.includes('signup') || url.includes('signup1') || url.includes('signup2') || url.includes('termcons1') || url.includes('onboarding') ||  url.includes('register') || url.includes('forgotpass') || url.includes('petquesintro')|| url.includes('petques') || url.includes('pet-info')) {
      this.showHeader = false;
      this.showBottomBar = false; 
      this.showHeader = false;
      this.headerTitle = ''; 
      return;
    } else {
      this.showBottomBar = true; 
    }

    // Update header title based on route path
    if (url.includes('homes')) {
      this.headerTitle = 'PawsConnect';
    } else if (url.includes('adopt')) {
      this.headerTitle = 'Adopt Pet';
    } else if (url.includes('donation') || url.includes('donation-home')) {
      this.headerTitle = 'Donation';
    } else if (url.includes('lost')) {
      this.headerTitle = 'Lost & Found';
    } else if (url.includes('pet')) {
      this.headerTitle = 'Pet Care';
    } else if (url.includes('events')) {
      this.headerTitle = 'Events';
    } else if (url.includes('message')) {
      this.headerTitle = 'Message';
    } else if (url.includes('notification')) {
      this.headerTitle = 'Notification';
    } else if (url.includes('faq')) {
      this.headerTitle = 'FAQs';
    } else if (url.includes('about')) {
      this.headerTitle = 'About Us';
    } else if (url.includes('profile')) {
      this.headerTitle = 'User Profile';
    } else if (url.includes('accountsettings')) {
      this.headerTitle = 'Account Settings';
    } else if (url.includes('changepass')) {
      this.headerTitle = 'Change Password';
    } else if (url.includes('termcons')) {
      this.headerTitle = 'Terms & Conditions';
    } else {
      this.headerTitle = '';
    }
  }

  // Navigation actions
  goToProfile() {
    this.navCtrl.navigateRoot('/profile');
  }

  openNotifications() {
    this.navCtrl.navigateRoot('/notification');
  }

  closeMenu() {
    this.menuCtrl.close('main-menu');
  }
}
