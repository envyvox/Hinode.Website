import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandCategoryLocalizePipe } from './pipes/enum-to-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommandCategoryLocalizePipe
  ],
  exports: [
    CommandCategoryLocalizePipe
  ]
})
export class SharedModule { }
