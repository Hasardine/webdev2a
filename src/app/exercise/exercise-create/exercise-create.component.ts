import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.css']
})
export class ExerciseCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public exercisesService: ExercisesService) {}

  onAddExercise(form: NgForm) {
    // alert('Exercise Added');
    // console.dir(exerciseInput);
    // this.newExercise = this.enteredValue;
    if (form.invalid) {
      return;
    }

    this.exercisesService.addExercise(form.value.title, form.value.content);
    form.resetForm();
  }

}
