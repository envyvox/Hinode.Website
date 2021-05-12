import {Component, OnInit} from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  constructor(private _primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this._primengConfig.ripple = true;
    this.items = [
      {
        label: 'Присоединиться',
        icon: PrimeIcons.DISCORD,
        styleClass: "p-ml-auto",
        url: 'https://discord.gg/mqzzd4BYCZ'
      },
      {
        label: "Команды",
        icon: PrimeIcons.BOOK,
        routerLink: ['/commands']
      }
    ];
  }
}
