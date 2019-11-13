import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExercisesService } from '../exercises.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Exercise } from '../exercise.model';
// import exerciseList from '../../helpers/exercises';

@Component({
  selector: 'app-exercise-create',
  templateUrl: './exercise-create.component.html',
  styleUrls: ['./exercise-create.component.css']
})
export class ExerciseCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  private mode = 'create';
  private exerciseId: string;
  exercise: Exercise;

  constructor(public exercisesService: ExercisesService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('exerciseId')) {
        this.mode = 'edit';
        this.exerciseId = paramMap.get('exerciseId');
        this.exercise = this.exercisesService.getExercise(this.exerciseId);
      } else {
        this.mode = 'create';
        this.exerciseId = null;
      }
    });
  }

  onSaveExercise(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'create') {
      this.exercisesService.addExercise(form.value.title, form.value.content);
    } else {
      this.exercisesService.updateExercise(
        this.exerciseId,
        form.value.title,
        form.value.content
        );
    }
 // onAddExercise(form: NgForm) {
    // alert('Exercise Added');
    // console.dir(exerciseInput);
    // this.newExercise = this.enteredValue;
    // if (form.invalid) {
    //   return;
    // }

 //   this.exercisesService.addExercise(this.selectedExercise);
 //   form.resetForm();
//  }

  }
}
