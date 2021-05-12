import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommandsModule } from './commands/commands.module';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TabMenuModule,
        CommandsModule,
        MenubarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
