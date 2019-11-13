import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import { ExerciseCreateComponent } from './exercise/exercise-create/exercise-create.component';


const routes: Routes = [
  { path: '', component: ExerciseListComponent},
  { path: 'create', component: ExerciseCreateComponent },
  { path: 'edit/:exerciseId', component: ExerciseCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
