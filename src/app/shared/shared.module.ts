import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SafePipe } from './pipes/safe-url.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    LoadingComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    SearchBoxComponent,
    LoadingComponent,
    SafePipe
  ]
})
export class SharedModule { }
