import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import { ExerciseCreateComponent } from './exercise/exercise-create/exercise-create.component';

import { ExerciseComponent } from './components/exercise/exercise.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path : '', component: ExerciseComponent },
  { path: '**', component: NotfoundComponent },
  { path: 'create', component: ExerciseCreateComponent },
  { path: 'edit/:exerciseId', component: ExerciseCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
