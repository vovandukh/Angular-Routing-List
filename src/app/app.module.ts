import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { PhoneBookComponent } from './works/phone-list/phone-book.component';
import { SearchPipe } from './works/phone-list/search.pipe';
import { SortPipe } from './works/phone-list/sort.pipe';
import { BodyTaskListComponent } from './works/task-list/body-task-list/body-task-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';
import { UserListComponent } from './works/user-list/user-list.component';

import { WorksComponent } from './works/works.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenzorComponent,
    PhoneBookComponent,
    TaskListComponent,
    UserListComponent,
    WorksComponent,
    SortPipe,
    SearchPipe,
    BodyTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
