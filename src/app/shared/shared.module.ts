import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { pipeModule } from '../pipes/seach.pipe.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    pipeModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers:[ReactiveFormsModule]
})
export class SharedModule { }
