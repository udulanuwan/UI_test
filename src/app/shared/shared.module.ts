import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, SideBarComponent
  ]
})
export class SharedModule { }
