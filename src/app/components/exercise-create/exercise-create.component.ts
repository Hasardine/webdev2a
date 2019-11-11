import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ExercisesService } from '../../services/exercises.service';
import exerciseList from '../../helpers/exercises';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.css']
})
export class ExerciseCreateComponent {
  allExercises = exerciseList;
  selectedExercise = '';

  constructor(public exercisesService: ExercisesService) {}

  onAddExercise(form: NgForm) {
    // alert('Exercise Added');
    // console.dir(exerciseInput);
    // this.newExercise = this.enteredValue;
    // if (form.invalid) {
    //   return;
    // }

    this.exercisesService.addExercise(this.selectedExercise);
    form.resetForm();
  }

}
