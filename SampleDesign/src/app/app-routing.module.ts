import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component:   DashBoardComponent},

  { path: '', redirectTo: 'SignInComponent', pathMatch: 'full' },
  { path: 'sign-in', component:   SignInComponent},

  { path: '', redirectTo: 'SignUpComponent', pathMatch: 'full' },
  { path: 'sign-up', component:   SignUpComponent},

  { path: '', redirectTo: 'FooterComponent', pathMatch: 'full' },
  { path: 'footer', component:   FooterComponent},
   { path: '', redirectTo: 'FooterComponent', pathMatch: 'full' },
 
  { path: 'tasks', component:   TasksComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
