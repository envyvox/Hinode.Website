import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandCategoryLocalizePipe } from './pipes/commandCategoryLocalize.pipe';
import {LocationLocalizePipe} from './pipes/locationLocalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommandCategoryLocalizePipe,
    LocationLocalizePipe
  ],
  exports: [
    CommandCategoryLocalizePipe,
    LocationLocalizePipe
  ]
})
export class SharedModule { }
