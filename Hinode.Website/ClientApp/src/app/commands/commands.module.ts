import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandsComponent } from './commands.component';
import { Route, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { SharedModule } from '../shared/shared.module';
import {ButtonModule} from 'primeng/button';

const routes: Array<Route> = [
  {
    path: 'commands',
    pathMatch: 'full',
    component: CommandsComponent
  }
];

@NgModule({
  declarations: [
    CommandsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TableModule,
        RippleModule,
        InputTextModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        TagModule,
        SharedModule,
        ButtonModule
    ]
})
export class CommandsModule { }
