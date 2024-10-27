import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarItems = [
    {
      path: 'countries/by-region',
      label: 'Por región',
    },
    {
      path: 'countries/by-country',
      label: 'Por país',
    },
    {
      path: 'countries/by-capital',
      label: 'Por Capital',
    },
  ];
}
