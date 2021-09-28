import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { PhoneBookComponent } from './works/phone-list/phone-book.component';
import { TaskListComponent } from './works/task-list/task-list.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { WorksComponent } from './works/works.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'users', component: UserListComponent },
      { path: 'phone', component: PhoneBookComponent },
      { path: 'task', component: TaskListComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
