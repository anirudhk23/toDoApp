import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";

import { ToDoListService } from "./to-do-list.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
