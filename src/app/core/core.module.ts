import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http/http.service';
import { DataService } from './fx/data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  providers: [
    HttpService,
    DataService
  ]
})
export class CoreModule { }
