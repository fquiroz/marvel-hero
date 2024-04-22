import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
  }

  networkStatus: any;

  initializeApp() {
    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed', status);
      if (status.connected == false) {
        this.router.navigate(['/network']);
      } else {
        this.router.navigate(['hero-list']);
      }
    });
  }
}
