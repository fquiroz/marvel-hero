import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@capacitor/network';


@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.component.html',
  styleUrls: ['./network-error.component.scss'],
})
export class NetworkErrorComponent    {

  constructor( private router: Router) {
    this.initializeApp();
  }


  initializeApp() {
    Network.addListener('networkStatusChange', (status) => {

      if (status.connected == false) {
        this.router.navigate(['/network']);
      } else {
        this.router.navigate(['hero-list']);
      }
    });
  }

}
