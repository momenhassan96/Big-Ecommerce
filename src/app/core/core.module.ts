import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [NavBarComponent, SideBarComponent, FooterComponent,HomeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
