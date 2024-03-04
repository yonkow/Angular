import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [LoaderComponent],
})
export class SharedModule {}
